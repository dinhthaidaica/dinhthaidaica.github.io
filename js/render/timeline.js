import { portfolioData } from '../data/data.js';

export function renderTimeline(containerId = 'timeline-container') {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = ''; // clear previous timeline

    const allItems = [...portfolioData.timeline, ...portfolioData.education];

    allItems.forEach((item, index) => {
        let element;

        if (item.type === 'project' && item.featured) {
            element = createFeaturedProject(item);
        } else {
            element = createTimelineItem(item, index);
        }

        container.appendChild(element);
    });
}

// --------------------
// Regular timeline item
// --------------------
function createTimelineItem(item, index) {
    const side = item.side || (index % 2 === 0 ? 'right' : 'left');

    // Timeline item wrapper
    const itemDiv = document.createElement('div');
    itemDiv.className = `timeline-item ${side}`;

    // Spacer / date
    const spacer = document.createElement('div');
    spacer.className = 'timeline-spacer';
    const dateSpan = document.createElement('span');
    dateSpan.className = 'timeline-date';
    dateSpan.textContent = item.date;
    spacer.appendChild(dateSpan);

    // Node
    const node = document.createElement('div');
    node.className = 'timeline-node';

    // Card wrapper
    const cardWrapper = document.createElement('div');
    cardWrapper.className = 'timeline-card-wrapper';

    // Card
    const card = document.createElement('div');
    card.className = `timeline-card${item.link ? ' clickable-card' : ''}`;
    if (item.link) {
        card.addEventListener('click', () => window.open(item.link, '_blank'));
    }

    const content = document.createElement('div');
    content.className = 'card-content';

    // Image
    if (item.image) {
        const imgWrapper = document.createElement('div');
        imgWrapper.className = 'card-image';
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title;
        imgWrapper.appendChild(img);
        content.appendChild(imgWrapper);
    }

    // Text section
    const textDiv = document.createElement('div');
    textDiv.style.flex = '1';

    const title = document.createElement('h3');
    title.className = 'card-title';
    title.textContent = item.title;

    const company = document.createElement('p');
    company.className = 'card-company';
    company.textContent = item.company || '';

    // Description
    const descDiv = document.createElement('div');
    descDiv.className = 'card-description';

    if (Array.isArray(item.description)) {
        const ul = document.createElement('ul');
        item.description.forEach(line => {
            const li = document.createElement('li');
            li.textContent = line;
            ul.appendChild(li);
        });
        descDiv.appendChild(ul);
    } else {
        const p = document.createElement('p');
        p.textContent = item.description;
        descDiv.appendChild(p);
    }

    // Tags
    const tagsDiv = document.createElement('div');
    tagsDiv.className = 'card-tags';
    item.technologies?.forEach(tech => {
        const span = document.createElement('span');
        span.className = 'card-tag';
        span.textContent = tech;
        tagsDiv.appendChild(span);
    });

    // Assemble
    textDiv.append(title, company, descDiv, tagsDiv);
    content.appendChild(textDiv);
    card.appendChild(content);
    cardWrapper.appendChild(card);
    itemDiv.append(spacer, node, cardWrapper);

    return itemDiv;
}

// --------------------
// Featured project
// --------------------
function createFeaturedProject(item) {
    const wrapper = document.createElement('div');
    wrapper.className = 'featured-project';

    // Line
    const line = document.createElement('div');
    line.className = 'featured-line';

    // Card
    const card = document.createElement('div');
    card.className = 'featured-card';

    // Badge
    const badge = document.createElement('div');
    badge.className = 'featured-badge';
    badge.textContent = 'FEATURED PROJECT';

    // Content
    const content = document.createElement('div');
    content.className = 'featured-content';

    // Icon
    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'featured-icon';
    const icon = document.createElement('span');
    icon.className = 'material-symbols-outlined';
    icon.textContent = 'hub';
    iconWrapper.appendChild(icon);

    // Info
    const info = document.createElement('div');
    info.className = 'featured-info';

    const title = document.createElement('h3');
    title.className = 'featured-title';
    title.textContent = item.title;

    const subtitle = document.createElement('p');
    subtitle.className = 'featured-subtitle';
    subtitle.textContent = 'Featured Project';

    const desc = document.createElement('p');
    desc.className = 'featured-description';
    desc.textContent = item.description;

    // Platforms
    const platformsDiv = document.createElement('div');
    platformsDiv.className = 'featured-platforms';
    item.platforms?.forEach(platform => {
        const platformDiv = document.createElement('div');
        platformDiv.className = 'platform-tag';

        const icon = document.createElement('span');
        icon.className = 'material-symbols-outlined';
        icon.style.fontSize = '14px';
        icon.textContent = 'devices';

        platformDiv.append(icon, document.createTextNode(` ${platform}`));
        platformsDiv.appendChild(platformDiv);
    });

    info.append(title, subtitle, desc, platformsDiv);

    // Actions
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'featured-actions';

    if (item.githubLink) {
        const btn = document.createElement('button');
        btn.className = 'icon-btn';
        btn.title = 'View Code';
        btn.addEventListener('click', () => window.open(item.githubLink, '_blank'));

        const icon = document.createElement('span');
        icon.className = 'material-symbols-outlined';
        icon.style.fontSize = '0.875rem';
        icon.textContent = 'code';

        btn.appendChild(icon);
        actionsDiv.appendChild(btn);
    }

    if (item.demoLink) {
        const btn = document.createElement('button');
        btn.className = 'icon-btn';
        btn.title = 'Live Demo';
        btn.addEventListener('click', () => window.open(item.demoLink, '_blank'));

        const icon = document.createElement('span');
        icon.className = 'material-symbols-outlined';
        icon.style.fontSize = '0.875rem';
        icon.textContent = 'play_arrow';

        btn.appendChild(icon);
        actionsDiv.appendChild(btn);
    }

    // Assemble featured card
    content.append(iconWrapper, info, actionsDiv);
    card.append(badge, content);
    wrapper.append(line, card);

    return wrapper;
}
