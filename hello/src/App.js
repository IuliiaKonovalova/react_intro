import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';
import image1 from './images/3d-fluency-businessman-1.png';
import image2 from './images/3d-fluency-businesswoman-1.png';
import image3 from './images/3d-fluency-carrot.png';
import image4 from './images/3d-fluency-cherry.png';
import image5 from './images/3d-fluency-crab.png';

function App() {
  const [ role, setRole ] = useState();
  const showEmployee = true;
  return (
    <div className="App bg-slate-200">
      {showEmployee ? (
        <>
          <input type="text" onChange={
            (e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }

          } />
          <div className="flex flex-wrap justify-center">
            <Employee name='Julia' role='intern' img={image1}/> 
            <Employee  name='Jane' role={role} img={image2}/> 
            <Employee  name='Robert'  img={image3}/> 
            <Employee name='Julia' role='intern' img={image4}/> 
            <Employee  name='Jane' role={role}  img={image5}/> 
            </div> 
        </>
      ): (
        <p>You cannot see employees</p>
      )}

        

    </div>
  );
}

export default App;
