import { searchInputElement } from '../dom-references.js';

const renderValidationError = () => {
    searchInputElement.classList.add('error-state');
}

export default renderValidationError;