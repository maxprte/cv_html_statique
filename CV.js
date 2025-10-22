document.addEventListener('DOMContentLoaded', function() {
  // =======================================
  // 1️⃣ Animation des sections au scroll
  // =======================================
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeIn 0.6s ease-out';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });

  // =======================================
  // 2️⃣ Animation des barres de progression
  // =======================================
  document.querySelectorAll('.progress-bar').forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.width = width;
    }, 300);
  });

  // =======================================
  // 3️⃣ LOGIQUE DU CURSEUR PERSONNALISÉ 🖱️
  // =======================================
  const cursorDot = document.querySelector('.custom-cursor-dot');
  const cursorOutline = document.querySelector('.custom-cursor-outline');
  const interactiveElements = 'a, button, .accordion-button, .card, .nav-link, .list-group-item, .badge';
  
  if (cursorDot && cursorOutline) {
    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    let outlineX = 0;
    let outlineY = 0;
    const speedDot = 0.05;
    const speedOutline = 0.15;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animateCursor() {
      dotX += (mouseX - dotX) * speedDot;
      dotY += (mouseY - dotY) * speedDot;
      cursorDot.style.left = `${dotX}px`;
      cursorDot.style.top = `${dotY}px`;

      outlineX += (mouseX - outlineX) * speedOutline;
      outlineY += (mouseY - outlineY) * speedOutline;
      cursorOutline.style.left = `${outlineX}px`;
      cursorOutline.style.top = `${outlineY}px`;

      requestAnimationFrame(animateCursor);
    }

    animateCursor();

    document.querySelectorAll(interactiveElements).forEach(element => {
      element.addEventListener('mouseenter', () => {
        cursorOutline.classList.add('hover-target');
        cursorDot.classList.add('hover-target');
      });
      element.addEventListener('mouseleave', () => {
        cursorOutline.classList.remove('hover-target');
        cursorDot.classList.remove('hover-target');
      });
    });
  }

  // =======================================
  // 4️⃣ DÉFILEMENT FLUIDE DU BOUTON "ME CONTACTER" 📩
  // =======================================
  const scrollBtn = document.querySelector('a[href="#contact"]');
  const contactSection = document.querySelector('#contact');

  if (scrollBtn && contactSection) {
    scrollBtn.addEventListener('click', function(e) {
      e.preventDefault();
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    });
  }

  // =======================================
  // ✅ Fin du script principal
  // =======================================
});
