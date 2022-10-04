import './App.css';
import { createContext, useState, useEffect } from 'react';
import Header from './components/Header';
import Employees from './pages/Employees';
import Customers from './pages/Customers';
import Dictionary from './components/Dictionary';
import Definition from './components/Definition';
import NotFound from './components/404';
import NoResults from './components/NoResults';
import Customer from './pages/Customer';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { baseUrl } from './shared';


export const LoginContext = createContext();

function App() {

  useEffect(() => {
    function refreshToken() {
      if (localStorage.refresh) {
        const url = baseUrl + 'api/token/refresh/';
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            refresh: localStorage.refresh,
          })
        })
          .then(res => res.json())
          .then((data) => {
            console.log(data);
            localStorage.access = data.access;
            localStorage.refresh = data.refresh;
            setLoggedIn(true);
          })
        }
    }
    const minutes = 100 * 60;
    refreshToken();
    setInterval(refreshToken, minutes * 3);
  }, []);
  // check localStorage for an access token --> may be expired
  const [loggedIn, setLoggedIn] = useState(localStorage.access ? true : false);
  // long term goal --> use Refresh token and if is works, stay logged in, otherwise, log out and send to login page

  function changedLoggedIn(value) {
    setLoggedIn(value);
    if (value === false) {
      localStorage.clear();
      // if there are setting for the things like dark mode, clear only access token
    }
  }


  return (
    <LoginContext.Provider value={[loggedIn, changedLoggedIn]}>
      <BrowserRouter>
        <Header>
          <Routes>
            {/* <Route path='/home' element={<Home />} /> */}
            <Route path='/employees' element={<Employees />} />
            <Route path="/dictionary" element={<Dictionary />} />
            <Route path="/definition/:search" element={<Definition />} />
            <Route path='/customers' element={<Customers />} />
            <Route path='/customers/:id' element={<Customer />} />
            <Route path='/404' element={<NotFound />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/NoResults' element={<NoResults />} />
          </Routes>
        </Header>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
