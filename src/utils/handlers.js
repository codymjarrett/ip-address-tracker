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
} from '../render-functions/index.js';

import {searchInputElement} from '../dom-references.js';

import { VALIDATION_CONSTANTS } from '../constants.js'

import createMap from '../mapbox/index.js';


let value = "";

export const onSearchClick = (event) => {
    const inputValidation = validateUserInput(value);

    if (value && inputValidation !== VALIDATION_CONSTANTS.INVALID) {
        if (searchInputElement.classList.contains('error-state')) {
            searchInputElement.classList.remove('error-state');
        }

        fetchAPI(value).then((data) => {
            searchInputElement.value = "";
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