import { useParams, Link, useNavigate, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseUrl } from "../shared";

export default function Login() {
  // const { user } = useAuth();
  const navigate = useNavigate();

function login() {
  const url = baseUrl + 'api/login';

  
}

return (
  <div
    className='App bg-slate-200 min-h-full max-w-120rem flex mt-20 flex-wrap justify-center flex-col content-center'>
<form
            id='customer'
            // onSubmit={}
            className="bg-white rounded-lg shadow-lg  max-h-full p-10 m-4 max-w-sm w-full flex flex-col text-center justify-center">
            <h1 className="text-2xl font-bold text-gray-900">Login</h1>

            <div
              className="bg-cover bg-center w-60 rounded-full mx-auto mb-3">
                <label className="font-bold" for='username'>Username:</label>
                <input 
                  className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type='text'
                  value={''}
                  id='username'
                  onChange={(e) => {

                  }} />
            </div> 
            <div
              className="bg-cover bg-center w-60 rounded-full mx-auto mb-3">
                <label className="font-bold" for='password'>Password:</label>
                <input
                  id='password'
                  className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type='text'
                  value={''}
                  onChange={(e) => {

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
                    Save
                </button>
              </div>
            {/* : null} */}
          </form>
          </div>
                
  );
};