const skillsData = {
    language: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP', 'JAVA', 'C++', 'DART', 'KOTLIN', 'GOLANG', 'PYTHON', 'SQL'],
    framework: ['LARAVEL', 'LUMEN', 'BOOTSTRAP', 'NEXT JS', 'VUE JS', 'FLUTTER', 'SPRINGBOOT', 'EXPRESS JS', 'CODEIGNITER'],
    library: ['REACT', 'TAILWIND', 'SASS', 'NUMPY', 'PANDAS', 'SCKIT LEARN', 'JQUERY', 'AXIOS', 'CHART JS', 'MATERIAL UI'],
    dbms: ['MYSQL', 'MONGO DB', 'SQL SERVER', 'MICROSOFT ACCESS', 'ORACLE', 'POSTGRE SQL']
};

const skillTabs = document.querySelectorAll('.skill-tab');
const skillCardsContainer = document.querySelector('.skill-cards');

// Function to generate skill cards based on the selected tab
function generateSkillCards(tab) {
    const tabName = tab.dataset.tab;
    const skills = skillsData[tabName];

    // Ensure the tabName exists in skillsData
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

// Initialize the first tab's skill cards
generateSkillCards(skillTabs[0]);

// Add event listeners to skill tabs
skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        skillTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        generateSkillCards(tab);
    });
});

// Display the current year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('user_name').value;
    const email = document.getElementById('user_email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (!name || !email || !message) {
        alert('Please fill in all the fields.');
        return;
    }

    const subject = `Contact Form Submission from ${email}`;
    const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    window.location.href = `mailto:mikmself@email.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

// Scroll-triggered animation for home section
document.addEventListener("scroll", function() {
    const homeSection = document.querySelector('#home');
    if (window.scrollY > 150) {
        homeSection.classList.add('animate-scroll');
    }
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
