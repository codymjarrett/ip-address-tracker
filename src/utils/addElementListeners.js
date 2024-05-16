import {
    onSearchClick, 
    onSearchChange
} from './index.js'

const addElementListeners = () => {
    document.querySelector('#search #search-component button').addEventListener('click', onSearchClick)
    document.querySelector('#search #search-component .search-input').addEventListener('input', onSearchChange)

}

export default addElementListeners;