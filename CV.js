/**
 * Animation d'apparition au défilement (Fade-in on Scroll)
 *
 * Utilise IntersectionObserver pour détecter quand un élément
 * entre dans la fenêtre et lui ajoute une classe CSS.
 */
document.addEventListener('DOMContentLoaded', () => {

  // 1. Sélectionner tous les éléments à animer
  const sections = document.querySelectorAll('.fade-in-section');

  // 2. Définir les options de l'observateur
  // threshold: 0.1 signifie que l'animation se déclenche
  // dès que 10% de l'élément est visible.
  const observerOptions = {
    root: null, // Observe par rapport au viewport
    rootMargin: '0px',
    threshold: 0.1
  };

  // 3. Créer la fonction de callback (ce qui se passe)
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      // Si l'élément est visible
      if (entry.isIntersecting) {
        // Ajouter la classe qui déclenche l'animation CSS
        entry.target.classList.add('is-visible');
        
        // Cesser d'observer cet élément (l'animation ne se joue qu'une fois)
        observer.unobserve(entry.target);
      }
    });
  };

  // 4. Créer et attacher l'observateur
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });

});