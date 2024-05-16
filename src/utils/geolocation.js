import createMap from '../mapbox/index.js';
import { fetchAPI, addElementListeners } from './index.js';
import { renderResults, appendResults } from '../render-functions/index.js';
import { searchButtonElement, searchInputElement, mapElement, resultsContainerElement } from '../dom-references.js';

export const hasGeolocation = "geolocation" in navigator;

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
    searchButtonElement.disabled = false;
    searchButtonElement.classList.remove('disabled');
    //enable search input
    searchInputElement.value = "";
    searchInputElement.disabled = false;
    addElementListeners();
    //remove blur from map
    mapElement.classList.remove('blur');
    const elements = renderResults(data);
    appendResults(elements);
    resultsContainerElement.classList.add('show');

  });

}

export const errorCallback = (error) => {
  console.error("Error getting geolocation:", error);
}