// ═══════════════════════════════════════════════
//  VOLUNTREE — Supabase Configuration
// ═══════════════════════════════════════════════
//  1. Go to https://supabase.com → create a project
//  2. Settings → API → copy your URL + anon key
//  3. Paste them below

const SUPABASE_URL      = 'https://ktsaybohhbaxrkafvlpb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0c2F5Ym9oaGJheHJrYWZ2bHBiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1MjMzNjksImV4cCI6MjA4OTA5OTM2OX0.2FfVgyyGw4G_NAY6yv7Hs9nYEslDYjVxnLh8B0-5bTc';

// ── Do not edit below ──
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
