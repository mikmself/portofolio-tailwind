const skillsData = {
    language: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP', 'JAVA', 'C++', 'DART', 'KOTLIN', 'GOLANG', 'PYTHON', 'SQL'],
    framework: ['LARAVEL', 'LUMEN', 'BOOTSTRAP', 'NEXT JS', 'VUE JS', 'FLUTTER', 'SPRINGBOOT', 'EXPRESS JS', 'CODEIGNITER'],
    library: ['REACT', 'TAILWIND', 'SASS', 'NUMPY', 'PANDAS', 'SCKIT LEARN', 'JQUERY', 'AXIOS', 'CHART JS', 'MATERIAL UI'],
    dbms: ['MYSQL', 'MONGO DB', 'SQL SERVER', 'MICROSOFT ACCESS', 'ORACLE', 'POSTGRE SQL']
};

const skillTabs = document.querySelectorAll('.skill-tab');
const skillCardsContainer = document.querySelector('.skill-cards');
function generateSkillCards(tab) {
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
    skillCardsContainer.innerHTML = cardsHTML;
}
generateSkillCards(skillTabs[0]); 
skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        skillTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        generateSkillCards(tab);
    });
});
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('contact-form').addEventListener('submit', function(event) {
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
});
window.addEventListener('load', function() {
    const homeSection = document.querySelector('#home');
    homeSection.classList.add('animate-scroll');
});
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
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');
hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
const testimonials = document.querySelectorAll('.testimonial-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;
let interval;

// Fungsi untuk memperbarui testimonial
function updateTestimonials(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        if (i === index) {
            testimonial.classList.add('active');
        }
    });
}

// Fungsi untuk berganti ke slide berikutnya
function goToNextSlide() {
    currentSlide = (currentSlide + 1) % testimonials.length;
    updateTestimonials(currentSlide);
}

// Fungsi untuk berganti ke slide sebelumnya
function goToPrevSlide() {
    currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
    updateTestimonials(currentSlide);
}

// Event listener untuk tombol previous
prevBtn.addEventListener('click', () => {
    goToPrevSlide();
    resetAutoChange();  // Reset otomatis berganti saat interaksi
});

// Event listener untuk tombol next
nextBtn.addEventListener('click', () => {
    goToNextSlide();
    resetAutoChange();  // Reset otomatis berganti saat interaksi
});

// Fungsi untuk memulai otomatis berganti testimonial
function startAutoChange() {
    interval = setInterval(goToNextSlide, 3000);  // Ganti slide setiap 3 detik
}

// Fungsi untuk reset interval otomatis ketika ada interaksi
function resetAutoChange() {
    clearInterval(interval);  // Hentikan interval yang sedang berjalan
    startAutoChange();  // Mulai interval kembali
}

// Inisialisasi load pertama dan mulai otomatis berganti
updateTestimonials(currentSlide);
startAutoChange();
