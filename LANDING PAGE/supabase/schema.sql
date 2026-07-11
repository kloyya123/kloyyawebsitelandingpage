-- Kloyya waitlist ledger. Run in the Supabase SQL editor.
create table if not exists public.kloyya_waitlist (
    id uuid primary key default gen_random_uuid(),
    email text unique not null
        check (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    tools text[] default '{}',
    headcount text,
    created_at timestamptz not null default timezone('utc', now())
);

alter table public.kloyya_waitlist enable row level security;

-- Writes come only through the service-role server actions, so no public
-- policies are granted. Service-role bypasses RLS; anon/authenticated get nothing.
-- (Explicitly no SELECT/INSERT/UPDATE policy for public roles = deny by default.)

-- Optional: index for the dedupe lookup (email is already unique-indexed).
create index if not exists kloyya_waitlist_created_at_idx
    on public.kloyya_waitlist (created_at desc);
