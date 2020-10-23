import api from './api-config';

export const getAllDogs = async () => {
  const resp = await api.get('/dogs');
  return resp.data;
}

export const getOneDog = async (id) => {
  const resp = await api.get(`/dogs/${id}`);
}

export const postDog = async (clientData) => {
  const resp = await api.post('/clients', {dog: dogData});
  return resp.data;
}

export const putDog = async (id, dogData) => {
  const resp = await api.put(`/dogs/${id}`, {dog: dogData});
  return resp.data;
}

export const destroyDog = async (id) => {
  const resp = await api.delete(`/dogs/${id}`);
  return resp;
}