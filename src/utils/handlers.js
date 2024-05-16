import {
    fetchAPI,
    validateUserInput,
    createInitialMapState,
} from './index.js';

import {
    renderResults,
    appendResults,
    renderEmptyState,
    renderValidationError
} from '../render-functions/index.js'

import { VALIDATION_CONSTANTS } from '../constants.js'

import createMap from '../mapbox/index.js';


let value = "";

export const onSearchClick = (event) => {
    const inputValidation = validateUserInput(value);

    const searchInput = document.querySelector('#search-component .search-input');

    if (value && inputValidation !== VALIDATION_CONSTANTS.INVALID) {
        if (searchInput.classList.contains('error-state')) {
            searchInput.classList.remove('error-state');
        }

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
        renderValidationError();
    }
}


export const onSearchChange = (event) => {
    value = event.target.value;
}