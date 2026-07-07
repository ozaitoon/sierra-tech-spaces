import type { AttaLead, PipelineDeal } from "@/lib/atta-leads";

type StoredRow<T> = {
  id?: string;
  lead_id?: string;
  data: T;
  is_deleted: boolean;
};

function getSupabaseConfig() {
  const url = process.env.SUPABASE_URL?.replace(/\/$/, "");
  const key = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
  return url && key ? { url, key } : null;
}

async function supabaseRequest<T>(path: string, init?: RequestInit): Promise<T> {
  const config = getSupabaseConfig();
  if (!config) throw new Error("Supabase is not configured");

  const response = await fetch(`${config.url}/rest/v1/${path}`, {
    ...init,
    cache: "no-store",
    headers: {
      apikey: config.key,
      ...(config.key.startsWith("sb_secret_")
        ? {}
        : { Authorization: `Bearer ${config.key}` }),
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Supabase request failed (${response.status}): ${detail}`);
  }

  if (response.status === 204 || response.headers.get("content-length") === "0") {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}

async function seedMissingDefaults(leads: AttaLead[], deals: PipelineDeal[]) {
  if (leads.length) {
    await supabaseRequest("atta_crm_leads?on_conflict=id", {
      method: "POST",
      headers: { Prefer: "resolution=ignore-duplicates,return=minimal" },
      body: JSON.stringify(
        leads.map((lead) => ({
          id: lead.id,
          data: lead,
          source: lead.id.startsWith("manual-") ? "manual" : "seed",
        })),
      ),
    });
  }

  if (deals.length) {
    await supabaseRequest("atta_crm_deals?on_conflict=lead_id", {
      method: "POST",
      headers: { Prefer: "resolution=ignore-duplicates,return=minimal" },
      body: JSON.stringify(deals.map((deal) => ({ lead_id: deal.leadId, data: deal }))),
    });
  }
}

export function isCrmDatabaseConfigured() {
  return Boolean(getSupabaseConfig());
}

export async function loadCrmData(defaultLeads: AttaLead[], defaultDeals: PipelineDeal[]) {
  if (!getSupabaseConfig()) {
    return { leads: defaultLeads, deals: defaultDeals, databaseConnected: false };
  }

  await seedMissingDefaults(defaultLeads, defaultDeals);

  const [leadRows, dealRows] = await Promise.all([
    supabaseRequest<StoredRow<AttaLead>[]>("atta_crm_leads?select=id,data,is_deleted&order=created_at.asc"),
    supabaseRequest<StoredRow<PipelineDeal>[]>("atta_crm_deals?select=lead_id,data,is_deleted&order=created_at.asc"),
  ]);

  return {
    leads: leadRows.filter((row) => !row.is_deleted).map((row) => row.data),
    deals: dealRows.filter((row) => !row.is_deleted).map((row) => row.data),
    databaseConnected: true,
  };
}

export async function upsertLead(lead: AttaLead) {
  await supabaseRequest("atta_crm_leads?on_conflict=id", {
    method: "POST",
    headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
    body: JSON.stringify({
      id: lead.id,
      data: lead,
      source: lead.id.startsWith("manual-") ? "manual" : "seed",
      is_deleted: false,
      updated_at: new Date().toISOString(),
    }),
  });
}

export async function upsertDeal(deal: PipelineDeal) {
  await supabaseRequest("atta_crm_deals?on_conflict=lead_id", {
    method: "POST",
    headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
    body: JSON.stringify({
      lead_id: deal.leadId,
      data: deal,
      is_deleted: false,
      updated_at: new Date().toISOString(),
    }),
  });
}

export async function removeDeal(leadId: string) {
  await supabaseRequest(`atta_crm_deals?lead_id=eq.${encodeURIComponent(leadId)}`, {
    method: "PATCH",
    headers: { Prefer: "return=minimal" },
    body: JSON.stringify({ is_deleted: true, updated_at: new Date().toISOString() }),
  });
}

export async function removeLead(leadId: string) {
  await supabaseRequest(`atta_crm_leads?id=eq.${encodeURIComponent(leadId)}`, {
    method: "PATCH",
    headers: { Prefer: "return=minimal" },
    body: JSON.stringify({ is_deleted: true, updated_at: new Date().toISOString() }),
  });
}
