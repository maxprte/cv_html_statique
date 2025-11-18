document.addEventListener('DOMContentLoaded', () => {

    const THEME_KEY = 'theme-preference';
    const ATTR_NAME = 'data-bs-theme';
    const sunIcon = 'bi-sun-fill';
    const moonIcon = 'bi-moon-stars-fill';

    const toggleButtons = document.querySelectorAll('.theme-toggle-btn');
    const icons = document.querySelectorAll('#theme-icon-desktop, #theme-icon-mobile');
    const htmlElement = document.documentElement;

    /**
     * Récupère le thème préféré depuis le localStorage ou les préférences système.
     */
    const getPreferredTheme = () => {
        const storedTheme = localStorage.getItem(THEME_KEY);
        if (storedTheme) {
            return storedTheme;
        }
        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    };

    const currentTheme = getPreferredTheme();

    /**
     * Applique le thème à l'élément HTML et met à jour les icônes.
     */
    const applyTheme = (theme) => {
        htmlElement.setAttribute(ATTR_NAME, theme);
        const isDark = theme === 'dark';
        icons.forEach(icon => {
            icon.classList.toggle(sunIcon, !isDark);
            icon.classList.toggle(moonIcon, isDark);
        });
        localStorage.setItem(THEME_KEY, theme);
    };

    // Appliquer le thème au chargement
    applyTheme(currentTheme);

    // Clic boutons thème
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const newTheme = htmlElement.getAttribute(ATTR_NAME) === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
        });
    });

    // --- GESTION DU CURSEUR PERSONNALISÉ ---
    const cursorDot = document.querySelector('.custom-cursor-dot');
    const hoverTargets = document.querySelectorAll('a, button, .card, .accordion-button, .nav-link, .list-group-item, .badge, .btn, .form-control, .theme-toggle-btn');

    let isTouchDevice = false;
    window.addEventListener('touchstart', () => {
        isTouchDevice = true;
        if (cursorDot) cursorDot.style.display = 'none';
    }, { once: true });

    if (!isTouchDevice) {
        window.addEventListener('mousemove', (e) => {
            if (cursorDot) {
                cursorDot.style.left = `${e.clientX}px`;
                cursorDot.style.top = `${e.clientY}px`;
            }
        });

        hoverTargets.forEach(target => {
            target.addEventListener('mouseenter', () => {
                if (cursorDot) cursorDot.classList.add('hover-target');
            });
            target.addEventListener('mouseleave', () => {
                if (cursorDot) cursorDot.classList.remove('hover-target');
            });
        });
    }

    // --- ANIMATION AU SCROLL ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => observer.observe(el));
});