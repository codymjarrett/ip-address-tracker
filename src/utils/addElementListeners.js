import {
    onSearch,
    onSearchChange
} from './index.js';

import { searchInputElement, searchButtonElement } from '../dom-references.js';

const addElementListeners = () => {
    searchButtonElement.addEventListener('click', onSearch);
    searchInputElement.addEventListener('keypress', onSearchChange);
};

export default addElementListeners;