import API from '../Api';

export const apiLogin = (userData: object) => API.post('/v1/login', userData);
export const apiGetUser = () => API.get('/users/2');