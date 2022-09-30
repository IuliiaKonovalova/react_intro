import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import Header from './components/Header';
import Employees from './pages/Employees';
import Customers from './pages/Customers';
import Dictionary from './components/Dictionary';
import Definition from './components/Definition';
import NotFound from './components/404';
import NoResults from './components/NoResults';
import Customer from './pages/Customer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          {/* <Route path='/home' element={<Home />} /> */}
          <Route path='/employees' element={<Employees />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/definition/:search" element={<Definition />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/customer/:id' element={<Customer />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/NoResults' element={<NoResults />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
