import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [ role, setRole ] = useState();
  const showEmployee = true;
  return (
    <div className="App">
      {showEmployee ? (
        <>
          <input type="text" onChange={
            (e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }

          } />
          <Employee name='Julia' role='intern'/> 
          <Employee  name='Jane' role={role}/> 
          <Employee  name='Robert' /> 
          <Employee /> 
          <Employee /> 
        </>
      ): (
        <p>You cannot see employees</p>
      )}

        

    </div>
  );
}

export default App;
