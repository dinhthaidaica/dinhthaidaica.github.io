import { portfolioData } from '../data/data.js';

export function renderFloatingActions(containerId = 'floating-actions') {
    const container = document.getElementById(containerId);
    if (!container) return; // safety check
    container.innerHTML = ''; // clear previous content

    portfolioData.floatingActions.forEach(action => {
        // Create the wrapper
        const group = document.createElement('div');
        group.className = 'action-btn-group';

        // Create the label
        const label = document.createElement('span');
        label.className = 'action-label';
        label.textContent = action.label;

        // Create the button
        const button = document.createElement('button');
        button.className = `action-btn ${action.primary ? 'primary' : 'secondary'}`;
        button.setAttribute('aria-label', action.label);

        // Attach click event if link exists
        if (action.link) {
            button.addEventListener('click', () => {
                window.open(action.link, '_blank');
            });
        } else {
            button.disabled = true; // visually indicate non-clickable
        }

        // Create the icon
        const icon = document.createElement('span');
        icon.className = 'material-symbols-outlined';
        icon.textContent = action.icon;

        // Assemble
        button.appendChild(icon);
        group.append(label, button);
        container.appendChild(group);
    });
}
