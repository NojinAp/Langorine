/*
Group 37
Date: March 14, 2026
Team Finaly Delivery - French self-learning Platform
*/

/**
 * Handles initialization of UI interactions and scroll animations when the page loads.
 * No parameters. Triggered by the window 'load' event.
 * No return value.
 */
window.addEventListener('load', () => {

    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const hamburger = document.getElementById('hamburger');
    const menu = document.querySelector(".nav-menu");
    const elements = document.querySelectorAll(".reveal");

    /**
     * IntersectionObserver callback to reveal elements when they enter the viewport.
     * @param {Array} entries - Array of IntersectionObserverEntry objects.
     * No return value.
     */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.15
    });

    elements.forEach(el => observer.observe(el));

    /**
     * Shows or hides the scroll-to-top button based on scroll position.
     * No parameters. Triggered by window 'scroll' event.
     * No return value.
     */
    window.addEventListener('scroll', () => {
        if (window.scrollY > 1000) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    /**
     * Scrolls the page smoothly to the top when the scroll-to-top button is clicked.
     * No parameters. Triggered by scrollTopBtn 'click' event.
     * No return value.
     */
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    /**
     * Toggles navigation menu visibility and updates hamburger button state.
     * No parameters. Triggered by hamburger 'click' event.
     * No return value.
     */
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
        const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
        hamburger.setAttribute('aria-expanded', !expanded);
    });

});