import createMap from '../mapbox/index.js';
import { fetchIPApi, renderResults, appendResults } from './index.js'

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