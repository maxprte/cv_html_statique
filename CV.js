document.addEventListener('DOMContentLoaded', function() {

  // Animation des sections au scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.animation = 'fadeIn 0.6s ease-out';
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('section').forEach(section => observer.observe(section));

  // Animation des barres de progression
  document.querySelectorAll('.progress-bar').forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => { bar.style.width = width; }, 300);
  });

  // Curseur personnalisé
  const cursorDot = document.querySelector('.custom-cursor-dot');
  const cursorOutline = document.querySelector('.custom-cursor-outline');
  const interactiveElements = 'a, button, .accordion-button, .card, .nav-link, .list-group-item, .badge';

  if(cursorDot && cursorOutline){
    let mouseX=0, mouseY=0, dotX=0, dotY=0, outlineX=0, outlineY=0;
    const speedDot=0.05, speedOutline=0.15;

    window.addEventListener('mousemove', e => { mouseX=e.clientX; mouseY=e.clientY; });

    function animateCursor(){
      dotX+=(mouseX-dotX)*speedDot;
      dotY+=(mouseY-dotY)*speedDot;
      cursorDot.style.left=`${dotX}px`;
      cursorDot.style.top=`${dotY}px`;

      outlineX+=(mouseX-outlineX)*speedOutline;
      outlineY+=(mouseY-outlineY)*speedOutline;
      cursorOutline.style.left=`${outlineX}px`;
      cursorOutline.style.top=`${outlineY}px`;

      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    document.querySelectorAll(interactiveElements).forEach(el=>{
      el.addEventListener('mouseenter',()=>{ cursorOutline.classList.add('hover-target'); cursorDot.classList.add('hover-target'); });
      el.addEventListener('mouseleave',()=>{ cursorOutline.classList.remove('hover-target'); cursorDot.classList.remove('hover-target'); });
    });
  }

});
