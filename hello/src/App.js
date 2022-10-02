import './App.css';
import { createContext, useState } from 'react';
import Header from './components/Header';
import Employees from './pages/Employees';
import Customers from './pages/Customers';
import Dictionary from './components/Dictionary';
import Definition from './components/Definition';
import NotFound from './components/404';
import NoResults from './components/NoResults';
import Customer from './pages/Customer';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export const LoginContext = createContext();

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={[loggedIn, setLoggedIn]}>
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
            <Route path='*' element={<NotFound />} />
            <Route path='/NoResults' element={<NoResults />} />
          </Routes>
        </Header>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
