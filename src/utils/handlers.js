import {
    fetchAPI,
    validateUserInput,
    createInitialMapState,
} from './index.js';

import {
    renderResults,
    appendResults, 
    renderEmptyState
} from '../render-functions/index.js'

import { VALIDATION_CONSTANTS } from '../constants.js'

import createMap from '../mapbox/index.js';


let value = "";

export const onSearchClick = (event) => {
    const inputValidation = validateUserInput(value);
    debugger;

    if (value && inputValidation !== VALIDATION_CONSTANTS.INVALID) {
        fetchAPI(value).then((data) => {
            document.querySelector('#search #search-component .search-input').value = "";
            if (data?.status === "success") {
                createMap([data.lon, data.lat]);
                const elements = renderResults(data);
                appendResults(elements)
            } else {
                renderEmptyState();
            }

        })
    } else {
        // triggerValidation(inputValidation);
    }
}


export const onSearchChange = (event) => {
    value = event.target.value;
}