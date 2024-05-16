import createMap from '../mapbox/mapbox.js'

import { DEFAULT_COORDINATES } from '../constants.js'

const createInitialMapState  = () => {
  return new Promise((resolve) => {
    createMap(DEFAULT_COORDINATES);
    document.getElementById('map').classList.add('blur');
    resolve();
  });
};

export default createInitialMapState;