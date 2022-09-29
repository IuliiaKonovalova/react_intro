import { useEffect, useState } from "react";


export default function Customers() {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    console.log("Fetching");
    fetch('http://localhost:8000/api/customers/')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCustomers(data);
      }
      );
  }, []);
  return (
    <div className='bg-slate-200 flex pt-8 flex-wrap justify-center min-h-screen'>
      <h1>Customers</h1>
    </div>
  );
}