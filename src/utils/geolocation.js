import createMap from '../mapbox/index.js';
import { fetchAPI, addElementListeners } from './index.js';
import { renderResults, appendResults } from '../render-functions/index.js';

export const hasGeolocation = "geolocation" in navigator

export const options = {
  enableHighAccuracy: false,
  maximumAge: 30000,
  timeout: 20000
};


export const successCallback = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  fetchAPI().then((data) => {
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
    document.getElementById('map').classList.remove('blur');
    const elements = renderResults(data);
    appendResults(elements)
    document.getElementById('results-container').classList.add('show');

  });

}

export const errorCallback = (error) => {
  console.error("Error getting geolocation:", error);
}