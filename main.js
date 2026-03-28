/* ─────────────────────────────────────────────
   EduCore Kenya — Main JavaScript
   ───────────────────────────────────────────── */

/* ── Mobile Navigation Toggle ───────────────── */
const menuBtn = document.getElementById('menuBtn');
const nav     = document.getElementById('siteNav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Close nav when any nav link is clicked (mobile UX)
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});

/* ── Close nav on outside click (mobile) ─────── */
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
    nav.classList.remove('open');
  }
});
