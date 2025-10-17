// ---- Smooth Scroll Navigation ----
document.querySelectorAll('header nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    // Prevent default jump
    e.preventDefault();

    // Remove 'active' class from all links
    document.querySelectorAll('header nav a').forEach(link => link.classList.remove('active'));
    this.classList.add('active');

    // Get target section ID (e.g., #skills)
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    // Smooth scroll to section
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60, // offset for sticky header
        behavior: 'smooth'
      });
    }
  });
});

// ---- Animation on Scroll Reveal ----
function revealOnScroll() {
  const elements = document.querySelectorAll('.animate');
  const windowHeight = window.innerHeight;
  
  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
}

// Run animation on scroll and load
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
