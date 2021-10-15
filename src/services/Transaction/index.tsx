import API from '../Api';

export const apiGetTransactions = () => API.get('/unknown?delay=3&per_page=10');