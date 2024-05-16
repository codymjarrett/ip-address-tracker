import createMap from '../mapbox/mapbox.js';
import { mapElement } from '../dom-references.js';

import { DEFAULT_COORDINATES } from '../constants.js'

const createInitialMapState = () => {
  return new Promise((resolve) => {
    createMap(DEFAULT_COORDINATES);
    mapElement.classList.add('blur');
    resolve();
  });
};

export default createInitialMapState;