const appendResults = (element) => {
    const parent = document.querySelector('#results-container');
    parent.replaceChildren(element);
}

export default appendResults;