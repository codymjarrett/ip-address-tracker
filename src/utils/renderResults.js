import {headers} from '../constants.js';
import {getHeaderData} from './index.js';

const renderResults = (data) => {

    const resultsTemplate = document.getElementById('results-template');
    const tmpl = resultsTemplate.content.cloneNode(true);
    const resultsEl = tmpl.querySelector('.results')
    const elements = headers.map(header => {
        const section = document.createElement('section');
        const labelSpan = document.createElement('span');
        labelSpan.textContent = header;
        labelSpan.classList.add('label')
        section.appendChild(labelSpan);


        const dataSpan = document.createElement('span');
        dataSpan.classList.add('data')
        dataSpan.textContent = getHeaderData(header, data)
        section.appendChild(dataSpan)

        return section


    })

    resultsEl.append(...elements)

    return resultsEl;
}

export default renderResults;