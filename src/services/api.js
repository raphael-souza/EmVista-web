import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {'X-Custom-Header': 'foobar'},
  // timeout: 1000 tempo máximo de resposta da requisição
});

api.baseURL 
export default api;