import { headers } from '../constants.js';
import { getHeaderData } from '../utils/index.js';
import { resultsTemplate } from '../dom-references.js';

const renderResults = (data) => {
    const tmpl = resultsTemplate.content.cloneNode(true);
    const resultsEl = tmpl.querySelector('.results');
    const elements = headers.map((header, index) => {
        const section = document.createElement('section');
        const labelSpan = document.createElement('span');
        labelSpan.textContent = header;
        labelSpan.classList.add('label');
        section.appendChild(labelSpan);

        const dataSpan = document.createElement('span');
        dataSpan.classList.add('data');
        dataSpan.textContent = getHeaderData(header, data);
        section.appendChild(dataSpan);

        if (index < headers.length - 1) {
            section.classList.add('divider');
        }

        return section;
    })

    resultsEl.append(...elements);

    return resultsEl;
}

export default renderResults;