import {IP_API_BASE_URL} from '../constants.js'

const fetchIPApi = async (query = '') => {

    try {
        const url = `${IP_API_BASE_URL}/${query}`
        const result = await fetch(url);
        const json = await result.json()
        return json;
        
    } catch (error) {
        
    }
}

export default fetchIPApi;