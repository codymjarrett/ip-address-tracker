import { IP_API_BASE_URL } from '../constants.js';


const buildUrl = (query = "") => {
    const fields = ['query', 'status', 'region', 'city', 'zip', 'lat', 'lon','timezone', 'isp'];
    let url = `${IP_API_BASE_URL}`;

    if (query) {
        url = `${url}/${query}/`
    }

    return `${url}/?fields=${fields.join(',')}`

}

const fetchIPApi = async (query = '') => {
    try {
        const url = buildUrl(query);
        const result = await fetch(url);
        const json = await result.json()
        return json;

    } catch (error) {
        console.error(error)

    }
}

export default fetchIPApi;