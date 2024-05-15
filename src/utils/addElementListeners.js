import { 
    fetchIPApi, 
    renderResults, 
    appendResults, 
    validateUserInput, 
    createInitialMapState,
    renderEmptyState
} from './index.js'
import createMap from '../mapbox/index.js';

let value = "";

const resetValue = () => {
    value = "";
}

// move these to another file

const onClick = (event) => {
    const inputValidation =validateUserInput(value);

    console.log(inputValidation)
    if (value && inputValidation !== 'Invalid input') {
        fetchIPApi(value).then((data) => {
            document.querySelector('#search #search-component .search-input').value = ""; 
            if (data?.status === "success") {
                createMap([data.lon, data.lat]);
                const elements = renderResults(data);
                appendResults(elements)
            } else {
                // createInitialMapState().then(() => {
                    renderEmptyState();
                    //create empty state
                    // resultsContainer.textContent = 'no data'
                    // clear input

                // })
            }

        })
    } else {
        // triggerValidation(inputValidation);
    }
}
const onChange = (event) => {
    value = event.target.value;
    console.log({ value })
}


const addElementListeners = () => {
    const button = document.querySelector('#search #search-component button');
    const searchInput = document.querySelector('#search #search-component .search-input');

    button.addEventListener('click', onClick)
    searchInput.addEventListener('input', onChange)

}

export default addElementListeners;