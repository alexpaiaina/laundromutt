import api from './api-config';

export const getAllDogs = async () => {
  const resp = await api.get('/dogs');
  return resp.data;
}