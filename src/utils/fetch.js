import { IP_API_BASE_URL } from '../constants.js';


const buildUrl = (query = "") => {
    const fields = ['query', 'status', 'region', 'city', 'zip', 'lat', 'lon','timezone', 'isp'];
    const url = query ? `${IP_API_BASE_URL}/${query}` : IP_API_BASE_URL;
    
    return `${url}?fields=${fields.join(',')}`;
}

const fetchAPI = async (query = '') => {
    try {
        const url = buildUrl(query);
        const result = await fetch(url);
        return await result.json();
    } catch (error) {
        console.error(error);
    }
};

export default fetchAPI;