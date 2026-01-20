import { portfolioData } from '../data/data.js';

export function renderProjects(containerId = 'projects-grid') {
    const container = document.getElementById(containerId);
    if (!container) return; // safety check
    container.innerHTML = ''; // clear previous content

    portfolioData.projects.forEach(project => {
        // Project card wrapper
        const card = document.createElement('div');
        card.className = 'project-card';

        // Project title
        const title = document.createElement('h3');
        title.className = 'project-title';
        title.textContent = project.title;

        // Project description
        const description = document.createElement('p');
        description.className = 'project-description';
        description.textContent = project.description;

        // Project tags
        const tagsDiv = document.createElement('div');
        tagsDiv.className = 'project-tags';
        project.technologies.forEach(tech => {
            const span = document.createElement('span');
            span.className = 'project-tag';
            span.textContent = tech;
            tagsDiv.appendChild(span);
        });

        // Project links
        const linksDiv = document.createElement('div');
        linksDiv.className = 'project-links';

        if (project.github) {
            const codeBtn = document.createElement('button');
            codeBtn.className = 'project-link';
            codeBtn.addEventListener('click', () => window.open(project.github, '_blank'));

            const codeIcon = document.createElement('span');
            codeIcon.className = 'material-symbols-outlined';
            codeIcon.style.fontSize = '16px';
            codeIcon.textContent = 'code';

            codeBtn.append(codeIcon, document.createTextNode(' Code'));
            linksDiv.appendChild(codeBtn);
        }

        if (project.demo) {
            const demoBtn = document.createElement('button');
            demoBtn.className = 'project-link';
            demoBtn.addEventListener('click', () => window.open(project.demo, '_blank'));

            const demoIcon = document.createElement('span');
            demoIcon.className = 'material-symbols-outlined';
            demoIcon.style.fontSize = '16px';
            demoIcon.textContent = 'open_in_new';

            demoBtn.append(demoIcon, document.createTextNode(' Demo'));
            linksDiv.appendChild(demoBtn);
        }

        // Assemble card
        card.append(title, description, tagsDiv, linksDiv);
        container.appendChild(card);
    });
}
