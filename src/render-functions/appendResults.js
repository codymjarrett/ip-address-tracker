import { resultsContainerElement } from '../dom-references.js';

const appendResults = (element) => {
    resultsContainerElement.replaceChildren(element);
}

export default appendResults;