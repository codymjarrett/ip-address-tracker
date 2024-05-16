import {
    onSearchClick, 
    onSearchChange
} from './index.js';

import {searchInputElement, searchButtonElement} from '../dom-references.js';

const addElementListeners = () => {
    searchButtonElement.addEventListener('click', onSearchClick)
    searchInputElement.addEventListener('input', onSearchChange)

}

export default addElementListeners;