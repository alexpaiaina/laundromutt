import React, { useEffect } from 'react';
import './App.css';
import { getAllClients } from './services/clients';
import { Route } from 'react-router-dom';
import Layout from ''

function App() {
  useEffect(() => async () => {
    const getClients = async () => {
      cons clientsData = awit getAllClients();
      console.log(clientsData)
    }
    getClients();
  }, []);
  return (
    <Layout>
      <Routh path='/login'>
        <Login path={auth/login} />
      </Routh>
      <Route path='/login' component={Login} />
      <Route path='/login' render={(props) => (
        <Login path={auth/login} {...props} />
      )} />
    </Layout>
  );
}

export default App;
