import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


export default function Customer() {
  const [customer, setCustomer] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    console.log('use effect here for customers details');

    const url = `http://localhost:8000/api/customers/${id}`;

    fetch(url)
      .then((res) => {return res.json()})
      .then((data) => {
        setCustomer(data.customer);
      })
  }, []);
  return (
    <div className="App bg-slate-200 min-h-screen  max-w-120rem p-8 flex pt-8 flex-wrap justify-center">
      {customer ? 
      <>
      {customer.id}
      {customer.name}
      {customer.industry}
      </>

      : <p>Customer not found</p>}
    </div>
  )
}