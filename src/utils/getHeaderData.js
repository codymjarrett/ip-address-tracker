import { HEADERS } from '../constants.js';
import formatLocation from './formatLocation.js';

/**
 * getHeaderData - function that accepts a header string and data payload and keys off of the data based on the header string
 * @param {string} header
 * @param {*} data
 * @return {string} 
 */
const getHeaderData = (header, data) => {
    const { timezone, zip, region, city, isp, query } = data;

    switch (header) {
        case HEADERS.IP_ADDRESS: {
            return query;
        }
        case HEADERS.LOCATION: {
            return formatLocation(region, city, zip)
        }
        case HEADERS.TIMEZONE: {
            return timezone;
        }
        case HEADERS.ISP: {
            return isp;
        }
        default: {
            return ''
        }
    }
};

export default getHeaderData;