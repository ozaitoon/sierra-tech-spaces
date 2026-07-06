import { readFile } from "node:fs/promises";
import path from "node:path";
import { type NextRequest, NextResponse } from "next/server";
import { attaLeads, initialPipelineDeals, type AttaLead, type PipelineDeal } from "@/lib/atta-leads";
import { getSession } from "@/lib/auth";
import {
  isCrmDatabaseConfigured,
  loadCrmData,
  removeDeal,
  removeLead,
  upsertDeal,
  upsertLead,
} from "@/lib/atta-crm-store";

export const dynamic = "force-dynamic";

const generatedLeadsPath = path.join(process.cwd(), "public", "atta-generated-leads.json");

function isGeneratedLead(value: unknown): value is AttaLead {
  if (!value || typeof value !== "object") return false;

  const lead = value as Partial<AttaLead>;
  return Boolean(
    lead.id &&
      lead.companyName &&
      lead.industry &&
      lead.segment &&
      lead.governorate &&
      lead.city &&
      lead.industrialZone &&
      lead.sourceName &&
      lead.sourceUrl &&
      Array.isArray(lead.productsToPitch) &&
      typeof lead.fitScore === "number" &&
      lead.scoreBreakdown &&
      Array.isArray(lead.painSignals),
  );
}

async function loadGeneratedLeads() {
  try {
    const file = await readFile(generatedLeadsPath, "utf8");
    const parsed = JSON.parse(file.replace(/^\uFEFF/, "")) as unknown;

    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isGeneratedLead);
  } catch (error) {
    console.log("[GET] /api/atta-leads - generated leads unavailable", error);
    return [];
  }
}

async function isAuthorized() {
  return process.env.DEMO_BYPASS_AUTH === "true" ? true : Boolean(await getSession());
}

export async function GET() {
  console.log("[GET] /api/atta-leads - start");

  if (!(await isAuthorized())) {
    console.log("[GET] /api/atta-leads - unauthorized");
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const generatedLeads = await loadGeneratedLeads();
  const defaults = [...attaLeads, ...generatedLeads];

  try {
    const data = await loadCrmData(defaults, initialPipelineDeals);

    console.log(`[GET] /api/atta-leads - done (${data.leads.length} leads)`);
    return NextResponse.json({
      leads: data.leads,
      initialPipelineDeals: data.deals,
      databaseConnected: data.databaseConnected,
    });
  } catch (error) {
    console.error("[GET] /api/atta-leads - database error", error);
    return NextResponse.json({ error: "Could not load CRM database" }, { status: 503 });
  }
}

type CrmMutation =
  | { resource: "lead"; value: AttaLead }
  | { resource: "deal"; value: PipelineDeal };

export async function PUT(request: NextRequest) {
  if (!(await isAuthorized())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!isCrmDatabaseConfigured()) {
    return NextResponse.json({ error: "Supabase is not configured" }, { status: 503 });
  }

  const mutation = (await request.json()) as CrmMutation;

  try {
    if (mutation.resource === "lead" && mutation.value?.id) {
      await upsertLead(mutation.value);
      return NextResponse.json({ ok: true });
    }

    if (mutation.resource === "deal" && mutation.value?.leadId) {
      await upsertDeal(mutation.value);
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ error: "Invalid CRM mutation" }, { status: 400 });
  } catch (error) {
    console.error("[PUT] /api/atta-leads - database error", error);
    return NextResponse.json({ error: "Could not save CRM change" }, { status: 503 });
  }
}

export async function DELETE(request: NextRequest) {
  if (!(await isAuthorized())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!isCrmDatabaseConfigured()) {
    return NextResponse.json({ error: "Supabase is not configured" }, { status: 503 });
  }

  const resource = request.nextUrl.searchParams.get("resource");
  const id = request.nextUrl.searchParams.get("id");
  if (!id || (resource !== "lead" && resource !== "deal")) {
    return NextResponse.json({ error: "Invalid delete request" }, { status: 400 });
  }

  try {
    if (resource === "deal") await removeDeal(id);
    else await removeLead(id);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[DELETE] /api/atta-leads - database error", error);
    return NextResponse.json({ error: "Could not remove CRM record" }, { status: 503 });
  }
}
