const renderEmptyState = () => {
    const emptyStateTemplate = document.getElementById('empty-state-template');
    const tmpl = emptyStateTemplate.content.cloneNode(true);
    const emptyStateEl = tmpl.querySelector('.empty-state');
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="empty-state-message">No results were found 😢 </div>
    <div class="empty-state-message">Try a different search</div>
    `
    emptyStateEl.append(div);

    document.getElementById('results-container').replaceChildren(emptyStateEl);
    document.getElementById('map').classList.add('blur');

    return emptyStateEl;

}

export default renderEmptyState;