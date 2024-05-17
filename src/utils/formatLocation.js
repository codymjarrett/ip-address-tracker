/**
 * formatLocation - function that accepts a region, city, zip and returns a formatted string 
 * @param {string} region
 * @param {string} city
 * @param {number} zip
 * @return {string} A formatted string
 */
const formatLocation = (region, city, zip) => {
    return `${city}, ${region} ${zip}`;
}

export default formatLocation;