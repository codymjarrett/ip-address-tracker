import {HEADERS} from '../constants.js';
import formatLocation from './formatLocation.js'

const getHeaderData = (header, data) => {
    const {timezone, zip, region, city, isp, query} = data;

    switch(header){
        case HEADERS.IP_ADDRESS: {
            return data['query']
        }
        case HEADERS.LOCATION: {
            return formatLocation(region, city, zip)
        }
        case HEADERS.TIMEZONE: {
            return data['timezone']
        }
        case HEADERS.ISP: {
            return data['isp']
        }
        default: {
            return ''
        }
    }

}

export default getHeaderData;