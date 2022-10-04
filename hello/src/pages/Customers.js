import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddCustomer from "../components/AddCustomer";
import { baseUrl } from "../shared";
import useFetch from "../hooks/UseFetch";


export default function Customers() {

  const [show, setShow] = useState(false);

  function toggleShow() {
      setShow(!show);
  }

  const url = baseUrl + 'api/customers/';

  const { request, appendData, data: { customers } = {}, errorStatus } = useFetch(url, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('access'),
    },
  });

  useEffect(() => {
    console.log("Fetching");

    request();
  }, []);

  function newCustomer(name, industry) {
    appendData({ name: name, industry: industry });
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