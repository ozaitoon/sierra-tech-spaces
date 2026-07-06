create table if not exists public.atta_crm_leads (
  id text primary key,
  data jsonb not null,
  source text not null default 'seed',
  is_deleted boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.atta_crm_deals (
  lead_id text primary key,
  data jsonb not null,
  is_deleted boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.atta_crm_leads enable row level security;
alter table public.atta_crm_deals enable row level security;

revoke all on table public.atta_crm_leads from anon, authenticated;
revoke all on table public.atta_crm_deals from anon, authenticated;
grant select, insert, update, delete on table public.atta_crm_leads to service_role;
grant select, insert, update, delete on table public.atta_crm_deals to service_role;

comment on table public.atta_crm_leads is 'Atta sales leads; accessed only by the authenticated CRM server API.';
comment on table public.atta_crm_deals is 'Atta pipeline state and tasks; accessed only by the authenticated CRM server API.';
