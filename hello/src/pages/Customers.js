import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddCustomer from "../components/AddCustomer";
import { baseUrl } from "../shared";

export default function Customers() {
  const [customers, setCustomers] = useState([]);
    //const [customers, setCustomers] = useState();
  const [show, setShow] = useState(false);

  function toggleShow() {
      setShow(!show);
  }
  useEffect(() => {
    console.log("Fetching");

    const url = baseUrl + `api/customers/`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.customers);
        setCustomers(data.customers);
      }
      );
  }, []);

  function newCustomer(name, industry) {
    const data = { name: name, industry: industry };
    const url = baseUrl + 'api/customers/';
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
            return response.json();
        })
        .then((data) => {
            toggleShow();
            console.log(data);
            setCustomers([...customers, data.customer]);
        })
        .catch((e) => {
            console.log(e);
        });

  }
  
  return (
    <div className='bg-slate-200 flex pt-8 flex-wrap flex-col min-h-screen'>
      <h1 className='text-4xl text-center'>Customers</h1>

    
      <div className='flex flex-wrap justify-center flex-col mt-8 items-center'>
        {customers ? customers.map((customer) => {
          console.log("Customer", customer);
          return (
            <div className="m-2" key={customer.id}>
                              <Link to={'/customers/' + customer.id}>
                                  <button 
                                    className="flex pt-8 flex-wrap flex-col no-underline bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                                      {customer.name}
                                  </button>
                              </Link>
                          </div>
          )
        }) : null}
      </div>
      <AddCustomer
                newCustomer={newCustomer}
                show={show}
                toggleShow={toggleShow}
            />
    </div>
  );
}