import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { getAllClients } from './services/clients';

function App() {
  useEffect(() => async () => {
    const getClients = async () => {
      cons clientsData = awit getAllClients();
      console.log(clientsData)
    }
    getClients();
  }, []);
  return (
    <div className="App">

    </div>
  );
}

export default App;
