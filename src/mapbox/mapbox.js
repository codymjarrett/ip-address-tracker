mapboxgl.accessToken = 'pk.eyJ1IjoiY29keW1qYXJyZXR0IiwiYSI6ImNsdzczNHNqNDBndWoya280c2Q3Nnlra2kifQ.uNDJqVBLFPHxRwK8zt519w';

/**
 * createMapWithCoordinates - function that accepts coordinates which is a tuple of 2 numbers [longitude, latitude] and returns a new map instance
 * @param {number[]} coordinates
 */
export const createMapWithCoordinates = (coordinates) => {
    return new mapboxgl.Map({
        container: 'map', // container ID
        center: coordinates, // starting position [lng, lat]
        zoom: 12 // starting zoom
    })
}

export const createMapWithMarker = (map, coordinates) => {
    const marker = new mapboxgl.Marker({
        color: '#FFFFF',
        draggable: true,
    }).setLngLat(coordinates).addTo(map)

    return marker;
}


/**
 * createMap - function that accepts coordinates which is a tuple of 2 numbers [longitude, latitude] and returns a new map instance with a marker
 * @param {number[]} coordinates
 */
const createMap = (coordinates) => {
    const map = createMapWithCoordinates(coordinates)

    const mapWithMarker = createMapWithMarker(map, coordinates)

    return mapWithMarker;
}

export default createMap;


