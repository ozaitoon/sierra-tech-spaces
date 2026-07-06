"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowDownAZ,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  CalendarClock,
  Check,
  ChevronDown,
  ChevronUp,
  Clipboard,
  Database,
  Download,
  Filter,
  Gauge,
  Mail,
  Phone,
  Plus,
  Pencil,
  Save,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Target,
  Trash2,
  Workflow,
  X,
} from "lucide-react";
import {
  type AttaLead,
  type AttaProductId,
  type LeadStage,
  type PipelineDeal,
} from "@/lib/atta-leads";

type SortMode = "score" | "company" | "location" | "industry" | "confidence";
type ViewMode = "leads" | "pipeline";
type LeadSourceType = AttaLead["sourceType"];
type LeadConfidence = AttaLead["confidence"];
type LeadExpectedValue = AttaLead["expectedValue"];

type ManualLeadForm = {
  companyName: string;
  industry: string;
  segment: string;
  governorate: string;
  city: string;
  industrialZone: string;
  address: string;
  website: string;
  phone: string;
  email: string;
  linkedin: string;
  sourceName: string;
  sourceUrl: string;
  sourceType: LeadSourceType;
  productsToPitch: AttaProductId[];
  fitScore: string;
  industryFit: string;
  productFit: string;
  locationFit: string;
  contactability: string;
  companySignal: string;
  sourceConfidence: string;
  confidence: LeadConfidence;
  whyGoodFit: string;
  painSignals: string;
  suggestedPitch: string;
  nextAction: string;
  expectedValue: LeadExpectedValue;
  lastVerified: string;
};

const MANUAL_LEADS_KEY = "atta-manual-leads";

const attaProductLabels: Record<AttaProductId, string> = {
  transformers: "DATSAN transformers",
  "electrical-panels": "Electrical panels",
  "gas-compressors": "Gas compressors",
  "oxygen-nitrogen": "Oxygen / nitrogen generators",
  "civil-mechanical": "Civil / M&E contracting",
  "facility-maintenance": "Facility maintenance",
};

const leadStages: { id: LeadStage; label: string; hint: string }[] = [
  { id: "new-target", label: "New target", hint: "Good lead, not contacted yet" },
  { id: "qualified", label: "Qualified", hint: "Right industry and buyer signal" },
  { id: "contacted", label: "Contacted", hint: "First call or email sent" },
  { id: "meeting-planned", label: "Meeting planned", hint: "Discovery or site visit booked" },
  { id: "quotation-needed", label: "Quotation needed", hint: "Scope exists, price next" },
  { id: "won", label: "Won", hint: "Converted to deal" },
  { id: "lost", label: "Lost", hint: "Not active now" },
];

const productOptions: { id: "all" | AttaProductId; label: string }[] = [
  { id: "all", label: "All products" },
  { id: "transformers", label: "Transformers" },
  { id: "electrical-panels", label: "Panels" },
  { id: "gas-compressors", label: "Gas compressors" },
  { id: "oxygen-nitrogen", label: "Oxygen / nitrogen" },
  { id: "civil-mechanical", label: "Civil / M&E" },
  { id: "facility-maintenance", label: "Maintenance" },
];

const scoreOptions = [
  { value: 0, label: "Any score" },
  { value: 75, label: "75+" },
  { value: 85, label: "85+" },
  { value: 90, label: "90+" },
];

const sourceTypeOptions: LeadSourceType[] = ["Company website", "Public directory", "Public PDF", "Search result"];
const confidenceOptions: LeadConfidence[] = ["High", "Medium", "Needs verification"];
const expectedValueOptions: LeadExpectedValue[] = ["Low", "Medium", "High", "Strategic"];

function todayIsoDate() {
  return new Date().toISOString().slice(0, 10);
}

function createEmptyManualLeadForm(): ManualLeadForm {
  return {
    companyName: "",
    industry: "",
    segment: "",
    governorate: "",
    city: "",
    industrialZone: "",
    address: "",
    website: "",
    phone: "",
    email: "",
    linkedin: "",
    sourceName: "Manual research",
    sourceUrl: "",
    sourceType: "Company website",
    productsToPitch: ["transformers"],
    fitScore: "78",
    industryFit: "16",
    productFit: "16",
    locationFit: "14",
    contactability: "12",
    companySignal: "12",
    sourceConfidence: "8",
    confidence: "Medium",
    whyGoodFit: "",
    painSignals: "",
    suggestedPitch: "",
    nextAction: "",
    expectedValue: "Medium",
    lastVerified: todayIsoDate(),
  };
}

function clampScore(value: string, fallback: number, max = 100) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.min(max, Math.max(0, Math.round(parsed)));
}

function normalizeManualLead(lead: AttaLead): AttaLead {
  return {
    ...lead,
    linkedin: lead.linkedin || "",
    productsToPitch: lead.productsToPitch.length ? lead.productsToPitch : ["transformers"],
    painSignals: lead.painSignals.length ? lead.painSignals : ["Manual lead added by sales team"],
  };
}

function safeParseManualLeads(value: string | null): AttaLead[] {
  if (!value) return [];

  try {
    const parsed = JSON.parse(value) as AttaLead[];
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((lead) => lead && typeof lead === "object" && lead.id && lead.companyName && Array.isArray(lead.productsToPitch))
      .map(normalizeManualLead);
  } catch {
    return [];
  }
}

function manualFormToLead(form: ManualLeadForm): AttaLead {
  const companyName = form.companyName.trim();
  const sourceUrl = form.sourceUrl.trim() || form.website.trim() || "https://atta-group.net";
  const website = form.website.trim() || sourceUrl;
  const nextAction = form.nextAction.trim() || "Call the account and confirm the right procurement, utilities, or maintenance contact.";

  return {
    id: `manual-${Date.now()}`,
    companyName,
    industry: form.industry.trim(),
    segment: form.segment.trim() || form.industry.trim(),
    governorate: form.governorate.trim(),
    city: form.city.trim(),
    industrialZone: form.industrialZone.trim() || "Manual research",
    address: form.address.trim() || "Needs verification",
    website,
    phone: form.phone.trim() || "Verify phone",
    email: form.email.trim() || "Verify email",
    linkedin: form.linkedin.trim(),
    sourceName: form.sourceName.trim() || "Manual research",
    sourceUrl,
    sourceType: form.sourceType,
    productsToPitch: form.productsToPitch,
    fitScore: clampScore(form.fitScore, 78),
    scoreBreakdown: {
      industryFit: clampScore(form.industryFit, 16, 20),
      productFit: clampScore(form.productFit, 16, 20),
      locationFit: clampScore(form.locationFit, 14, 20),
      contactability: clampScore(form.contactability, 12, 15),
      companySignal: clampScore(form.companySignal, 12, 15),
      sourceConfidence: clampScore(form.sourceConfidence, 8, 10),
    },
    confidence: form.confidence,
    whyGoodFit: form.whyGoodFit.trim(),
    painSignals: form.painSignals
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean),
    suggestedPitch: form.suggestedPitch.trim() || "Position Atta as a supply and execution partner for the account's most urgent industrial power or site-support need.",
    nextAction,
    expectedValue: form.expectedValue,
    lastVerified: form.lastVerified || todayIsoDate(),
  };
}

function unique(values: string[]) {
  return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b));
}

function cls(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function buildOutreach(lead: AttaLead) {
  const productList = lead.productsToPitch.map((item) => attaProductLabels[item]).join(", ");
  return `Hello ${lead.companyName} team,

My name is Youssef from Atta Group. We support Egyptian industrial companies with ${productList}.

I noticed your operation in ${lead.industrialZone || lead.city}. Based on your work in ${lead.industry}, I think there may be a fit around ${lead.suggestedPitch}

Can you point me to the person responsible for procurement, utilities, or maintenance so we can share the right catalog and availability details?

Best regards,
Atta Group
info@atta-group.net
+20 121 444 4253`;
}

function csvCell(value: string | number) {
  return `"${String(value).replace(/"/g, '""')}"`;
}

function exportLeads(leads: AttaLead[]) {
  const rows = [
    [
      "Company",
      "Industry",
      "Governorate",
      "City",
      "Industrial Zone",
      "Products",
      "Score",
      "Confidence",
      "Phone",
      "Email",
      "Website",
      "Why good fit",
      "Next action",
      "Source",
    ],
    ...leads.map((lead) => [
      lead.companyName,
      lead.industry,
      lead.governorate,
      lead.city,
      lead.industrialZone,
      lead.productsToPitch.map((item) => attaProductLabels[item]).join("; "),
      lead.fitScore,
      lead.confidence,
      lead.phone,
      lead.email,
      lead.website,
      lead.whyGoodFit,
      lead.nextAction,
      lead.sourceUrl,
    ]),
  ];

  const csv = rows.map((row) => row.map(csvCell).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `atta-industrial-leads-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

function safeParseDeals(value: string | null, fallback: PipelineDeal[]): PipelineDeal[] {
  if (!value) return fallback;

  try {
    const parsed = JSON.parse(value) as PipelineDeal[];
    if (!Array.isArray(parsed)) return fallback;
    return parsed;
  } catch {
    return fallback;
  }
}

async function saveCrmRecord(resource: "lead" | "deal", value: AttaLead | PipelineDeal) {
  const response = await fetch("/api/atta-leads", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ resource, value }),
  });

  if (!response.ok) {
    const payload = (await response.json().catch(() => null)) as { error?: string } | null;
    throw new Error(payload?.error || "Could not save CRM change");
  }
}

async function deleteCrmRecord(resource: "lead" | "deal", id: string) {
  const response = await fetch(
    `/api/atta-leads?resource=${resource}&id=${encodeURIComponent(id)}`,
    { method: "DELETE" },
  );

  if (!response.ok) {
    const payload = (await response.json().catch(() => null)) as { error?: string } | null;
    throw new Error(payload?.error || "Could not remove CRM record");
  }
}

function StatCard({
  label,
  value,
  detail,
  tone,
}: {
  label: string;
  value: string;
  detail: string;
  tone: "blue" | "amber" | "green" | "white";
}) {
  const tones = {
    blue: "border-[#2f9bff]/25 bg-[#2f9bff]/10 text-[#8dd0ff]",
    amber: "border-[#f5c16c]/25 bg-[#f5c16c]/10 text-[#f5c16c]",
    green: "border-[#18d5c2]/25 bg-[#18d5c2]/10 text-[#a9fff6]",
    white: "border-white/12 bg-white/[0.045] text-white",
  };

  return (
    <div className={cls("rounded-[8px] border p-5 shadow-[0_24px_80px_rgba(0,0,0,0.22)]", tones[tone])}>
      <p className="text-xs font-black uppercase tracking-[0.18em] text-white/44">{label}</p>
      <p className="mt-3 text-3xl font-black text-white">{value}</p>
      <p className="mt-2 text-sm font-semibold leading-6 text-white/58">{detail}</p>
    </div>
  );
}

function ScoreBar({ label, value }: { label: string; value: number }) {
  const activeSegments = Math.round(value / 2);

  return (
    <div>
      <div className="flex items-center justify-between text-xs font-black uppercase tracking-[0.12em] text-white/44">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="mt-2 grid grid-cols-10 gap-1">
        {Array.from({ length: 10 }, (_, index) => (
          <span
            key={`${label}-${index}`}
            className={cls(
              "h-1.5 rounded-full",
              index < activeSegments ? "bg-[#2f9bff]" : "bg-white/8",
            )}
          />
        ))}
      </div>
    </div>
  );
}

function FieldLabel({ label, required = false }: { label: string; required?: boolean }) {
  return (
    <span className="text-xs font-black uppercase tracking-[0.14em] text-white/42">
      {label}
      {required ? <span className="text-[#f5c16c]"> *</span> : null}
    </span>
  );
}

function ManualLeadModal({
  form,
  error,
  onChange,
  onProductToggle,
  onClose,
  onSubmit,
}: {
  form: ManualLeadForm;
  error: string;
  onChange: (updates: Partial<ManualLeadForm>) => void;
  onProductToggle: (product: AttaProductId) => void;
  onClose: () => void;
  onSubmit: () => void;
}) {
  const inputClass = "mt-2 h-11 w-full rounded-[8px] border border-white/10 bg-[#0d1724] px-3 text-sm font-bold text-white outline-none transition placeholder:text-white/24 focus:border-[#2f9bff]/60";
  const textareaClass = "mt-2 min-h-[7rem] w-full rounded-[8px] border border-white/10 bg-[#0d1724] px-3 py-3 text-sm font-semibold leading-6 text-white outline-none transition placeholder:text-white/24 focus:border-[#2f9bff]/60";

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/72 px-4 py-6 backdrop-blur-xl">
      <div className="w-full max-w-6xl rounded-[8px] border border-[#2f9bff]/24 bg-[#050a12] shadow-[0_32px_120px_rgba(0,0,0,0.65)]">
        <div className="sticky top-0 z-10 flex flex-col gap-4 border-b border-white/10 bg-[#050a12]/95 p-5 backdrop-blur-xl md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#8dd0ff]">Manual lead entry</p>
            <h2 className="mt-2 text-3xl font-black uppercase leading-tight text-white">Add an Atta prospect</h2>
            <p className="mt-2 max-w-2xl text-sm font-semibold leading-6 text-white/52">
              Add a factory, contractor, or industrial account with enough context to score it and move it into the same sales cycle.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-11 w-11 place-items-center rounded-[8px] border border-white/10 text-white/64 transition hover:border-[#ff6a2a]/50 hover:text-white"
            aria-label="Close add lead form"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid gap-5 p-5">
          {error ? (
            <div className="rounded-[8px] border border-[#ff6a2a]/30 bg-[#ff6a2a]/10 px-4 py-3 text-sm font-bold text-[#ffd3c2]">
              {error}
            </div>
          ) : null}

          <section className="rounded-[8px] border border-white/10 bg-white/[0.025] p-4">
            <h3 className="text-sm font-black uppercase tracking-[0.16em] text-white">Company profile</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <label>
                <FieldLabel label="Company name" required />
                <input value={form.companyName} onChange={(event) => onChange({ companyName: event.target.value })} className={inputClass} placeholder="Example Factory SAE" />
              </label>
              <label>
                <FieldLabel label="Industry" required />
                <input value={form.industry} onChange={(event) => onChange({ industry: event.target.value })} className={inputClass} placeholder="Food manufacturing" />
              </label>
              <label>
                <FieldLabel label="Segment" />
                <input value={form.segment} onChange={(event) => onChange({ segment: event.target.value })} className={inputClass} placeholder="Factory / EPC / Oil and gas" />
              </label>
              <label>
                <FieldLabel label="Governorate" required />
                <input value={form.governorate} onChange={(event) => onChange({ governorate: event.target.value })} className={inputClass} placeholder="Cairo" />
              </label>
              <label>
                <FieldLabel label="City" required />
                <input value={form.city} onChange={(event) => onChange({ city: event.target.value })} className={inputClass} placeholder="10th of Ramadan" />
              </label>
              <label>
                <FieldLabel label="Industrial zone" />
                <input value={form.industrialZone} onChange={(event) => onChange({ industrialZone: event.target.value })} className={inputClass} placeholder="Industrial Zone A" />
              </label>
              <label className="md:col-span-2 xl:col-span-3">
                <FieldLabel label="Address" />
                <input value={form.address} onChange={(event) => onChange({ address: event.target.value })} className={inputClass} placeholder="Plot, zone, city, Egypt" />
              </label>
            </div>
          </section>

          <section className="rounded-[8px] border border-white/10 bg-white/[0.025] p-4">
            <h3 className="text-sm font-black uppercase tracking-[0.16em] text-white">Contact and source</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <label>
                <FieldLabel label="Website" />
                <input value={form.website} onChange={(event) => onChange({ website: event.target.value })} className={inputClass} placeholder="https://..." />
              </label>
              <label>
                <FieldLabel label="Phone" />
                <input value={form.phone} onChange={(event) => onChange({ phone: event.target.value })} className={inputClass} placeholder="+20..." />
              </label>
              <label>
                <FieldLabel label="Email" />
                <input value={form.email} onChange={(event) => onChange({ email: event.target.value })} className={inputClass} placeholder="info@example.com" />
              </label>
              <label>
                <FieldLabel label="LinkedIn" />
                <input value={form.linkedin} onChange={(event) => onChange({ linkedin: event.target.value })} className={inputClass} placeholder="https://linkedin.com/company/..." />
              </label>
              <label>
                <FieldLabel label="Source name" />
                <input value={form.sourceName} onChange={(event) => onChange({ sourceName: event.target.value })} className={inputClass} placeholder="Referral / Website / Directory" />
              </label>
              <label>
                <FieldLabel label="Source URL" />
                <input value={form.sourceUrl} onChange={(event) => onChange({ sourceUrl: event.target.value })} className={inputClass} placeholder="https://..." />
              </label>
              <label>
                <FieldLabel label="Source type" />
                <select value={form.sourceType} onChange={(event) => onChange({ sourceType: event.target.value as LeadSourceType })} className={inputClass}>
                  {sourceTypeOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
              </label>
              <label>
                <FieldLabel label="Confidence" />
                <select value={form.confidence} onChange={(event) => onChange({ confidence: event.target.value as LeadConfidence })} className={inputClass}>
                  {confidenceOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
              </label>
              <label>
                <FieldLabel label="Last verified" />
                <input type="date" value={form.lastVerified} onChange={(event) => onChange({ lastVerified: event.target.value })} className={inputClass} />
              </label>
            </div>
          </section>

          <section className="rounded-[8px] border border-white/10 bg-white/[0.025] p-4">
            <h3 className="text-sm font-black uppercase tracking-[0.16em] text-white">Atta fit and scoring</h3>
            <div className="mt-4 grid gap-4">
              <div>
                <FieldLabel label="Products to pitch" required />
                <div className="mt-2 grid gap-2 md:grid-cols-2 xl:grid-cols-3">
                  {productOptions.filter((option) => option.id !== "all").map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => onProductToggle(option.id as AttaProductId)}
                      className={cls(
                        "flex min-h-11 items-center justify-between gap-3 rounded-[8px] border px-3 text-left text-sm font-black transition",
                        form.productsToPitch.includes(option.id as AttaProductId)
                          ? "border-[#18d5c2]/42 bg-[#18d5c2]/12 text-white"
                          : "border-white/10 bg-[#0d1724] text-white/50 hover:text-white",
                      )}
                    >
                      {option.label}
                      {form.productsToPitch.includes(option.id as AttaProductId) ? <Check className="h-4 w-4 text-[#a9fff6]" /> : null}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-4 xl:grid-cols-7">
                <label>
                  <FieldLabel label="Fit score" required />
                  <input type="number" min="0" max="100" value={form.fitScore} onChange={(event) => onChange({ fitScore: event.target.value })} className={inputClass} />
                </label>
                <label>
                  <FieldLabel label="Industry" />
                  <input type="number" min="0" max="20" value={form.industryFit} onChange={(event) => onChange({ industryFit: event.target.value })} className={inputClass} />
                </label>
                <label>
                  <FieldLabel label="Product" />
                  <input type="number" min="0" max="20" value={form.productFit} onChange={(event) => onChange({ productFit: event.target.value })} className={inputClass} />
                </label>
                <label>
                  <FieldLabel label="Location" />
                  <input type="number" min="0" max="20" value={form.locationFit} onChange={(event) => onChange({ locationFit: event.target.value })} className={inputClass} />
                </label>
                <label>
                  <FieldLabel label="Contact" />
                  <input type="number" min="0" max="15" value={form.contactability} onChange={(event) => onChange({ contactability: event.target.value })} className={inputClass} />
                </label>
                <label>
                  <FieldLabel label="Company" />
                  <input type="number" min="0" max="15" value={form.companySignal} onChange={(event) => onChange({ companySignal: event.target.value })} className={inputClass} />
                </label>
                <label>
                  <FieldLabel label="Source" />
                  <input type="number" min="0" max="10" value={form.sourceConfidence} onChange={(event) => onChange({ sourceConfidence: event.target.value })} className={inputClass} />
                </label>
              </div>

              <label className="max-w-sm">
                <FieldLabel label="Expected value" />
                <select value={form.expectedValue} onChange={(event) => onChange({ expectedValue: event.target.value as LeadExpectedValue })} className={inputClass}>
                  {expectedValueOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
              </label>
            </div>
          </section>

          <section className="rounded-[8px] border border-white/10 bg-white/[0.025] p-4">
            <h3 className="text-sm font-black uppercase tracking-[0.16em] text-white">Sales reasoning</h3>
            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              <label>
                <FieldLabel label="Why good fit" required />
                <textarea value={form.whyGoodFit} onChange={(event) => onChange({ whyGoodFit: event.target.value })} className={textareaClass} placeholder="Explain why this company may need Atta products or site support." />
              </label>
              <label>
                <FieldLabel label="Pain signals" />
                <textarea value={form.painSignals} onChange={(event) => onChange({ painSignals: event.target.value })} className={textareaClass} placeholder={"One signal per line\nIndustrial zone factory\nPower expansion\nMaintenance need"} />
              </label>
              <label>
                <FieldLabel label="Suggested pitch" />
                <textarea value={form.suggestedPitch} onChange={(event) => onChange({ suggestedPitch: event.target.value })} className={textareaClass} placeholder="What should Atta lead with in the first conversation?" />
              </label>
              <label>
                <FieldLabel label="Next action" required />
                <textarea value={form.nextAction} onChange={(event) => onChange({ nextAction: event.target.value })} className={textareaClass} placeholder="Call procurement, ask for maintenance manager, send DATSAN catalog..." />
              </label>
            </div>
          </section>

          <div className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] border border-white/10 px-5 text-sm font-black uppercase text-white/64 transition hover:text-white"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={onSubmit}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] bg-[#2f9bff] px-5 text-sm font-black uppercase text-white transition hover:bg-[#8dd0ff] hover:text-black"
            >
              <Save className="h-4 w-4" />
              Save lead
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeadCard({
  lead,
  selected,
  copiedLeadId,
  pipelineIds,
  onToggleSelected,
  onCopy,
  onAddToPipeline,
}: {
  lead: AttaLead;
  selected: boolean;
  copiedLeadId: string;
  pipelineIds: Set<string>;
  onToggleSelected: (leadId: string) => void;
  onCopy: (lead: AttaLead) => void;
  onAddToPipeline: (lead: AttaLead) => void;
}) {
  return (
    <article className="group rounded-[8px] border border-white/10 bg-[#060a0f]/88 p-5 shadow-[0_28px_90px_rgba(0,0,0,0.28)] transition hover:-translate-y-0.5 hover:border-[#2f9bff]/40">
      <div className="grid gap-5 xl:grid-cols-[1fr_18rem]">
        <div>
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => onToggleSelected(lead.id)}
                  className={cls(
                    "inline-flex h-7 items-center gap-2 rounded-full border px-3 text-xs font-black uppercase transition",
                    selected
                      ? "border-[#18d5c2]/40 bg-[#18d5c2]/16 text-[#a9fff6]"
                      : "border-white/10 bg-white/[0.045] text-white/44 hover:text-white",
                  )}
                >
                  {selected ? <Check className="h-3.5 w-3.5" /> : null}
                  {selected ? "Selected" : "Select"}
                </button>
                <span className="rounded-full border border-[#f5c16c]/30 bg-[#f5c16c]/10 px-3 py-1 text-xs font-black uppercase text-[#f5c16c]">
                  {lead.confidence}
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1 text-xs font-black uppercase text-white/56">
                  {lead.expectedValue} value
                </span>
              </div>
              <h2 className="mt-4 text-2xl font-black uppercase leading-tight text-white">{lead.companyName}</h2>
              <p className="mt-2 text-sm font-bold text-[#8dd0ff]">{lead.industry}</p>
            </div>
            <div className="grid h-20 w-20 shrink-0 place-items-center rounded-[8px] border border-[#2f9bff]/25 bg-[#2f9bff]/10">
              <span className="text-3xl font-black text-white">{lead.fitScore}</span>
              <span className="-mt-4 text-[10px] font-black uppercase tracking-[0.16em] text-white/42">score</span>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {lead.productsToPitch.map((product) => (
              <span key={product} className="rounded-full border border-[#18d5c2]/20 bg-[#18d5c2]/10 px-3 py-1 text-xs font-black text-[#b7fff7]">
                {attaProductLabels[product]}
              </span>
            ))}
          </div>

          <p className="mt-5 max-w-4xl text-sm font-semibold leading-7 text-white/68">{lead.whyGoodFit}</p>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="rounded-[8px] border border-white/10 bg-black/22 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-white/40">Pain signals</p>
              <div className="mt-3 grid gap-2">
                {lead.painSignals.map((signal) => (
                  <div key={signal} className="flex items-start gap-2 text-sm font-semibold leading-6 text-white/68">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#18d5c2]" />
                    <span>{signal}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[8px] border border-white/10 bg-black/22 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-white/40">Suggested first move</p>
              <p className="mt-3 text-sm font-semibold leading-7 text-white/68">{lead.nextAction}</p>
            </div>
          </div>

          <div className="mt-5 grid gap-2 text-sm font-bold text-white/58 md:grid-cols-3">
            <a href={`tel:${lead.phone}`} className="flex items-center gap-2 rounded-[8px] border border-white/10 bg-white/[0.035] px-3 py-2 transition hover:border-[#2f9bff]/40 hover:text-white">
              <Phone className="h-4 w-4 text-[#2f9bff]" />
              <span className="truncate">{lead.phone}</span>
            </a>
            <a href={`mailto:${lead.email.split(";")[0]}`} className="flex items-center gap-2 rounded-[8px] border border-white/10 bg-white/[0.035] px-3 py-2 transition hover:border-[#2f9bff]/40 hover:text-white">
              <Mail className="h-4 w-4 text-[#2f9bff]" />
              <span className="truncate">{lead.email}</span>
            </a>
            <a href={lead.sourceUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-[8px] border border-white/10 bg-white/[0.035] px-3 py-2 transition hover:border-[#2f9bff]/40 hover:text-white">
              <ArrowUpRight className="h-4 w-4 text-[#2f9bff]" />
              <span className="truncate">{lead.sourceName}</span>
            </a>
          </div>
        </div>

        <aside className="rounded-[8px] border border-white/10 bg-black/24 p-4">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-white/42">Score breakdown</p>
          <div className="mt-4 grid gap-4">
            <ScoreBar label="Industry" value={lead.scoreBreakdown.industryFit} />
            <ScoreBar label="Product" value={lead.scoreBreakdown.productFit} />
            <ScoreBar label="Location" value={lead.scoreBreakdown.locationFit} />
            <ScoreBar label="Contact" value={lead.scoreBreakdown.contactability} />
            <ScoreBar label="Company" value={lead.scoreBreakdown.companySignal} />
          </div>
          <div className="mt-5 grid gap-2">
            <button
              onClick={() => onCopy(lead)}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-[8px] bg-[#2f9bff] px-4 text-sm font-black uppercase text-white transition hover:bg-[#8dd0ff] hover:text-black"
            >
              {copiedLeadId === lead.id ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
              {copiedLeadId === lead.id ? "Copied" : "Copy pitch"}
            </button>
            <button
              onClick={() => onAddToPipeline(lead)}
              disabled={pipelineIds.has(lead.id)}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-[8px] border border-white/12 px-4 text-sm font-black uppercase text-white transition hover:border-[#f5c16c]/60 hover:bg-[#f5c16c]/10 disabled:cursor-not-allowed disabled:opacity-45"
            >
              <BriefcaseBusiness className="h-4 w-4" />
              {pipelineIds.has(lead.id) ? "In pipeline" : "Add deal"}
            </button>
          </div>
        </aside>
      </div>
    </article>
  );
}

function PipelineCard({
  lead,
  deal,
  onStageChange,
  onFollowUpChange,
  onSave,
  onRemove,
}: {
  lead: AttaLead;
  deal: PipelineDeal;
  onStageChange: (leadId: string, stage: LeadStage) => void;
  onFollowUpChange: (leadId: string, nextFollowUp: string) => void;
  onSave: (lead: AttaLead, deal: PipelineDeal) => Promise<void>;
  onRemove: (leadId: string) => Promise<void>;
}) {
  const [expanded, setExpanded] = useState(false);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [leadDraft, setLeadDraft] = useState(lead);
  const [dealDraft, setDealDraft] = useState(deal);

  useEffect(() => setLeadDraft(lead), [lead]);
  useEffect(() => setDealDraft(deal), [deal]);

  async function handleSave() {
    setSaving(true);
    try {
      await onSave(leadDraft, dealDraft);
      setEditing(false);
      setExpanded(true);
    } finally {
      setSaving(false);
    }
  }

  async function handleRemove() {
    if (!window.confirm(`Remove ${lead.companyName} from the pipeline? The lead will stay in the lead list.`)) return;
    setSaving(true);
    try {
      await onRemove(lead.id);
    } finally {
      setSaving(false);
    }
  }

  const inputClass = "h-9 w-full min-w-0 rounded-[6px] border border-white/10 bg-[#0d1724] px-2 text-xs font-bold text-white outline-none focus:border-[#2f9bff]/60";

  return (
    <article className="min-w-0 overflow-hidden rounded-[8px] border border-white/10 bg-[#070b10] p-3 shadow-[0_18px_60px_rgba(0,0,0,0.25)]">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-[10px] font-black uppercase tracking-[0.08em] text-[#8dd0ff]">{lead.segment}</p>
          <h3 className="mt-1 truncate text-base font-black uppercase leading-5 text-white" title={lead.companyName}>{lead.companyName}</h3>
          <p className="mt-1 truncate text-[11px] font-bold text-white/48" title={`${lead.city} | ${lead.expectedValue} account`}>
            {lead.city} | {lead.expectedValue} account
          </p>
        </div>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[7px] bg-[#2f9bff]/12 text-sm font-black text-white">
          {lead.fitScore}
        </span>
      </div>

      <div className="mt-3 flex min-w-0 items-center gap-2 rounded-[7px] border border-white/10 bg-black/22 px-2.5 py-2">
          <CalendarClock className="h-3.5 w-3.5 shrink-0 text-[#f5c16c]" />
          <input
            type="date"
            value={deal.nextFollowUp}
            onChange={(event) => onFollowUpChange(deal.leadId, event.target.value)}
            className="min-w-0 flex-1 bg-transparent text-xs font-bold text-white outline-none"
          />
      </div>

      <div className="mt-2 grid gap-2">
        <select
          value={deal.stage}
          onChange={(event) => onStageChange(deal.leadId, event.target.value as LeadStage)}
          className="h-9 min-w-0 rounded-[7px] border border-white/10 bg-[#0d1724] px-2 text-xs font-bold text-white outline-none"
        >
          {leadStages.map((stage) => (
            <option key={stage.id} value={stage.id}>
              {stage.label}
            </option>
          ))}
        </select>
      </div>

      {expanded ? (
        <div className="mt-3 border-t border-white/8 pt-3">
          {editing ? (
            <div className="grid gap-2">
              <input value={leadDraft.companyName} onChange={(event) => setLeadDraft((current) => ({ ...current, companyName: event.target.value }))} className={inputClass} aria-label="Company name" />
              <input value={leadDraft.segment} onChange={(event) => setLeadDraft((current) => ({ ...current, segment: event.target.value }))} className={inputClass} aria-label="Segment" />
              <input value={leadDraft.city} onChange={(event) => setLeadDraft((current) => ({ ...current, city: event.target.value }))} className={inputClass} aria-label="City" />
              <input value={dealDraft.expectedValue} onChange={(event) => setDealDraft((current) => ({ ...current, expectedValue: event.target.value }))} className={inputClass} aria-label="Expected value" />
              <input value={dealDraft.owner} onChange={(event) => setDealDraft((current) => ({ ...current, owner: event.target.value }))} className={inputClass} aria-label="Owner" />
              <input value={dealDraft.relationshipStatus} onChange={(event) => setDealDraft((current) => ({ ...current, relationshipStatus: event.target.value }))} className={inputClass} aria-label="Relationship" />
              <input value={dealDraft.lastTouch} onChange={(event) => setDealDraft((current) => ({ ...current, lastTouch: event.target.value }))} className={inputClass} aria-label="Last touch" />
              <input type="number" min="0" max="100" value={dealDraft.probability} onChange={(event) => setDealDraft((current) => ({ ...current, probability: Number(event.target.value) }))} className={inputClass} aria-label="Probability" />
              <textarea value={dealDraft.notes} onChange={(event) => setDealDraft((current) => ({ ...current, notes: event.target.value }))} className="min-h-20 w-full rounded-[6px] border border-white/10 bg-[#0d1724] p-2 text-xs font-semibold leading-5 text-white outline-none focus:border-[#2f9bff]/60" aria-label="Notes" />
            </div>
          ) : (
            <div className="grid gap-2 text-[11px] font-bold text-white/52">
              {[
                ["Value", deal.expectedValue],
                ["Owner", deal.owner],
                ["Relationship", deal.relationshipStatus],
                ["Last touch", deal.lastTouch],
                ["Probability", `${deal.probability}%`],
              ].map(([label, value]) => (
                <div key={label} className="grid min-w-0 grid-cols-[5rem_1fr] gap-2">
                  <span>{label}</span>
                  <span className="break-words text-right text-white/76">{value}</span>
                </div>
              ))}
              <div className="mt-1 flex flex-wrap gap-1.5">
                {lead.productsToPitch.slice(0, 2).map((product) => (
                  <span key={product} className="rounded-full bg-[#2f9bff]/12 px-2 py-1 text-[9px] font-black uppercase text-[#8dd0ff]">
                    {attaProductLabels[product]}
                  </span>
                ))}
              </div>
              <p className="mt-1 break-words text-xs font-semibold leading-5 text-white/56">{deal.notes}</p>
              {deal.tasks.map((task) => (
                <div key={task.id} className="rounded-[7px] border border-white/10 bg-white/[0.035] p-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className={cls("rounded-full px-2 py-0.5 text-[9px] font-black uppercase", task.priority === "High" ? "bg-[#ff6a2a]/15 text-[#ffb08a]" : "bg-[#f5c16c]/15 text-[#f5c16c]")}>{task.priority}</span>
                    <span className="text-[9px] font-black uppercase text-white/35">{task.channel}</span>
                  </div>
                  <p className="mt-2 break-words text-xs font-bold leading-5 text-white/70">{task.title}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : null}

      <div className="mt-3 grid grid-cols-3 gap-1.5 border-t border-white/8 pt-3">
        <button onClick={() => setExpanded((current) => !current)} className="inline-flex h-8 min-w-0 items-center justify-center gap-1 rounded-[6px] border border-white/10 text-[10px] font-black uppercase text-white/62 transition hover:text-white">
          {expanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
          {expanded ? "Less" : "More"}
        </button>
        <button
          onClick={() => {
            if (editing) void handleSave();
            else {
              setExpanded(true);
              setEditing(true);
            }
          }}
          disabled={saving}
          className="inline-flex h-8 min-w-0 items-center justify-center gap-1 rounded-[6px] border border-[#2f9bff]/30 text-[10px] font-black uppercase text-[#8dd0ff] transition hover:bg-[#2f9bff]/10 disabled:opacity-50"
        >
          {editing ? <Save className="h-3.5 w-3.5" /> : <Pencil className="h-3.5 w-3.5" />}
          {editing ? "Save" : "Edit"}
        </button>
        <button onClick={() => void handleRemove()} disabled={saving} className="inline-flex h-8 min-w-0 items-center justify-center gap-1 rounded-[6px] border border-[#ff6a2a]/25 text-[10px] font-black uppercase text-[#ffb08a] transition hover:bg-[#ff6a2a]/10 disabled:opacity-50">
          <Trash2 className="h-3.5 w-3.5" />
          Remove
        </button>
      </div>
    </article>
  );
}

export default function AttaLeadsPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [sessionName, setSessionName] = useState("");
  const [leads, setLeads] = useState<AttaLead[]>([]);
  const [manualLeads, setManualLeads] = useState<AttaLead[]>([]);
  const [viewMode, setViewMode] = useState<ViewMode>("leads");
  const [manualLeadOpen, setManualLeadOpen] = useState(false);
  const [manualLeadForm, setManualLeadForm] = useState<ManualLeadForm>(() => createEmptyManualLeadForm());
  const [manualLeadError, setManualLeadError] = useState("");
  const [query, setQuery] = useState("");
  const [product, setProduct] = useState<"all" | AttaProductId>("all");
  const [governorate, setGovernorate] = useState("all");
  const [industrialZone, setIndustrialZone] = useState("all");
  const [industry, setIndustry] = useState("all");
  const [companySignal, setCompanySignal] = useState("all");
  const [contactAvailability, setContactAvailability] = useState("all");
  const [minimumScore, setMinimumScore] = useState(75);
  const [sortMode, setSortMode] = useState<SortMode>("score");
  const [copiedLeadId, setCopiedLeadId] = useState("");
  const [copyError, setCopyError] = useState("");
  const [selectedLeadIds, setSelectedLeadIds] = useState<string[]>([]);
  const [deals, setDeals] = useState<PipelineDeal[]>([]);
  const [databaseConnected, setDatabaseConnected] = useState(false);
  const [saveError, setSaveError] = useState("");

  useEffect(() => {
    fetch("/api/auth/session")
      .then((res) => res.json())
      .then((data) => {
        if (!data.authenticated) {
          router.replace("/login");
          return;
        }
        setSessionName(data.name);
        return fetch("/api/atta-leads");
      })
      .then((res) => {
        if (!res) return null;
        if (!res.ok) throw new Error("Could not load Atta leads");
        return res.json();
      })
      .then((data: { leads: AttaLead[]; initialPipelineDeals: PipelineDeal[]; databaseConnected: boolean } | null) => {
        if (!data) return;
        const savedManualLeads = safeParseManualLeads(window.localStorage.getItem(MANUAL_LEADS_KEY));
        const savedDealsValue = window.localStorage.getItem("atta-pipeline-deals");
        const savedDeals = safeParseDeals(savedDealsValue, data.initialPipelineDeals);
        setDatabaseConnected(data.databaseConnected);

        if (data.databaseConnected) {
          const databaseIds = new Set(data.leads.map((lead) => lead.id));
          const legacyLeads = savedManualLeads.filter((lead) => !databaseIds.has(lead.id));
          setLeads([...data.leads, ...legacyLeads]);
          setManualLeads([]);
          setDeals(savedDealsValue ? savedDeals : data.initialPipelineDeals);

          const migrationJobs = [
            ...legacyLeads.map((lead) => saveCrmRecord("lead", lead)),
            ...(savedDealsValue ? savedDeals.map((deal) => saveCrmRecord("deal", deal)) : []),
          ];
          if (migrationJobs.length) {
            Promise.all(migrationJobs)
              .then(() => {
                window.localStorage.removeItem(MANUAL_LEADS_KEY);
                window.localStorage.removeItem("atta-pipeline-deals");
              })
              .catch((error: Error) => setSaveError(`Legacy browser data could not be migrated: ${error.message}`));
          }
        } else {
          setManualLeads(savedManualLeads);
          setLeads(data.leads);
          setDeals(savedDeals);
        }
        setLoading(false);
      })
      .catch(() => router.replace("/login"));
  }, [router]);

  useEffect(() => {
    if (!loading && !databaseConnected) {
      window.localStorage.setItem("atta-pipeline-deals", JSON.stringify(deals));
    }
  }, [databaseConnected, deals, loading]);

  const allLeads = useMemo(() => [...leads, ...manualLeads], [leads, manualLeads]);
  const governorates = useMemo(() => unique(allLeads.map((lead) => lead.governorate)), [allLeads]);
  const industrialZones = useMemo(() => unique(allLeads.map((lead) => lead.industrialZone)), [allLeads]);
  const industries = useMemo(() => unique(allLeads.map((lead) => lead.segment)), [allLeads]);
  const pipelineIds = useMemo(() => new Set(deals.map((deal) => deal.leadId)), [deals]);

  const filteredLeads = useMemo(() => {
    const cleanQuery = query.trim().toLowerCase();

    const filtered = allLeads.filter((lead) => {
      const matchesSearch =
        !cleanQuery ||
        [lead.companyName, lead.industry, lead.segment, lead.city, lead.industrialZone, lead.whyGoodFit]
          .join(" ")
          .toLowerCase()
          .includes(cleanQuery);
      const matchesProduct = product === "all" || lead.productsToPitch.includes(product);
      const matchesGovernorate = governorate === "all" || lead.governorate === governorate;
      const matchesIndustrialZone = industrialZone === "all" || lead.industrialZone === industrialZone;
      const matchesIndustry = industry === "all" || lead.segment === industry;
      const matchesCompanySignal =
        companySignal === "all" ||
        (companySignal === "strategic" && lead.expectedValue === "Strategic") ||
        (companySignal === "high" && ["High", "Strategic"].includes(lead.expectedValue)) ||
        (companySignal === "factory" && ["Factory", "Heavy manufacturing", "Chemical factory"].includes(lead.segment));
      const matchesContactAvailability =
        contactAvailability === "all" ||
        (contactAvailability === "ready" && !`${lead.phone} ${lead.email}`.toLowerCase().includes("verify")) ||
        (contactAvailability === "needs-verification" && `${lead.phone} ${lead.email}`.toLowerCase().includes("verify"));
      const matchesScore = lead.fitScore >= minimumScore;

      return (
        matchesSearch &&
        matchesProduct &&
        matchesGovernorate &&
        matchesIndustrialZone &&
        matchesIndustry &&
        matchesCompanySignal &&
        matchesContactAvailability &&
        matchesScore
      );
    });

    return filtered.sort((a, b) => {
      if (sortMode === "company") return a.companyName.localeCompare(b.companyName);
      if (sortMode === "location") return a.city.localeCompare(b.city);
      if (sortMode === "industry") return a.segment.localeCompare(b.segment) || b.fitScore - a.fitScore;
      if (sortMode === "confidence") return a.confidence.localeCompare(b.confidence) || b.fitScore - a.fitScore;
      return b.fitScore - a.fitScore;
    });
  }, [allLeads, companySignal, contactAvailability, governorate, industrialZone, industry, minimumScore, product, query, sortMode]);

  const strategicCount = filteredLeads.filter((lead) => lead.expectedValue === "Strategic").length;
  const averageScore = Math.round(filteredLeads.reduce((sum, lead) => sum + lead.fitScore, 0) / Math.max(1, filteredLeads.length));
  const highConfidenceCount = filteredLeads.filter((lead) => lead.confidence === "High").length;
  const selectedLeads = filteredLeads.filter((lead) => selectedLeadIds.includes(lead.id));

  async function handleCopy(lead: AttaLead) {
    setCopyError("");

    try {
      await navigator.clipboard.writeText(buildOutreach(lead));
      setCopiedLeadId(lead.id);
      window.setTimeout(() => setCopiedLeadId(""), 1600);
    } catch {
      setCopyError(`Could not copy ${lead.companyName}. Select the text manually from the browser.`);
    }
  }

  function handleToggleSelected(leadId: string) {
    setSelectedLeadIds((current) =>
      current.includes(leadId) ? current.filter((id) => id !== leadId) : [...current, leadId],
    );
  }

  function handleAddToPipeline(lead: AttaLead) {
    if (pipelineIds.has(lead.id)) return;

    const deal: PipelineDeal = {
      leadId: lead.id,
      stage: "new-target",
      expectedValue: lead.expectedValue === "Strategic" ? "EGP 2M - 6M" : lead.expectedValue === "High" ? "EGP 750K - 2M" : "EGP 250K - 900K",
      probability: lead.fitScore >= 90 ? 38 : 24,
      owner: sessionName || "Atta sales",
      relationshipStatus: "New account",
      lastTouch: "Added from lead generator",
      nextFollowUp: todayIsoDate(),
      notes: lead.nextAction,
      tasks: [
        {
          id: `task-${lead.id}-${Date.now()}`,
          leadId: lead.id,
          title: lead.nextAction,
          dueDate: todayIsoDate(),
          priority: lead.fitScore >= 85 ? "High" : "Medium",
          channel: lead.phone.toLowerCase().includes("verify") ? "Email" : "Phone",
          status: "Open",
        },
      ],
    };

    setDeals((current) => [...current, deal]);
    if (databaseConnected) {
      void saveCrmRecord("deal", deal).catch((error: Error) => setSaveError(error.message));
    }
    setViewMode("pipeline");
  }

  function handleManualLeadChange(updates: Partial<ManualLeadForm>) {
    setManualLeadForm((current) => ({ ...current, ...updates }));
  }

  function handleManualProductToggle(productId: AttaProductId) {
    setManualLeadForm((current) => {
      const products = current.productsToPitch.includes(productId)
        ? current.productsToPitch.filter((item) => item !== productId)
        : [...current.productsToPitch, productId];

      return { ...current, productsToPitch: products };
    });
  }

  function handleCloseManualLead() {
    setManualLeadOpen(false);
    setManualLeadError("");
  }

  function handleSaveManualLead() {
    const requiredFields: Array<[string, string]> = [
      ["Company name", manualLeadForm.companyName],
      ["Industry", manualLeadForm.industry],
      ["Governorate", manualLeadForm.governorate],
      ["City", manualLeadForm.city],
      ["Why good fit", manualLeadForm.whyGoodFit],
      ["Next action", manualLeadForm.nextAction],
    ];
    const missing = requiredFields.find(([, value]) => !value.trim());

    if (missing) {
      setManualLeadError(`${missing[0]} is required before saving the lead.`);
      return;
    }

    if (!manualLeadForm.productsToPitch.length) {
      setManualLeadError("Select at least one Atta product to pitch.");
      return;
    }

    const lead = manualFormToLead(manualLeadForm);
    if (databaseConnected) {
      setLeads((current) => [...current, lead]);
      void saveCrmRecord("lead", lead).catch((error: Error) => setSaveError(error.message));
    } else {
      const nextManualLeads = [...manualLeads, lead];
      window.localStorage.setItem(MANUAL_LEADS_KEY, JSON.stringify(nextManualLeads));
      setManualLeads(nextManualLeads);
    }
    setManualLeadForm(createEmptyManualLeadForm());
    setManualLeadError("");
    setManualLeadOpen(false);
    setViewMode("leads");
    setQuery("");
    setProduct("all");
    setGovernorate("all");
    setIndustrialZone("all");
    setIndustry("all");
    setCompanySignal("all");
    setContactAvailability("all");
    setMinimumScore(Math.min(minimumScore, lead.fitScore));
    setSortMode("score");
    setSelectedLeadIds([lead.id]);
  }

  function handleStageChange(leadId: string, stage: LeadStage) {
    const currentDeal = deals.find((deal) => deal.leadId === leadId);
    if (!currentDeal) return;
    const updatedDeal = { ...currentDeal, stage };
    setDeals((current) => current.map((deal) => (deal.leadId === leadId ? updatedDeal : deal)));
    if (databaseConnected) {
      void saveCrmRecord("deal", updatedDeal).catch((error: Error) => setSaveError(error.message));
    }
  }

  function handleFollowUpChange(leadId: string, nextFollowUp: string) {
    const currentDeal = deals.find((deal) => deal.leadId === leadId);
    if (!currentDeal) return;
    const updatedDeal = { ...currentDeal, nextFollowUp };
    setDeals((current) => current.map((deal) => (deal.leadId === leadId ? updatedDeal : deal)));
    if (databaseConnected) {
      void saveCrmRecord("deal", updatedDeal).catch((error: Error) => setSaveError(error.message));
    }
  }

  async function handleSavePipelineCard(updatedLead: AttaLead, updatedDeal: PipelineDeal) {
    setSaveError("");
    setLeads((current) => current.map((lead) => (lead.id === updatedLead.id ? updatedLead : lead)));
    setManualLeads((current) => current.map((lead) => (lead.id === updatedLead.id ? updatedLead : lead)));
    setDeals((current) => current.map((deal) => (deal.leadId === updatedDeal.leadId ? updatedDeal : deal)));

    if (!databaseConnected) return;
    try {
      await Promise.all([
        saveCrmRecord("lead", updatedLead),
        saveCrmRecord("deal", updatedDeal),
      ]);
    } catch (error) {
      setSaveError(error instanceof Error ? error.message : "Could not save CRM changes");
    }
  }

  async function handleRemovePipelineDeal(leadId: string) {
    setSaveError("");
    try {
      if (databaseConnected) await deleteCrmRecord("deal", leadId);
      setDeals((current) => current.filter((deal) => deal.leadId !== leadId));
    } catch (error) {
      setSaveError(error instanceof Error ? error.message : "Could not remove pipeline deal");
    }
  }

  if (loading) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#020303] text-white">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#2f9bff] border-t-transparent" />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#020303] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_8%,rgba(47,155,255,0.24),transparent_28%),radial-gradient(circle_at_80%_12%,rgba(245,193,108,0.16),transparent_25%),linear-gradient(180deg,#07111f_0%,#020303_42%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.08] [background-image:linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:62px_62px]" />

      {manualLeadOpen ? (
        <ManualLeadModal
          form={manualLeadForm}
          error={manualLeadError}
          onChange={handleManualLeadChange}
          onProductToggle={handleManualProductToggle}
          onClose={handleCloseManualLead}
          onSubmit={handleSaveManualLead}
        />
      ) : null}

      <div className="relative mx-auto max-w-[1600px] px-4 py-5 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-5 border-b border-white/10 pb-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <a href="/dashboard" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-[#8dd0ff]">
              <ArrowUpRight className="h-4 w-4 rotate-180" />
              Dashboard
            </a>
            <h1 className="mt-5 max-w-5xl text-4xl font-black uppercase leading-[0.92] tracking-normal text-white sm:text-6xl">
              Atta industrial lead command
            </h1>
            <p className="mt-4 max-w-3xl text-base font-semibold leading-7 text-white/58">
              Ranked Egyptian factories and industrial accounts matched to Atta products, with CRM-style follow-up control for high-ticket B2B sales.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:w-[42rem]">
            <button
              onClick={() => setViewMode("leads")}
              className={cls(
                "inline-flex h-12 items-center justify-center gap-2 rounded-[8px] border px-4 text-sm font-black uppercase transition",
                viewMode === "leads" ? "border-[#2f9bff]/55 bg-[#2f9bff]/18 text-white" : "border-white/10 bg-white/[0.035] text-white/58 hover:text-white",
              )}
            >
              <Target className="h-4 w-4" />
              Lead generator
            </button>
            <button
              onClick={() => setViewMode("pipeline")}
              className={cls(
                "inline-flex h-12 items-center justify-center gap-2 rounded-[8px] border px-4 text-sm font-black uppercase transition",
                viewMode === "pipeline" ? "border-[#f5c16c]/55 bg-[#f5c16c]/15 text-white" : "border-white/10 bg-white/[0.035] text-white/58 hover:text-white",
              )}
            >
              <Workflow className="h-4 w-4" />
              Sales pipeline
            </button>
            <button
              onClick={() => {
                setManualLeadOpen(true);
                setManualLeadError("");
              }}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] border border-[#18d5c2]/35 bg-[#18d5c2]/12 px-4 text-sm font-black uppercase text-white transition hover:bg-[#18d5c2] hover:text-black"
            >
              <Plus className="h-4 w-4" />
              Add lead
            </button>
          </div>
        </header>

        <div className={cls(
          "mt-5 flex flex-col gap-2 rounded-[8px] border px-4 py-3 text-sm font-bold sm:flex-row sm:items-center sm:justify-between",
          databaseConnected ? "border-[#18d5c2]/25 bg-[#18d5c2]/10 text-[#a9fff6]" : "border-[#f5c16c]/25 bg-[#f5c16c]/10 text-[#ffe1aa]",
        )}>
          <span className="inline-flex items-center gap-2">
            <Database className="h-4 w-4" />
            {databaseConnected ? "Supabase connected — CRM changes sync across devices." : "Browser storage mode — connect Supabase to sync CRM changes."}
          </span>
          {saveError ? <span className="text-[#ffb08a]">{saveError}</span> : null}
        </div>

        <section className="grid gap-4 py-6 md:grid-cols-2 xl:grid-cols-4">
          <StatCard label="Visible leads" value={String(filteredLeads.length)} detail="Filtered and ranked accounts" tone="blue" />
          <StatCard label="Average fit" value={`${averageScore}/100`} detail="Weighted Atta product match" tone="white" />
          <StatCard label="Strategic targets" value={String(strategicCount)} detail="Large value account potential" tone="amber" />
          <StatCard label="CRM storage" value={databaseConnected ? "Cloud" : "Browser"} detail={databaseConnected ? "Supabase sync enabled" : `${manualLeads.length} local manual leads`} tone="green" />
        </section>

        {viewMode === "leads" ? (
          <section className="grid gap-5 xl:grid-cols-[20rem_1fr]">
            <aside className="h-fit rounded-[8px] border border-white/10 bg-[#060a0f]/86 p-4 shadow-[0_28px_100px_rgba(0,0,0,0.32)] xl:sticky xl:top-5">
              <div className="flex items-center gap-2 text-sm font-black uppercase text-white">
                <SlidersHorizontal className="h-4 w-4 text-[#2f9bff]" />
                Filters
              </div>

              <label className="mt-5 block">
                <span className="text-xs font-black uppercase tracking-[0.16em] text-white/38">Search</span>
                <div className="mt-2 flex h-11 items-center gap-2 rounded-[8px] border border-white/10 bg-black/26 px-3">
                  <Search className="h-4 w-4 text-white/36" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Company, city, product..."
                    className="w-full bg-transparent text-sm font-semibold text-white outline-none placeholder:text-white/28"
                  />
                </div>
              </label>

              <div className="mt-4 grid gap-4">
                <label className="block">
                  <span className="text-xs font-black uppercase tracking-[0.16em] text-white/38">Product focus</span>
                  <select value={product} onChange={(event) => setProduct(event.target.value as "all" | AttaProductId)} className="mt-2 h-11 w-full rounded-[8px] border border-white/10 bg-[#0d1724] px-3 text-sm font-bold text-white outline-none">
                    {productOptions.map((option) => (
                      <option key={option.id} value={option.id}>{option.label}</option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="text-xs font-black uppercase tracking-[0.16em] text-white/38">Governorate</span>
                  <select value={governorate} onChange={(event) => setGovernorate(event.target.value)} className="mt-2 h-11 w-full rounded-[8px] border border-white/10 bg-[#0d1724] px-3 text-sm font-bold text-white outline-none">
                    <option value="all">All governorates</option>
                    {governorates.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="text-xs font-black uppercase tracking-[0.16em] text-white/38">Industrial zone</span>
                  <select value={industrialZone} onChange={(event) => setIndustrialZone(event.target.value)} className="mt-2 h-11 w-full rounded-[8px] border border-white/10 bg-[#0d1724] px-3 text-sm font-bold text-white outline-none">
                    <option value="all">All zones</option>
                    {industrialZones.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="text-xs font-black uppercase tracking-[0.16em] text-white/38">Segment</span>
                  <select value={industry} onChange={(event) => setIndustry(event.target.value)} className="mt-2 h-11 w-full rounded-[8px] border border-white/10 bg-[#0d1724] px-3 text-sm font-bold text-white outline-none">
                    <option value="all">All segments</option>
                    {industries.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="text-xs font-black uppercase tracking-[0.16em] text-white/38">Company signal</span>
                  <select value={companySignal} onChange={(event) => setCompanySignal(event.target.value)} className="mt-2 h-11 w-full rounded-[8px] border border-white/10 bg-[#0d1724] px-3 text-sm font-bold text-white outline-none">
                    <option value="all">All signals</option>
                    <option value="strategic">Strategic only</option>
                    <option value="high">High or strategic value</option>
                    <option value="factory">Factory / heavy plant</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-xs font-black uppercase tracking-[0.16em] text-white/38">Contact availability</span>
                  <select value={contactAvailability} onChange={(event) => setContactAvailability(event.target.value)} className="mt-2 h-11 w-full rounded-[8px] border border-white/10 bg-[#0d1724] px-3 text-sm font-bold text-white outline-none">
                    <option value="all">All contact states</option>
                    <option value="ready">Ready to contact</option>
                    <option value="needs-verification">Needs verification</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-xs font-black uppercase tracking-[0.16em] text-white/38">Minimum score</span>
                  <select value={minimumScore} onChange={(event) => setMinimumScore(Number(event.target.value))} className="mt-2 h-11 w-full rounded-[8px] border border-white/10 bg-[#0d1724] px-3 text-sm font-bold text-white outline-none">
                    {scoreOptions.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="text-xs font-black uppercase tracking-[0.16em] text-white/38">Sort</span>
                  <select value={sortMode} onChange={(event) => setSortMode(event.target.value as SortMode)} className="mt-2 h-11 w-full rounded-[8px] border border-white/10 bg-[#0d1724] px-3 text-sm font-bold text-white outline-none">
                    <option value="score">Highest score</option>
                    <option value="company">Company A-Z</option>
                    <option value="location">Location</option>
                    <option value="industry">Industry</option>
                    <option value="confidence">Confidence</option>
                  </select>
                </label>
              </div>

              <div className="mt-5 grid gap-2">
                <button
                  onClick={() => exportLeads(selectedLeads.length ? selectedLeads : filteredLeads)}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-[8px] bg-[#f5c16c] px-4 text-sm font-black uppercase text-black transition hover:bg-white"
                >
                  <Download className="h-4 w-4" />
                  {selectedLeads.length ? `Export ${selectedLeads.length}` : "Export CSV"}
                </button>
                <button
                  onClick={() => {
                    setQuery("");
                    setProduct("all");
                    setGovernorate("all");
                    setIndustrialZone("all");
                    setIndustry("all");
                    setCompanySignal("all");
                    setContactAvailability("all");
                    setMinimumScore(75);
                    setSortMode("score");
                    setSelectedLeadIds([]);
                  }}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-[8px] border border-white/10 px-4 text-sm font-black uppercase text-white/64 transition hover:text-white"
                >
                  <X className="h-4 w-4" />
                  Reset
                </button>
              </div>
            </aside>

            <div className="grid gap-4">
              <div className="flex flex-col gap-3 rounded-[8px] border border-white/10 bg-white/[0.035] p-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                  <Filter className="h-5 w-5 text-[#2f9bff]" />
                  <p className="text-sm font-bold text-white/62">
                    Showing <span className="text-white">{filteredLeads.length}</span> source-backed industrial leads.
                    {selectedLeads.length ? <span className="text-[#18d5c2]"> {selectedLeads.length} selected.</span> : null}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => {
                      setManualLeadOpen(true);
                      setManualLeadError("");
                    }}
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-[8px] bg-[#18d5c2] px-3 text-xs font-black uppercase text-black transition hover:bg-white"
                  >
                    <Plus className="h-4 w-4" />
                    Add lead
                  </button>
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-white/38">
                    <ArrowDownAZ className="h-4 w-4" />
                    {sortMode}
                  </div>
                </div>
              </div>

              {copyError ? (
                <div className="rounded-[8px] border border-[#ff6a2a]/30 bg-[#ff6a2a]/10 px-4 py-3 text-sm font-bold text-[#ffd3c2]">
                  {copyError}
                </div>
              ) : null}

              {filteredLeads.length ? (
                filteredLeads.map((lead) => (
                  <LeadCard
                    key={lead.id}
                    lead={lead}
                    selected={selectedLeadIds.includes(lead.id)}
                    copiedLeadId={copiedLeadId}
                    pipelineIds={pipelineIds}
                    onToggleSelected={handleToggleSelected}
                    onCopy={handleCopy}
                    onAddToPipeline={handleAddToPipeline}
                  />
                ))
              ) : (
                <div className="grid min-h-[22rem] place-items-center rounded-[8px] border border-white/10 bg-white/[0.035] p-8 text-center">
                  <div>
                    <Search className="mx-auto h-10 w-10 text-white/24" />
                    <h2 className="mt-4 text-2xl font-black uppercase text-white">No leads match this filter</h2>
                    <p className="mt-2 max-w-md text-sm font-semibold leading-6 text-white/50">Reset filters or lower the score threshold to widen the account list.</p>
                  </div>
                </div>
              )}
            </div>
          </section>
        ) : (
          <section className="grid gap-5">
            <div className="grid gap-4 lg:grid-cols-[1fr_22rem]">
              <div className="rounded-[8px] border border-white/10 bg-[#060a0f]/86 p-5">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f5c16c]">CRM companion</p>
                    <h2 className="mt-2 text-3xl font-black uppercase text-white">Atta deal pipeline</h2>
                    <p className="mt-2 max-w-2xl text-sm font-semibold leading-6 text-white/54">
                      Lightweight version of the Dominate-style workflow: manage targets, stages, follow-ups, account notes, and tasks without needing MongoDB or Docker for the demo.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setViewMode("leads");
                      setManualLeadOpen(true);
                      setManualLeadError("");
                    }}
                    className="inline-flex h-11 items-center gap-2 rounded-[8px] bg-[#2f9bff] px-4 text-sm font-black uppercase text-white transition hover:bg-[#8dd0ff] hover:text-black"
                  >
                    <Plus className="h-4 w-4" />
                    Add manual lead
                  </button>
                </div>
              </div>

              <div className="rounded-[8px] border border-[#18d5c2]/20 bg-[#18d5c2]/10 p-5">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-[#a9fff6]" />
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-[#a9fff6]">Presentation angle</p>
                </div>
                <p className="mt-3 text-sm font-semibold leading-7 text-white/68">
                  This shows the full sales loop: find the right factory, explain the fit, copy the pitch, add it to pipeline, then manage follow-up.
                </p>
              </div>
            </div>

            <div className="grid min-w-0 gap-4 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-7">
              {leadStages.map((stage) => {
                const stageDeals = deals.filter((deal) => deal.stage === stage.id);
                return (
                  <section key={stage.id} className="min-h-[18rem] min-w-0 overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.026] p-3">
                    <div className="mb-3">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-sm font-black uppercase leading-5 text-white">{stage.label}</h3>
                        <span className="rounded-full bg-white/8 px-2 py-0.5 text-xs font-black text-white/58">{stageDeals.length}</span>
                      </div>
                      <p className="mt-1 text-xs font-semibold leading-5 text-white/36">{stage.hint}</p>
                    </div>
                    <div className="grid gap-3">
                      {stageDeals.map((deal) => {
                        const lead = allLeads.find((item) => item.id === deal.leadId);
                        return lead ? (
                          <PipelineCard
                            key={deal.leadId}
                            lead={lead}
                            deal={deal}
                            onStageChange={handleStageChange}
                            onFollowUpChange={handleFollowUpChange}
                            onSave={handleSavePipelineCard}
                            onRemove={handleRemovePipelineDeal}
                          />
                        ) : null;
                      })}
                    </div>
                  </section>
                );
              })}
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              <div className="rounded-[8px] border border-white/10 bg-white/[0.035] p-5">
                <Gauge className="h-6 w-6 text-[#2f9bff]" />
                <p className="mt-4 text-sm font-black uppercase tracking-[0.16em] text-white/38">Pipeline value</p>
                <p className="mt-2 text-3xl font-black text-white">{deals.length} active deals</p>
              </div>
              <div className="rounded-[8px] border border-white/10 bg-white/[0.035] p-5">
                <BarChart3 className="h-6 w-6 text-[#f5c16c]" />
                <p className="mt-4 text-sm font-black uppercase tracking-[0.16em] text-white/38">Avg probability</p>
                <p className="mt-2 text-3xl font-black text-white">
                  {Math.round(deals.reduce((sum, deal) => sum + deal.probability, 0) / Math.max(1, deals.length))}%
                </p>
              </div>
              <div className="rounded-[8px] border border-white/10 bg-white/[0.035] p-5">
                <ShieldCheck className="h-6 w-6 text-[#18d5c2]" />
                <p className="mt-4 text-sm font-black uppercase tracking-[0.16em] text-white/38">Open tasks</p>
                <p className="mt-2 text-3xl font-black text-white">
                  {deals.reduce((sum, deal) => sum + deal.tasks.filter((task) => task.status === "Open").length, 0)}
                </p>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
