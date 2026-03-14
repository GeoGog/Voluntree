// ═══════════════════════════════════════════════
//  VOLUNTREE — Supabase Configuration
// ═══════════════════════════════════════════════
//  1. Go to https://supabase.com → create a project
//  2. Settings → API → copy your URL + anon key
//  3. Paste them below

const SUPABASE_URL      = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

// ── Do not edit below ──
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
