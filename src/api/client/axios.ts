import axios from 'axios';
// API consummation
const instance = axios.create({
    baseURL: 'https://www.zippia.com/api/',
});

export { instance as axios }