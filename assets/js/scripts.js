document.getElementById('mobile-menu-button').addEventListener('click', function() {
    document.querySelector('ul').classList.toggle('hidden');
});
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
const projectsData = {
    website: [
        {
            title: 'Masih Males Update WKWK',
            description: 'Masih males update web portofolio buat project Website 1',
            icon: '/assets/images/projects/project.jpg',
        },
        {
            title: 'Masih Males Update WKWK',
            description: 'Masih males update web portofolio buat project Website 2',
            icon: '/assets/images/projects/project.jpg',
        },
        {
            title: 'Masih Males Update WKWK',
            description: 'Masih males update web portofolio buat project Website 3',
            icon: '/assets/images/projects/project.jpg',
        },
        {
            title: 'Masih Males Update WKWK',
            description: 'Masih males update web portofolio buat project Website 4',
            icon: '/assets/images/projects/project.jpg',
        },
        {
            title: 'Masih Males Update WKWK',
            description: 'Masih males update web portofolio buat project Website 5',
            icon: '/assets/images/projects/project.jpg',
        },
        {
            title: 'Masih Males Update WKWK',
            description: 'Masih males update web portofolio buat project Website 6',
            icon: '/assets/images/projects/project.jpg',
        },
    ],
    api: [
        {
            title: 'Masih Males Update WKWK',
            description: 'Masih males update web portofolio buat project API 1',
            icon: '/assets/images/projects/project.jpg',
        },
        {
            title: 'Masih Males Update WKWK',
            description: 'Masih males update web portofolio buat project API 2',
            icon: '/assets/images/projects/project.jpg',
        },
        {
            title: 'Masih Males Update WKWK',
            description: 'Masih males update web portofolio buat project API 3',
            icon: '/assets/images/projects/project.jpg',
        },
        {
            title: 'Masih Males Update WKWK',
            description: 'Masih males update web portofolio buat project API 4',
            icon: '/assets/images/projects/project.jpg',
        },
        {
            title: 'Masih Males Update WKWK',
            description: 'Masih males update web portofolio buat project API 5',
            icon: '/assets/images/projects/project.jpg',
        },
        {
            title: 'Masih Males Update WKWK',
            description: 'Masih males update web portofolio buat project API 6',
            icon: '/assets/images/projects/project.jpg',
        },
    ],
    mobile: [
        {
            title: 'Masih Males Update WKWK',
            description: 'Masih males update web portofolio buat project Mobile 1',
            icon: '/assets/images/projects/project.jpg',
        },
        {
            title: 'Masih Males Update WKWK',
            description: 'Masih males update web portofolio buat project Mobile 2',
            icon: '/assets/images/projects/project.jpg',
        },
        {
            title: 'Masih Males Update WKWK',
            description: 'Masih males update web portofolio buat project Mobile 3',
            icon: '/assets/images/projects/project.jpg',
        },
        {
            title: 'Masih Males Update WKWK',
            description: 'Masih males update web portofolio buat project Mobile 4',
            icon: '/assets/images/projects/project.jpg',
        },
        {
            title: 'Masih Males Update WKWK',
            description: 'Masih males update web portofolio buat project Mobile 5',
            icon: '/assets/images/projects/project.jpg',
        },
        {
            title: 'Masih Males Update WKWK',
            description: 'Masih males update web portofolio buat project Mobile 6',
            icon: '/assets/images/projects/project.jpg',
        },
    ],
    uiux: [
        {
            title: 'Masih Males Update WKWK 1',
            description: 'Masih males update web portofolio buat project UI/UX 1',
            icon: '/assets/images/projects/project.jpg',
        },
        {
            title: 'Masih Males Update WKWK 2',
            description: 'Masih males update web portofolio buat project UI/UX 2',
            icon: '/assets/images/projects/project.jpg',
        },
        {
            title: 'Masih Males Update WKWK 3',
            description: 'Masih males update web portofolio buat project UI/UX 3',
            icon: '/assets/images/projects/project.jpg',
        },
        {
            title: 'Masih Males Update WKWK 4',
            description: 'Masih males update web portofolio buat project UI/UX 4',
            icon: '/assets/images/projects/project.jpg',
        },
        {
            title: 'Masih Males Update WKWK 5',
            description: 'Masih males update web portofolio buat project UI/UX 5',
            icon: '/assets/images/projects/project.jpg',
        },
        {
            title: 'Masih Males Update WKWK 6',
            description: 'Masih males update web portofolio buat project UI/UX 6',
            icon: '/assets/images/projects/project.jpg',
        },
    ],
    cli: [
        {
            title: 'Masih Males Update WKWK',
            description: 'Masih males update web portofolio buat project CLI 1',
            icon: '/assets/images/projects/project.jpg',
        },
        {
            title: 'Masih Males Update WKWK',
            description: 'Masih males update web portofolio buat project CLI 2',
            icon: '/assets/images/projects/project.jpg',
        },
        {
            title: 'Masih Males Update WKWK',
            description: 'Masih males update web portofolio buat project CLI 3',
            icon: '/assets/images/projects/project.jpg',
        },
        {
            title: 'Masih Males Update WKWK',
            description: 'Masih males update web portofolio buat project CLI 4',
            icon: '/assets/images/projects/project.jpg',
        },
        {
            title: 'Masih Males Update WKWK',
            description: 'Masih males update web portofolio buat project CLI 5',
            icon: '/assets/images/projects/project.jpg',
        },
        {
            title: 'Masih Males Update WKWK',
            description: 'Masih males update web portofolio buat project CLI 6',
            icon: '/assets/images/projects/project.jpg',
        },
    ]
};
const projectTabs = document.querySelectorAll('.project-tab');
const projectCardsContainer = document.querySelector('.project-cards');
function generateProjectCards(tab) {
    const tabName = tab.dataset.tab;
    const projects = projectsData[tabName];
    projectCardsContainer.innerHTML = projects
        .map(project => `
            <div class="project-card">
                <img src="${project.icon}" alt="${project.title}" class="project-icon">
                <div class="project-title">${project.title}</div>
                <div class="project-description">${project.description}</div>
            </div>
        `)
        .join('');
}
generateProjectCards(projectTabs[0]);
projectTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        projectTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        generateProjectCards(tab);
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