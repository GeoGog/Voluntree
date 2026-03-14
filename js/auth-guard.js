// auth-guard.js — include on every protected page
let currentUser  = null;
let currentProfile = null;

async function initAuth() {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) { window.location.href = 'index.html'; return; }
  currentUser = session.user;

  // Load profile
  const { data } = await supabase.from('profiles').select('*').eq('id', currentUser.id).single();
  currentProfile = data;

  updateNavUI();

  // Auth state changes
  supabase.auth.onAuthStateChange((_e, sess) => {
    if (!sess) window.location.href = 'index.html';
  });
}

function updateNavUI() {
  const avatar    = document.getElementById('nav-avatar');
  const nameEl    = document.getElementById('dd-name');
  const emailEl   = document.getElementById('dd-email');
  const roleEl    = document.getElementById('dd-role');

  const name = currentProfile?.full_name || currentUser.user_metadata?.full_name || currentUser.email;
  if (avatar)  avatar.textContent  = name.charAt(0).toUpperCase();
  if (nameEl)  nameEl.textContent  = name;
  if (emailEl) emailEl.textContent = currentUser.email;
  if (roleEl)  roleEl.textContent  = currentProfile?.role === 'org' ? '🏢 Organization' : '🙋 Volunteer';

  // Show/hide org-only nav items
  const orgItems = document.querySelectorAll('.org-only');
  orgItems.forEach(el => el.style.display = currentProfile?.role === 'org' ? '' : 'none');

  // Set active nav link
  const path = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.getAttribute('href') === path);
  });
}

function toggleDropdown() {
  document.getElementById('user-dd').classList.toggle('hidden');
}

document.addEventListener('click', e => {
  const dd  = document.getElementById('user-dd');
  const btn = document.getElementById('nav-avatar');
  if (dd && btn && !dd.contains(e.target) && !btn.contains(e.target)) dd.classList.add('hidden');
});

async function signOut() {
  await supabase.auth.signOut();
  window.location.href = 'index.html';
}

initAuth();
