import axios from 'axios'
import {BASE_HOPPERHOCK_URL} from 'shared/utils/api-service/api-urls';

axios.defaults.baseURL = BASE_HOPPERHOCK_URL;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['x-api-key'] = process.env.NEXT_PUBLIC_HOPPERHOCK_API_KEY;

export default {
    get: (url) =>
        axios.get(`${url}`),
    post: (url, data) =>
        axios.post(`${url}`, JSON.stringify(data)) 
}

