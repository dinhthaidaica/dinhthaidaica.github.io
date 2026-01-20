import { renderHero } from './render/hero.js';
import { renderFloatingActions } from './render/floatingActions.js';
import { renderHeaderTabs } from './render/headerTabs.js';
import { renderTimeline } from './render/timeline.js';
import { renderSkills } from './render/skills.js';
import { renderProjects } from './render/projects.js';
import { renderFooter } from './render/footer.js';

function init() {
  renderHero();
  renderFloatingActions();
  renderHeaderTabs();
  renderTimeline();
  renderSkills();
  renderProjects();
  renderFooter();
}

init();
