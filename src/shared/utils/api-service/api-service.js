import axios from 'axios'

axios.defaults.baseURL = 'https://api.hopperhock.com/';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['x-api-key'] = 'qTkDxFWxbvXY0p2jtovEahIXNZJGOf0aAhBb95f9';

export default {
    get: (url) =>
        axios.get(`${url}`),
    post: (url, data) =>
        axios.post(`${url}`, JSON.stringify(data)) 
}

