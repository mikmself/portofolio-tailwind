document.getElementById('mobile-menu-button').addEventListener('click', function() {
    document.querySelector('ul').classList.toggle('hidden');
});
const skillsData = {
    language: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP', 'JAVA', 'C++','DART','KOTLIN','GOLANG'],
    framework: ['LARAVEL', 'LUMEN', 'BOOTSTRAP','NEXT JS','VUE JS','FLUTTER', 'SPRINGBOOT','EXPRESS JS'],
    library: ['REACT', 'TAILWIND','SASS','NUMPY'],
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
            title: 'Contoh project Website 1',
            description: 'Contoh deskripsi project Website 1',
            icon: '/assets/images/projects/project.jpg',
            githubLink: 'https://github.com/username/project-repo1',
            demoLink: 'https://www.example.com'
        },
        {
            title: 'Contoh project Website 2',
            description: 'Contoh deskripsi project Website 2',
            icon: '/assets/images/projects/project.jpg',
            githubLink: 'https://github.com/username/project-repo2',
            demoLink: 'https://www.example.com'
        },
        {
            title: 'Contoh project Website 3',
            description: 'Contoh deskripsi project Website 3',
            icon: '/assets/images/projects/project.jpg',
            githubLink: 'https://github.com/username/project-repo3',
            demoLink: 'https://www.example.com'
        },
        {
            title: 'Contoh project Website 4',
            description: 'Contoh deskripsi project Website 4',
            icon: '/assets/images/projects/project.jpg',
            githubLink: 'https://github.com/username/project-repo4',
            demoLink: 'https://www.example.com'
        },
        {
            title: 'Contoh project Website 5',
            description: 'Contoh deskripsi project Website 5',
            icon: '/assets/images/projects/project.jpg',
            githubLink: 'https://github.com/username/project-repo5',
            demoLink: 'https://www.example.com'
        },
        {
            title: 'Contoh project Website 6',
            description: 'Contoh deskripsi project Website 6',
            icon: '/assets/images/projects/project.jpg',
            githubLink: 'https://github.com/username/project-repo6',
            demoLink: 'https://www.example.com'
        },
    ],
    api: [
        {
            title: 'Contoh project API 1',
            description: 'Contoh deskripsi project API 1',
            icon: '/assets/images/projects/project.jpg',
            githubLink: 'https://github.com/username/project-repo1',
            demoLink: 'https://www.example.com'
        },
        {
            title: 'Contoh project API 2',
            description: 'Contoh deskripsi project API 2',
            icon: '/assets/images/projects/project.jpg',
            githubLink: 'https://github.com/username/project-repo2',
            demoLink: 'https://www.example.com'
        },
        {
            title: 'Contoh project API 3',
            description: 'Contoh deskripsi project API 3',
            icon: '/assets/images/projects/project.jpg',
            githubLink: 'https://github.com/username/project-repo3',
            demoLink: 'https://www.example.com'
        },
        {
            title: 'Contoh project API 4',
            description: 'Contoh deskripsi project API 4',
            icon: '/assets/images/projects/project.jpg',
            githubLink: 'https://github.com/username/project-repo4',
            demoLink: 'https://www.example.com'
        },
        {
            title: 'Contoh project API 5',
            description: 'Contoh deskripsi project API 5',
            icon: '/assets/images/projects/project.jpg',
            githubLink: 'https://github.com/username/project-repo5',
            demoLink: 'https://www.example.com'
        },
        {
            title: 'Contoh project API 6',
            description: 'Contoh deskripsi project API 6',
            icon: '/assets/images/projects/project.jpg',
            githubLink: 'https://github.com/username/project-repo6',
            demoLink: 'https://www.example.com'
        },
    ],
    mobile: [
        {
            title: 'Contoh project Mobile 1',
            description: 'Contoh deskripsi project Mobile 1',
            icon: '/assets/images/projects/project.jpg',
            githubLink: 'https://github.com/username/project-repo1',
            demoLink: 'https://www.example.com'
        },
        {
            title: 'Contoh project Mobile 2',
            description: 'Contoh deskripsi project Mobile 2',
            icon: '/assets/images/projects/project.jpg',
            githubLink: 'https://github.com/username/project-repo2',
            demoLink: 'https://www.example.com'
        },
        {
            title: 'Contoh project Mobile 3',
            description: 'Contoh deskripsi project Mobile 3',
            icon: '/assets/images/projects/project.jpg',
            githubLink: 'https://github.com/username/project-repo3',
            demoLink: 'https://www.example.com'
        },
        {
            title: 'Contoh project Mobile 4',
            description: 'Contoh deskripsi project Mobile 4',
            icon: '/assets/images/projects/project.jpg',
            githubLink: 'https://github.com/username/project-repo4',
            demoLink: 'https://www.example.com'
        },
        {
            title: 'Contoh project Mobile 5',
            description: 'Contoh deskripsi project Mobile 5',
            icon: '/assets/images/projects/project.jpg',
            githubLink: 'https://github.com/username/project-repo5',
            demoLink: 'https://www.example.com'
        },
        {
            title: 'Contoh project Mobile 6',
            description: 'Contoh deskripsi project Mobile 6',
            icon: '/assets/images/projects/project.jpg',
            githubLink: 'https://github.com/username/project-repo6',
            demoLink: 'https://www.example.com'
        },
    ],
    uiux: [
        {
            title: 'Contoh project UI/UX 1',
            description: 'Contoh deskripsi project UI/UX 1',
            icon: '/assets/images/projects/project.jpg',
            githubLink: 'https://github.com/username/project-repo1',
            demoLink: 'https://www.example.com'
        },
        {
            title: 'Contoh project UI/UX 2',
            description: 'Contoh deskripsi project UI/UX 2',
            icon: '/assets/images/projects/project.jpg',
            githubLink: 'https://github.com/username/project-repo2',
            demoLink: 'https://www.example.com'
        },
        {
            title: 'Contoh project UI/UX 3',
            description: 'Contoh deskripsi project UI/UX 3',
            icon: '/assets/images/projects/project.jpg',
            githubLink: 'https://github.com/username/project-repo3',
            demoLink: 'https://www.example.com'
        },
        {
            title: 'Contoh project UI/UX 4',
            description: 'Contoh deskripsi project UI/UX 4',
            icon: '/assets/images/projects/project.jpg',
            githubLink: 'https://github.com/username/project-repo4',
            demoLink: 'https://www.example.com'
        },
        {
            title: 'Contoh project UI/UX 5',
            description: 'Contoh deskripsi project UI/UX 5',
            icon: '/assets/images/projects/project.jpg',
            githubLink: 'https://github.com/username/project-repo5',
            demoLink: 'https://www.example.com'
        },
        {
            title: 'Contoh project UI/UX 6',
            description: 'Contoh deskripsi project UI/UX 6',
            icon: '/assets/images/projects/project.jpg',
            githubLink: 'https://github.com/username/project-repo6',
            demoLink: 'https://www.example.com'
        },
    ],
    cli: [
        {
            title: 'Contoh project CLI 1',
            description: 'Contoh deskripsi project CLI 1',
            icon: '/assets/images/projects/project.jpg',
            githubLink: 'https://github.com/username/project-repo1',
            demoLink: 'https://www.example.com'
        },
        {
            title: 'Contoh project CLI 2',
            description: 'Contoh deskripsi project CLI 2',
            icon: '/assets/images/projects/project.jpg',
            githubLink: 'https://github.com/username/project-repo2',
            demoLink: 'https://www.example.com'
        },
        {
            title: 'Contoh project CLI 3',
            description: 'Contoh deskripsi project CLI 3',
            icon: '/assets/images/projects/project.jpg',
            githubLink: 'https://github.com/username/project-repo3',
            demoLink: 'https://www.example.com'
        },
        {
            title: 'Contoh project CLI 4',
            description: 'Contoh deskripsi project CLI 4',
            icon: '/assets/images/projects/project.jpg',
            githubLink: 'https://github.com/username/project-repo4',
            demoLink: 'https://www.example.com'
        },
        {
            title: 'Contoh project CLI 5',
            description: 'Contoh deskripsi project CLI 5',
            icon: '/assets/images/projects/project.jpg',
            githubLink: 'https://github.com/username/project-repo5',
            demoLink: 'https://www.example.com'
        },
        {
            title: 'Contoh project CLI 6',
            description: 'Contoh deskripsi project CLI 6',
            icon: '/assets/images/projects/project.jpg',
            githubLink: 'https://github.com/username/project-repo6',
            demoLink: 'https://www.example.com'
        },
    ]
};
const projectTabs = document.querySelectorAll('.project-tab');
const projectCardsContainer = document.querySelector('.project-cards');
function generateProjectCards(tab) {
    const tabName = tab.dataset.tab;
    const projects = projectsData[tabName];
    const cardsHTML = projects
        .map(project => `
            <div class="project-card">
                <img src="${project.icon}" alt="${project.title}" class="project-icon">
                <div class="project-title">${project.title}</div>
                <div class="project-description">${project.description}</div>
                <div class="project-icons">
                    <a href="${project.githubLink}" target="_blank">
                        <i class="fab fa-github"></i>
                        Github
                    </a>
                    <a href="${project.demoLink}" class="web" target="_blank">
                        <i class="fa-solid fa-link"></i>
                        Website
                    </a>
                </div>
            </div>
        `)
        .join('');
    projectCardsContainer.innerHTML = cardsHTML;
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