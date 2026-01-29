import { portfolioData } from '../data/data.js';

export function renderHero(containerId = 'hero-section') {
    const container = document.getElementById(containerId);
    if (!container) return; // safety check
    container.innerHTML = ''; // clear existing content

    const hero = portfolioData.hero;

    // -----------------------
    // Comment block
    // -----------------------
    const commentP = document.createElement('p');
    commentP.className = 'code-comment';
    commentP.style.marginBottom = '0.5rem';

    // Build comment lines
    const commentLines = hero.comment.split('\n').map(line => `* ${line}<br/>`).join('\n                    ');

    commentP.innerHTML = `/** <br/> ${commentLines} */`;

    // -----------------------
    // Hero title: fun main() {
    // -----------------------
    const heroTitleOpen = document.createElement('h1');
    heroTitleOpen.className = 'hero-title';
    heroTitleOpen.innerHTML = `<span class="code-keyword">fun</span> <span class="code-function">main</span>() {`;

    // -----------------------
    // Hero code block
    // -----------------------
    const codeBlock = document.createElement('div');
    codeBlock.className = 'hero-code-block';

    // First row: val developer = Developer(
    const firstRow = document.createElement('div');
    firstRow.style.display = 'flex';
    firstRow.style.flexWrap = 'wrap';
    firstRow.style.alignItems = 'baseline';
    firstRow.style.gap = '0.75rem';
    firstRow.style.fontSize = '1.25rem';
    firstRow.style.marginBottom = '1rem';

    const valSpan = document.createElement('span');
    valSpan.className = 'code-keyword';
    valSpan.textContent = 'val';

    const devNameSpan = document.createElement('span');
    devNameSpan.style.color = '#d8b4fe';
    devNameSpan.textContent = 'developer';

    const equalSpan = document.createElement('span');
    equalSpan.style.color = 'white';
    equalSpan.textContent = '=';

    const devCtorSpan = document.createElement('span');
    devCtorSpan.style.color = 'white';
    devCtorSpan.textContent = 'Developer(';

    firstRow.append(valSpan, devNameSpan, equalSpan, devCtorSpan);

    // -----------------------
    // Hero params
    // -----------------------
    const paramsDiv = document.createElement('div');
    paramsDiv.className = 'hero-params';

    const nameP = document.createElement('p');
    nameP.innerHTML = `name = <span class="code-string">"${hero.name}"</span>,`;

    const roleP = document.createElement('p');
    roleP.innerHTML = `role = <span class="code-string">"${hero.role}"</span>,`;

    const specialtiesP = document.createElement('p');
    specialtiesP.innerHTML = `specialties = <span class="code-function">listOf</span>(${hero.specialties.map(s => `<span class="code-string">"${s}"</span>`).join(', ')})`;

    const interestedIn = document.createElement('p');
    interestedIn.innerHTML = `interestedIn = <span class="code-function">listOf</span>(${hero.interestedIn.map(s => `<span class="code-string">"${s}"</span>`).join(', ')})`;

    const handsOnExperience = document.createElement('p');
    handsOnExperience.innerHTML = `handsOnExperience = <span class="code-function">listOf</span>(${hero.handsOnExperience.map(s => `<span class="code-string">"${s}"</span>`).join(', ')})`;

    paramsDiv.append(nameP, roleP, specialtiesP, interestedIn, handsOnExperience);

    // -----------------------
    // Closing parenthesis
    // -----------------------
    const closingParen = document.createElement('div');
    closingParen.style.fontSize = '1.25rem';
    closingParen.style.color = 'white';
    closingParen.style.marginTop = '0.5rem';
    closingParen.textContent = ')';

    // -----------------------
    // buildPortfolio() call
    // -----------------------
    const callDiv = document.createElement('div');
    callDiv.className = 'hero-call';
    callDiv.style.fontSize = '1.25rem';
    callDiv.innerHTML = `<span class="code-function">developer</span>.<span class="code-function">buildPortfolio</span>()`;

    // -----------------------
    // Closing hero title: }
    // -----------------------
    const heroTitleClose = document.createElement('h1');
    heroTitleClose.className = 'hero-title';
    heroTitleClose.style.marginTop = '1rem';
    heroTitleClose.textContent = '}';

    // -----------------------
    // Assemble all together
    // -----------------------
    codeBlock.append(firstRow, paramsDiv, closingParen, callDiv);
    container.append(commentP, heroTitleOpen, codeBlock, heroTitleClose);
}
