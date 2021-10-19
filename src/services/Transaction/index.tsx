import API from '../Api';

export const apiGetTransactions = (id: number, account : number) => API.get(`/v1/login/${id}/account/${account}/transaction`);
export const apiAddTransaction = (id: number, account : number, form : object) => API.post(`/v1/login/${id}/account/${account}/transaction`, form);