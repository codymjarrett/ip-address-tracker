import { HEADERS } from '../constants.js';
import formatLocation from './formatLocation.js';

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