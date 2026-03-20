window.addEventListener('load', () => {

    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const hamburger = document.getElementById('hamburger');
    const menu = document.querySelector(".nav-menu");
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.4
    });

    elements.forEach(el => observer.observe(el));

    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    if (hamburger && menu) {

        hamburger.addEventListener('click', () => {
            menu.classList.toggle('active');
            const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
            hamburger.setAttribute('aria-expanded', !expanded);
        });
    }

    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        if (question && answer) {
            question.addEventListener('click', () => {

                item.classList.toggle('active');

                if (item.classList.contains('active')) {
                    answer.style.maxHeight = answer.scrollHeight + "px";
                } else {
                    answer.style.maxHeight = "0";
                }
            });
        }
    });

    function resetForm() {
        const form = document.getElementById('contactForm');
        const successMsg = document.getElementById('formSuccess');

        if (form && successMsg) {
            form.reset();
            form.style.display = 'block';
            successMsg.style.display = 'none';
        }
    }

    /**
     * Initializes the contact form functionality when the DOM is loaded
     * No parameters. Triggered by DOMContentLoaded event.
     * No return value.
     */
    const form = document.getElementById('contactForm');
    const successMsg = document.getElementById('formSuccess');

    if (form && successMsg) {
        /**
         * Handles form submission
         * @param {Event} e - The submit event object
         * No return value.
         */
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Here you would normally send the form data to a server
            // For now, we'll just show the success message
            form.style.display = 'none';
            successMsg.style.display = 'block';

            // Log form data for demonstration (remove in production)
            const formData = new FormData(form);
            console.log('Form submitted:', Object.fromEntries(formData));
        });
    }

    // Add input animations
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

    formInputs.forEach(input => {
        /**
         * Adds a class to parent when input is focused
         * No parameters. Triggered by focus event.
         * No return value.
         */
        input.addEventListener('focus', function () {
            this.closest('.form-group').classList.add('focused');
        });

        /**
         * Removes class from parent when input loses focus
         * No parameters. Triggered by blur event.
         * No return value.
         */
        input.addEventListener('blur', function () {
            this.closest('.form-group').classList.remove('focused');
        });
    });

const mobileDropdown = document.getElementById("mobileUserDropdown");

if (mobileDropdown) {
    mobileDropdown.addEventListener("click", function (e) {
        e.stopPropagation();
        mobileDropdown.classList.toggle("open");
    });

    document.addEventListener("click", function (e) {
        if (!mobileDropdown.contains(e.target)) {
            mobileDropdown.classList.remove("open");
        }
    });
}

const mobilePoemToggle = document.getElementById("mobilePoemToggle");
const sidebar = document.querySelector(".sidebar");

if (mobilePoemToggle && sidebar) {
    mobilePoemToggle.addEventListener("click", function () {
        mobilePoemToggle.classList.toggle("open");
        sidebar.classList.toggle("open");
    });

    const storyLabels = sidebar.querySelectorAll("label");

    storyLabels.forEach(label => {
        label.addEventListener("click", function () {
            if (window.innerWidth <= 700) {
                sidebar.classList.remove("open");
                mobilePoemToggle.classList.remove("open");
            }
        });
    });
}
});
