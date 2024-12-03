const skillsData = {
    language: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP', 'JAVA', 'C++', 'DART','PYTHON', 'SQL'],
    framework: ['LARAVEL', 'LUMEN', 'BOOTSTRAP', 'NEXT JS', 'FLUTTER', 'SPRINGBOOT', 'EXPRESS JS', 'CODEIGNITER'],
    library: ['REACT', 'TAILWIND', 'SASS', 'NUMPY', 'PANDAS', 'SCKIT LEARN', 'JQUERY', 'AXIOS', 'CHART JS', 'MATERIAL UI'],
    dbms: ['MYSQL', 'MONGO DB', 'SQL SERVER', 'MICROSOFT ACCESS', 'ORACLE', 'POSTGRE SQL']
};
const SkillTabs = {
    skillTabs: document.querySelectorAll('.skill-tab'),
    skillCardsContainer: document.querySelector('.skill-cards'),

    generateSkillCards(tab) {
        const tabName = tab.dataset.tab;
        const skills = skillsData[tabName];
        if (!skills) return;
        const cardsHTML = skills.map(skill => `
            <div class="skill-card">
                <div class="skill-icon">
                    <img src="/assets/images/icons/${skill}.svg" alt="${skill}" onerror="this.onerror=null;this.src='/assets/images/icons/default.svg';">
                </div>
                <div class="skill-title">${skill}</div>
            </div>
        `).join('');
        this.skillCardsContainer.innerHTML = cardsHTML;
    },

    init() {
        this.generateSkillCards(this.skillTabs[0]); 
        this.skillTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                this.skillTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                this.generateSkillCards(tab);
            });
        });
    }
};
const ContactForm = {
    form: document.getElementById('contact-form'),

    handleSubmit(event) {
        event.preventDefault();
        const name = document.getElementById('user_name').value;
        const email = document.getElementById('user_email').value;
        const message = document.getElementById('message').value;
        if (!name || !email || !message) {
            alert('Please fill in all the fields.');
            return;
        }
        const subject = `Contact Form Submission from ${email}`;
        const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
        window.location.href = `mailto:mikmself@email.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    },

    init() {
        this.form.addEventListener('submit', this.handleSubmit);
    }
};
const ScrollAnimation = {
    init() {
        window.addEventListener('load', () => {
            const homeSection = document.querySelector('#home');
            homeSection.classList.add('animate-scroll');
        });
    }
};
const SmoothScroll = {
    init() {
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetElement = document.getElementById(this.getAttribute('href').substring(1));
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            });
        });
    }
};
const HamburgerMenu = {
    hamburgerMenu: document.getElementById('hamburger-menu'),
    navLinks: document.getElementById('nav-links'),

    toggleMenu() {
        this.navLinks.classList.toggle('active');
    },

    init() {
        this.hamburgerMenu.addEventListener('click', () => this.toggleMenu());
    }
};
const TestimonialsSlider = {
    testimonials: document.querySelectorAll('.testimonial-item'),
    prevBtn: document.querySelector('.prev-btn'),
    nextBtn: document.querySelector('.next-btn'),
    currentSlide: 0,
    interval: null,

    updateTestimonials(index) {
        this.testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove('active');
            if (i === index) {
                testimonial.classList.add('active');
            }
        });
    },

    goToNextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
        this.updateTestimonials(this.currentSlide);
    },

    goToPrevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.testimonials.length) % this.testimonials.length;
        this.updateTestimonials(this.currentSlide);
    },

    startAutoChange() {
        this.interval = setInterval(() => this.goToNextSlide(), 3000);  // Change every 3 seconds
    },

    resetAutoChange() {
        clearInterval(this.interval);
        this.startAutoChange();
    },

    init() {
        this.updateTestimonials(this.currentSlide);
        this.startAutoChange();

        this.prevBtn.addEventListener('click', () => {
            this.goToPrevSlide();
            this.resetAutoChange();
        });

        this.nextBtn.addEventListener('click', () => {
            this.goToNextSlide();
            this.resetAutoChange();
        });
    }
};
document.addEventListener('DOMContentLoaded', () => {
    SkillTabs.init();
    ContactForm.init();
    ScrollAnimation.init();
    SmoothScroll.init();
    HamburgerMenu.init();
    TestimonialsSlider.init();
    document.getElementById('current-year').textContent = new Date().getFullYear();
});
