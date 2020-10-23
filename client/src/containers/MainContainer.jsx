import React, { useState, useEffect } from 'react'
import { getAllDogs } from '../services/dogs';
import { getAllClients, postClient, putClient } from '../services/clients';
import { Route, Switch, useHistory } from 'react-router-dom';
import Dogs from '../screens/dogsearch/DogSearch';
// import Clients from '../screens/Clients';
import ClientCreate from '../components/ClientCreate/ClientCreate';
import ClientEdit from '../components/ClientEdit/ClientEdit';
import ClientDetail from '../components/ClientDetail/ClientDetail';

export default function MainContainer() {
  const [clients, setClients] = useState([]);
  const [dogs, setDogs] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchClients = async () => {
      const clientsData = await getAllClients();
      setClients(clientsData);
    }
    const fetchDogs = async () => {
      const dogsData = await getAllDogs();
      setDogs(dogsData);
    }
    fetchClients();
    fetchDogs();
  }, [])

  const handleClientCreate = async (clientData) => {
    const newClient = await postClient(clientData);
    setClients(prevState => ([...prevState, newClient]));
    history.push('/clients')
  }

  const handleClientEdit = async (id, clientData) => {
    const updatedClient = await putClient(id, clientData);
    setClients(prevState => prevState.map(client => {
      return client.id === Number(id) ? updatedClient : client
    }))
    history.push('/clients')
  }

  return (
    <Switch>
      <Route path='/dogs'>
        <Dogs
          dogs={dogs}
        />
      </Route>
      <Route path='/clients/new'>
        <ClientCreate
          handleClientCreate={handleClientCreate}
        />
      </Route>
      <Route path='/clients/:id/edit'>
        <ClientEdit
          handleClientEdit={handleClientEdit}
          clients={clients}
        />
      </Route>
      <Route path='/clients/:id'>
        <ClientDetail dogs={dogs} />
      </Route>
      {/* <Route path='/clients'>
        <Clients
          clients={clients}
        />
      </Route> */}
    </Switch>
  )
}