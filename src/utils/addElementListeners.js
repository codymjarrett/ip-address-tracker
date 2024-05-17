import {
    onSearch,
    onSearchChange
} from './index.js';

import { searchInputElement, searchButtonElement } from '../dom-references.js';


/**
 * addElementListeners - function that adds event listeners to the search button and search input
 */
const addElementListeners = () => {
    searchButtonElement.addEventListener('click', onSearch);
    searchInputElement.addEventListener('keypress', onSearchChange);
};

export default addElementListeners;