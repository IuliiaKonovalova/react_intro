import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseUrl } from "../shared";


export default function Customer() {
  const [customer, setCustomer] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    console.log('use effect here for customers details');


    const url = baseUrl + 'api/customers/' + id;

    fetch(url)
      .then((res) => {
        if (res.status === 404) {
          // navigate('/404');
          setNotFound(true);
        } else if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json()
      })
      .then((data) => {
        setCustomer(data.customer);
      })
  }, []);
  return (
    <>
      {notFound ? <h1>Customer with id {id } not found</h1> : null }
      <div className="App bg-slate-200 min-h-screen  max-w-120rem p-8 flex pt-8 flex-wrap justify-center flex-col content-center">
        {customer?.id ? 
          <div className="bg-white rounded-lg shadow-lg  max-h-full p-10 m-4 max-w-sm w-full flex flex-col text-center justify-center">
            <div
              className="bg-cover bg-center w-60 rounded-full mx-auto mb-3">
                <span className="font-bold">ID:</span> 
                <input 
                  className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type='text'
                  value={customer.id} />
            </div> 
            <div
              className="bg-cover bg-center w-60 rounded-full mx-auto mb-4">
                <span className="font-bold">Name:</span>
                <input 
                  className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type='text'
                  value={customer.name} />
            </div> 
            <div
              className="bg-cover bg-center w-60 rounded-full mx-auto mb-3">
                <span className="font-bold">Industry:</span>
                <input
                  className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type='text'
                  value={customer.name} />
            </div>
          </div>
        : null}
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            console.log('Delete clicking...');
            const url = baseUrl + 'api/customers/' + id;
            fetch(url, {method: 'DELETE', headers: {
              'Content-Type': 'application/json'
            }}).then((response) => {
              if (!response.ok) {
                throw Error('Something went wrong! Could not delete the data for that resource');
              }
              // assume thing went well
              navigate('/customers');
            }).catch((error) => {
              console.log(error);
            }
            );

          }}
        >
          Delete
        </button>

        <Link to="/customers" className=" text-blue hover:text-purple-500 font-bold py-2 px-4 rounded text-center">
          Go Back
        </Link>
      </div>
    </>

  )
}