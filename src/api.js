import axios from 'axios';

const API = axios.create({ baseUrl: 'http://192.168.224.84:8080/api/' });
API.defaults.baseURL = 'http://192.168.224.84:8080/api/';
export default API;
