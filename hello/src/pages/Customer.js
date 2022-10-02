import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { baseUrl } from "../shared";
import { LoginContext } from "../App";


export default function Customer() {


  const [loggedIn, setLoggedIn] = useContext(LoginContext);

  const { id } = useParams();

  const location = useLocation();

  const navigate = useNavigate();

  const [customer, setCustomer] = useState([]);

  const [tempCustomer, setTempCustomer] = useState()

  const [notFound, setNotFound] = useState(false);

  const [changed, setChanged] = useState(false);

  const [error, setError] = useState();



  useEffect(() => {
    if (!customer?.name) return;
    if (!customer?.industry) return;

    let equal = true;
    if (customer.name !== tempCustomer.name) equal = false;
    if (customer.industry !== tempCustomer.industry) equal = false;

    if (equal) setChanged(false);
  
  });




  useEffect(() => {
    console.log('use effect here for customers details');


    const url = baseUrl + 'api/customers/' + id;

    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('access')
      }
    })
      .then((res) => {
        if (res.status === 404) {
          // navigate('/404');
          setNotFound(true);
        } else if (res.status === 401) {
            setLoggedIn(false);
            navigate('/login', {
            state: {
              previousUrl: location.pathname,
            }
          });
        } else if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json()
      })
      .then((data) => {
        setCustomer(data.customer);
        setTempCustomer(data.customer);
        setError(undefined);
      })
      .catch((err) => {
        setError(err.message);
      })
  }, [id]);

  function updateCustomer(e) {
    e.preventDefault();
    console.log('update customer');
    console.log('OD', id);
    const url = baseUrl + 'api/customers/' + id + '/';

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('access')
      },
      body: JSON.stringify(tempCustomer)
    })
      .then((res) => {
        if (res.status === 401) {
          navigate('/login', {
            state: {
              previousUrl: location.pathname,
            }
          });
        }
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json()
      })
      .then((data) => {
        setCustomer(data.customer);
        setTempCustomer(data.customer);
        setChanged(false);
        setError(undefined);
      })
      .catch((err) => {
        setError(err.message);
      }
      )
  }



  return (
    <>
      {notFound ? <h1>Customer with id {id } not found</h1> : null }
      <div className="App bg-slate-200 min-h-screen  max-w-120rem p-8 flex pt-8 flex-wrap justify-center flex-col content-center">
        {customer?.id ? 
          <form
            id='customer'
            onSubmit={updateCustomer}
            className="bg-white rounded-lg shadow-lg  max-h-full p-10 m-4 max-w-sm w-full flex flex-col text-center justify-center">
            <h1 className="text-2xl font-bold text-gray-900">Edit Customer Details</h1>
            <div
              className="bg-cover bg-center w-60 rounded-full mx-auto mb-2">
                <span className="font-bold">ID:</span> 
                <p 
                  className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  >{tempCustomer.id} </p>
            </div> 
            <div
              className="bg-cover bg-center w-60 rounded-full mx-auto mb-3">
                <label className="font-bold" for='name'>Name:</label>
                <input 
                  className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type='text'
                  value={tempCustomer.name}
                  id='name'
                  onChange={(e) => {
                    setChanged(true);
                    setTempCustomer({...tempCustomer, name: e.target.value});
                  }} />
            </div> 
            <div
              className="bg-cover bg-center w-60 rounded-full mx-auto mb-3">
                <label className="font-bold" for='industry'>Industry:</label>
                <input
                  id='industry'
                  className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type='text'
                  value={tempCustomer.industry}
                  onChange={(e) => {
                    setChanged(true);
                    setTempCustomer({...tempCustomer, industry: e.target.value});

                  }} />
            </div>
            {changed ?
              <div
                className="bg-cover bg-center w-60 rounded-full mx-auto mb-4">
                <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-black focus:shadow-outline"
                  onClick={(e) => {
                    setChanged(false);
                    setTempCustomer({...customer});
                  }}>
                    Cancel
                </button>
                <button
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-black focus:shadow-outline ml-2"
                  onClick=
                    {updateCustomer}
                  >
                    Save
                </button>
              </div>
            : null}
          </form>
        : null}
        <div
          className="bg-cover bg-center w-70 r mx-auto mb-4">
          {customer?.id ? 
            <button
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-black focus:shadow-outline"
              onClick={() => {
                console.log('Delete clicking...');
                const url = baseUrl + 'api/customers/' + id;
                fetch(url, {
                  method: 'DELETE',
                  headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + localStorage.getItem('access')
                  }
                })
                .then((response) => {
                  if (response.status === 401) {
                    navigate('/login');
                  }
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
          : null}
          {error ? <div>{error}</div> : null}
          <Link to="/customers" className=" text-blue hover:text-purple-500 font-bold py-2 px-4 text-center">
            Go Back
          </Link>
        </div>
      </div>
    </>
  )
}