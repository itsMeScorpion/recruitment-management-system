//setting connect to json-server

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3005',
  timeout: 5000,
});

export default instance;
