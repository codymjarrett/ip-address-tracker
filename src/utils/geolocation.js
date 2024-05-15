import createMap from '../mapbox/index.js';
import { fetchIPApi, renderResults, appendResults, addElementListeners } from './index.js'

export const hasGeolocation = "geolocation" in navigator

export const options = {
  enableHighAccuracy: false,
  maximumAge: 30000,
  timeout: 20000
};


export const successCallback = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  fetchIPApi().then((data) => {
    createMap([longitude, latitude]);
    // enable button
    const button = document.querySelector('#search #search-component button');
    button.disabled = false;
    button.classList.remove('disabled');
    //enable search input
    const searchInput = document.querySelector('#search #search-component .search-input');
    searchInput.value = ""; 
    searchInput.disabled = false;
    addElementListeners();
    //remove blur from map
    const map = document.getElementById('map');
    map.classList.remove('blur');
    const resultsContainer = document.getElementById('results-container');
    const elements = renderResults(data);
    appendResults(elements)
    resultsContainer.classList.add('show');

  });

}

export const errorCallback = (error) => {
  console.error("Error getting geolocation:", error); // need to do something here
}