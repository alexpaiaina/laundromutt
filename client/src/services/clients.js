import api from './api-config'

export const getAllClients = async () => {
  const resp = await api.get('/clients');
  return resp.data;
}

export const getOneClient = async (id) => {
  const resp = await api.get(`/clients/${id}`);
}

export const postClient = async (clientData) => {
  const resp = await api.post('/clients', {client: clientData});
  return resp.data;
}

export const putClient = async (id, clientData) => {
  const resp = await api.put(`/clients/${id}`, {client: clientData});
  return resp.data;
}

export const destroyClient = async (id) => {
  const resp = await api.delete(`/clients/${id}`);
  return resp;
}

export const addDog = async(clientId, DogId) => {
  const resp = await api.put(`/flavors/${DogId}/clients/${clientId}`);
  return resp.data;
}