import { portfolioData } from '../data/data.js';

export function renderSkills(containerId = 'skills-grid') {
    const container = document.getElementById(containerId);
    if (!container) return; // safety check
    container.innerHTML = ''; // clear existing content

    portfolioData.skills.forEach(skill => {
        // Card wrapper
        const card = document.createElement('div');
        card.className = `skill-card border-${skill.color.replace('code-', '')}${skill.link ? ' clickable-card' : ''}`;

        // Click event if link exists
        if (skill.link) {
            card.addEventListener('click', () => window.open(skill.link, '_blank'));
        }

        // Header
        const header = document.createElement('div');
        header.className = 'skill-header';

        const icon = document.createElement('span');
        icon.className = 'material-symbols-outlined';
        icon.style.color = `var(--${skill.color})`;
        icon.textContent = skill.icon;

        const title = document.createElement('h3');
        title.style.fontWeight = '700';
        title.style.fontSize = '1.125rem';
        title.style.color = `var(--${skill.color})`;
        title.style.margin = '0';
        title.textContent = skill.category;

        header.append(icon, title);

        // Skill items
        const itemsDiv = document.createElement('div');
        itemsDiv.className = 'skill-items';

        skill.items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'skill-item';

            const nameSpan = document.createElement('span');
            nameSpan.style.color = 'white';
            nameSpan.textContent = item.name;

            const levelSpan = document.createElement('span');
            levelSpan.className = `skill-level ${item.level.toLowerCase()}`;
            levelSpan.textContent = item.level;

            itemDiv.append(nameSpan, levelSpan);
            itemsDiv.appendChild(itemDiv);
        });

        // Assemble card
        card.append(header, itemsDiv);
        container.appendChild(card);
    });
}
