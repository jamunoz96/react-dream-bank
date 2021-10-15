import API from '../Api';

export const apiLogin = (userData: object) => API.post('/login', userData);
export const apiGetUser = () => API.get('/users/2');