window.addEventListener('DOMContentLoaded', () => {

    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const hamburger = document.getElementById('hamburger');
    const navLeft = document.querySelector('.nav-left');
    const navRight = document.querySelector('.nav-right');
    const elements = document.querySelectorAll(".reveal");

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

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    hamburger.addEventListener('click', () => {
        navLeft.classList.toggle('active');
        navRight.classList.toggle('active');

        const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
        hamburger.setAttribute('aria-expanded', !expanded);
    });

});