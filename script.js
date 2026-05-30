// Scroll fade-up
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

// Nav scroll state (transparent → dark on home page only)
const nav = document.querySelector('.site-nav');
if (nav && document.body.classList.contains('page-home')) {
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 56);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Mobile hamburger menu
const hamburgerBtn = document.querySelector('.hamburger-btn');
const navOverlay = document.querySelector('.nav-overlay');

if (hamburgerBtn && navOverlay) {
  hamburgerBtn.addEventListener('click', () => {
    const isOpen = navOverlay.classList.toggle('open');
    hamburgerBtn.classList.toggle('open', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  navOverlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navOverlay.classList.remove('open');
      hamburgerBtn.classList.remove('open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}
