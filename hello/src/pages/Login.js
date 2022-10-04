import { useParams, Link, useNavigate, Navigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { baseUrl } from "../shared";
import { useLocation } from "react-router-dom";
import { LoginContext } from "../App";


export default function Login() {

  const [loggedIn, setLoggedIn] = useContext(LoginContext);

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const location = useLocation();

  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();
    const url = baseUrl + 'api/token/';

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: username, password: password})
      })
      .then((res) => {
        if (!res.ok) {
          throw Error('could not login');
        }
        return res.json();
      })
      .then((data) => {
        localStorage.setItem('access', data.access);
        localStorage.setItem('refresh', data.refresh);
        setLoggedIn(true)
        navigate(location?.state?.previousUrl ? location.state.previousUrl : '/customers');
      })
  }

return (
  <div
    className='App bg-slate-200 min-h-full max-w-120rem flex mt-20 flex-wrap justify-center flex-col content-center'>
      <form
            id='customer'
            onSubmit={login}
            className="bg-white rounded-lg shadow-lg  max-h-full p-10 m-4 max-w-sm w-full flex flex-col text-center justify-center">
            <h1 className="text-2xl font-bold text-gray-900">Login</h1>

        <div
          className="bg-cover bg-center w-60 rounded-full mx-auto mb-3">
            <label className="font-bold" for='username'>Username:</label>
            <input 
              className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type='text'
              value={username}
              id='username'
              onChange={(e) => {
                setUsername(e.target.value);
              }} />
        </div> 
        <div
          className="bg-cover bg-center w-60 rounded-full mx-auto mb-3">
            <label className="font-bold" for='password'>Password:</label>
            <input
              id='password'
              className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type='password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }} />
        </div>
        {/* {changed ? */}
          <div
            className="bg-cover bg-center w-60 rounded-full mx-auto mb-4">
            <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-black focus:shadow-outline"
              onClick={(e) => {

              }}>
                Cancel
            </button>
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-black focus:shadow-outline ml-2"
              // onClick=
              //   {}
              >
                Login
            </button>
          </div>
        {/* : null} */}
        <div className="text-center">
          <p>Don't have an account?</p>
          <Link to='/register'>
            <p className="text-blue-500 hover:text-blue-700">Register</p>
          </Link>
        </div>
      </form>
    </div>
  );
};