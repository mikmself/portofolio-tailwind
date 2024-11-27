const skillsData = {
    language: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP', 'JAVA', 'C++','DART','KOTLIN','GOLANG','PYTHON','SQL'],
    framework: ['LARAVEL', 'LUMEN', 'BOOTSTRAP','NEXT JS','VUE JS','FLUTTER', 'SPRINGBOOT','EXPRESS JS','CODEIGNITER'],
    library: ['REACT', 'TAILWIND','SASS','NUMPY','PANDAS','SCKIT LEARN','JQUERY','AXIOS','CHART JS','MATERIAL UI'],
    dbms: ['MYSQL', 'MONGO DB', 'SQL SERVER', 'MICROSOFT ACCESS','ORACLE','POSTGRE SQL']
};

const skillTabs = document.querySelectorAll('.skill-tab');
const skillCardsContainer = document.querySelector('.skill-cards');

function generateSkillCards(tab) {
    const tabName = tab.dataset.tab;
    const skills = skillsData[tabName];
    const cardsHTML = skills
        .map(skill => `
            <div class="skill-card">
                <div class="skill-icon">
                    <img src="/assets/images/icons/${skill}.svg" alt="${skill}">
                </div>
                <div class="skill-title">${skill}</div>
            </div>
        `)
        .join('');
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

const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('user_name').value;
    let email = document.getElementById('user_email').value;
    let message = document.getElementById('message').value;
    let subject = "Contact Form Submission from " + email;
    let body = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;
    window.location.href = "mailto:mikmself@email.com" + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
});
