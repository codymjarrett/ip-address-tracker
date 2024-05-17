import createMap from '../mapbox/mapbox.js';
import { mapElement } from '../dom-references.js';

import { DEFAULT_COORDINATES } from '../constants.js'

/**
 * createInitialMapState - function that creates the initial map state for the application
 * @returns {Promise}
 */
const createInitialMapState = () => {
  return new Promise((resolve) => {
    createMap(DEFAULT_COORDINATES);
    mapElement.classList.add('blur');
    resolve();
  });
};

export default createInitialMapState;