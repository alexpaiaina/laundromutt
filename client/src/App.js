import React, { useEffect, useState } from 'react';
import './App.css';
import { getAllClients } from './services/clients';
import Login from './screens/login/Login';
import Header from './hourglass/baselayout/BaseLayout';
import Footer from './hourglass/footer/Footer';
import Home from './screens/home/Home'
import { AZ, ZA, lowestFirst, highestFirst } from "./util/sort";

import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';

import { Route, useHistory, Switch } from 'react-router-dom';
import MainContainer from './containers/MainContainer';

function App() {
  const [queryResults, setQueryResults] = useState([]);
  const [reset, setReset] = useState(false);
  const [queriedDog, setQueriedDog] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData)
    }
    handleVerify();
  }, [])

  const handleSearch = (item, arr) => {
    const queryResult = arr.filter(dog => dog.dog_name.toLowerCase().includes(item.toLowerCase()))
    return (queryResult)
  }
  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/')
  }

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/')
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  }

  const handleSort = (e) => {
    const type = e.target.value;
    console.log(type)
    switch (type) {
      case "name-ascending":
        setQueriedDog(AZ(queryResults));
        setReset(prevReset => !prevReset);
        break;
      case "name-descending":
        setQueriedDog(ZA(queryResults));
        setReset(prevReset => !prevReset);
        break;
    }
  };
  return (
    <div>
    {/* <Layout
      currentUser={currentUser}
      handleLogout={handleLogout}
    > */}
      <Switch>
      <Route exact path="/" render={(props) =>
          <Home
            handleSearch={handleSearch}
            setQueryResults={setQueryResults}
            handleSort={handleSort}
            queriedDog={queriedDog}
            setQueriedDog={setQueriedDog}
          />}
        />
        <Route path='/login'>
          <Login handleLogin={handleLogin} />
        </Route>
        {/* <Route exact path="/clients/:id" render={(props) =>  <ClientDetail handleSearch={handleSearch} setQueryResults={setQueryResults}/>} /> */}
        {/* <Route path='/register'>
          <Register handleRegister={handleRegister} />
        </Route> */}
        <Route path='/'>
          <MainContainer />
        </Route>
      </Switch>

      {/* </Layout> */}
    </div>
  );
}

export default App;
