import {emptyStateTemplate, resultsContainerElement, mapElement} from '../dom-references.js';

const renderEmptyState = () => {
    const tmpl = emptyStateTemplate.content.cloneNode(true);
    const emptyStateEl = tmpl.querySelector('.empty-state');
    const div = document.createElement('div');
    div.classList.add('empty-state-message-container');
    div.innerHTML = `
    <div class="empty-state-message">No results were found 😢 </div>
    <div class="empty-state-message">Try a different search</div>
    `;
    emptyStateEl.append(div);

    resultsContainerElement.replaceChildren(emptyStateEl);
    mapElement.classList.add('blur');

    return emptyStateEl;

}

export default renderEmptyState;