import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';
import image1 from './images/3d-fluency-businessman-1.png';
import image2 from './images/3d-fluency-businesswoman-1.png';
import image3 from './images/3d-fluency-carrot.png';
import image4 from './images/3d-fluency-cherry.png';
import image5 from './images/3d-fluency-crab.png';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [ role, setRole ] = useState();
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO',
      img: image1
    },
    {
      id: 2,
      name: 'Jane Doe',
      role: 'CTO',
      img: image2
    },
    {
      id: 3,
      name: 'Carrot',
      role: 'CFO',
      img: image3
    },
    {
      id: 4,
      name: 'Cherry',
      role: 'CMO',
      img: image4
    },
    {
      id: 5,
      name: 'Crab',
      role: 'CIO',
      img: image5
    }
  ]);

  const updateEmployee = (id, newName, newRole) => {
    const updatedEmployees = employees.map((employee) => {
      if (employee.id === id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

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
            {employees.map((employee) => {
              return (
                <Employee
                  key={uuidv4()}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
                />
              );
            })}
            </div> 
        </>
      ): (
        <p>You cannot see employees</p>
      )}

        

    </div>
  );
}

export default App;
