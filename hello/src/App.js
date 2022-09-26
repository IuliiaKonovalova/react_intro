import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';
import image1 from './images/3d-fluency-businessman-1.png';
import image2 from './images/3d-fluency-businesswoman-1.png';
import image3 from './images/3d-fluency-carrot.png';
import image4 from './images/3d-fluency-cherry.png';
import image5 from './images/3d-fluency-crab.png';
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import Header from './components/Header';
import Employees from './pages/Employees';


function App() {
  return (
    <Header>
    <Employees />
    </Header>
  );
}

export default App;
