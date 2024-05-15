const appendResults = (element) => {
    const parent = document.querySelector('#results-container');
    parent.appendChild(element);
}

export default appendResults;