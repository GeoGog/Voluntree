// nav.js — injects the shared navbar
function injectNav() {
  const root = document.getElementById('navbar-root');
  if (!root) return;
  root.innerHTML = `
  <nav class="navbar">
    <a href="explore.html" class="nav-brand">
      <span class="leaf-icon">🌳</span> Voluntree
    </a>
    <div class="nav-links">
      <a href="explore.html"   class="nav-link">Explore</a>
      <a href="map.html"       class="nav-link">Map</a>
      <a href="post.html"      class="nav-link">Post Opportunity</a>
      <a href="dashboard.html" class="nav-link">Dashboard</a>
      <a href="profile.html"   class="nav-link">My Profile</a>
      <a href="log-hours.html" class="nav-link">Log Hours</a>
    </div>
    <div class="nav-end">
      <div class="dropdown">
        <div class="nav-avatar" id="nav-avatar" onclick="toggleDropdown()">?</div>
        <div class="dropdown-menu hidden" id="user-dd">
          <div class="dropdown-header">
            <div class="name" id="dd-name">Loading…</div>
            <div class="email" id="dd-email"></div>
          </div>
          <a href="explore.html"   class="dropdown-item">🌿 Explore</a>
          <a href="post.html"      class="dropdown-item">📋 Post opportunity</a>
          <a href="dashboard.html" class="dropdown-item">📊 Dashboard</a>
          <a href="profile.html"   class="dropdown-item">👤 My profile</a>
          <a href="log-hours.html" class="dropdown-item">⏱ Log hours</a>
          <div class="dropdown-divider"></div>
          <button class="dropdown-item danger" onclick="signOut()">🚪 Sign out</button>
        </div>
      </div>
    </div>
  </nav>`;
}

injectNav();
