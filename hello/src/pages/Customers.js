import { useEffect, useState } from "react";


export default function Customers() {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    console.log("Fetching");
    fetch('http://localhost:8000/api/customers/')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setCustomers(data.data);
      }
      );
  }, []);
  
  return (
    <div className='bg-slate-200 flex pt-8 flex-wrap flex-col min-h-screen'>
      <h1 className='text-4xl text-center'>Customers</h1>

    
      <div className='flex flex-wrap justify-center flex-col mt-8'>
        {customers ? customers.map((customer) => {
          console.log("Customer", customer);
          return <p className="text-center p-2 mb-2 bg-white">{customer.name}</p>
        }) : null}
      </div>
    </div>
  );
}