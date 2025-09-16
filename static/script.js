// Toggle mobile menu
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menuToggle');
  const nav = document.getElementById('navLinks');

  menuBtn?.addEventListener('click', () => {
    nav.classList.toggle('show');
    menuBtn.classList.toggle('open');
  });

  // Intersection Observer for reveal animations
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(r => obs.observe(r));

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // Close mobile nav after click
        if (nav.classList.contains('show')) nav.classList.remove('show');
      }
    });
  });
});
