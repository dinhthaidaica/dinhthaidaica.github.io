import { portfolioData } from '../data/data.js';

export function renderHeaderTabs(containerId = 'header-tabs') {
    const container = document.getElementById(containerId);
    if (!container) return; // safety check
    container.innerHTML = ''; // clear previous tabs

    portfolioData.headerTabs.forEach(tab => {
        // Tab wrapper
        const tabDiv = document.createElement('div');
        tabDiv.className = `tab${tab.active ? ' active' : ''}`;

        // Icon
        const icon = document.createElement('span');
        icon.className = 'material-symbols-outlined';
        icon.style.fontSize = '16px';
        if (tab.active) {
            icon.style.color = 'var(--primary)';
        }
        icon.textContent = tab.icon;

        // Label
        const label = document.createElement('span');
        label.textContent = tab.label;

        // Close button for active tab
        let close = null;
        if (tab.active) {
            close = document.createElement('span');
            close.className = 'close';
            close.textContent = '×';
        }

        // Assemble tab
        tabDiv.append(icon, label);
        if (close) tabDiv.appendChild(close);

        container.appendChild(tabDiv);
    });
}
