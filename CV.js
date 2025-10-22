/**
 * Observateur pour les animations "fadeIn" des sections
 */
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      entry.target.style.animation = 'fadeIn 0.6s ease-out';
      // On arrête d'observer une fois l'animation jouée
      sectionObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// On applique l'observateur à toutes les sections
document.querySelectorAll('section').forEach(section => {
  // On cache initialement les sections pour l'effet
  section.style.opacity = 0;
  section.style.transform = 'translateY(20px)';
  sectionObserver.observe(section);
});


/**
 * Observateur pour les animations des barres de progression
 */
const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const targetWidth = bar.dataset.width; // On récupère la largeur cible depuis 'data-width'
      bar.style.width = targetWidth;
      // On arrête d'observer une fois l'animation jouée
      progressObserver.unobserve(bar);
    }
  });
}, { threshold: 0.8 }); // Se déclenche quand 80% de la barre est visible

// On applique l'observateur à toutes les barres
document.querySelectorAll('.progress-bar').forEach(bar => {
  progressObserver.observe(bar);
});


/**
 * =======================================
 * LOGIQUE DU CURSEUR PERSONNALISÉ (JS) 🖱️
 * Améliorée pour la performance (utilisation de transform)
 * =======================================
 */
const cursorDot = document.querySelector('.custom-cursor-dot');
const cursorOutline = document.querySelector('.custom-cursor-outline');
const interactiveElements = 'a, button, .accordion-button, .card, .nav-link, .list-group-item, .badge';

// On vérifie que les éléments du curseur existent
if (cursorDot && cursorOutline) {
  let mouseX = 0;
  let mouseY = 0;
  let dotX = 0;
  let dotY = 0;
  let outlineX = 0;
  let outlineY = 0;

  // Vitesses d'interpolation (plus la valeur est petite, plus le "lag" est grand)
  const speedDot = 0.2; 
  const speedOutline = 0.1;

  // 1. Mettre à jour la position cible de la souris
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // 2. Animer le curseur en continu via requestAnimationFrame
  function animateCursor() {
    // Calcul de la nouvelle position (interpolation linéaire - lerp)
    // new_pos = current_pos + (target_pos - current_pos) * speed
    dotX += (mouseX - dotX) * speedDot;
    dotY += (mouseY - dotY) * speedDot;

    outlineX += (mouseX - outlineX) * speedOutline;
    outlineY += (mouseY - outlineY) * speedOutline;

    // Appliquer la position via transform (plus performant que left/top)
    // On garde le translate(-50%, -50%) du CSS en l'appliquant ici
    cursorDot.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%) ${cursorDot.classList.contains('hover-target') ? 'scale(0)' : 'scale(1)'}`;
    
    // On gère le scale ici aussi pour être synchro avec le transform
    const scale = cursorOutline.classList.contains('hover-target') ? 1.5 : 1;
    cursorOutline.style.transform = `translate(${outlineX}px, ${outlineY}px) translate(-50%, -50%) scale(${scale})`;


    requestAnimationFrame(animateCursor);
  }

  // Lancer l'animation
  animateCursor();

  // 3. Gérer les interactions (hover)
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