import { portfolioData } from '../data/data.js';

export function renderFooter(containerId = 'footer') {
    const container = document.getElementById(containerId);
    if (!container) return; // safety check
    container.innerHTML = ''; // clear any previous content

    const footer = portfolioData.footer;

    // Footer wrapper
    const footerContent = document.createElement('div');
    footerContent.className = 'footer-content';

    // Copyright
    const copyright = document.createElement('p');
    copyright.textContent = footer.copyright;

    // Links container
    const linksContainer = document.createElement('div');
    linksContainer.className = 'footer-links';

    footer.links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.target = '_blank';
        a.className = 'footer-link';
        a.setAttribute('aria-label', link.label);

        // Icon
        const icon = document.createElement('span');
        icon.className = 'material-symbols-outlined';
        icon.style.fontSize = '18px';
        icon.textContent = link.icon;

        // Label text node
        const label = document.createTextNode(` ${link.label}`);

        a.appendChild(icon);
        a.appendChild(label);
        linksContainer.appendChild(a);
    });

    // Assemble footer
    footerContent.appendChild(copyright);
    footerContent.appendChild(linksContainer);
    container.appendChild(footerContent);
}
