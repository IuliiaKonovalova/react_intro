import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


export default function Customer() {
  const [customer, setCustomer] = useState([]);
  const [NotFound, setNotFound] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    console.log('use effect here for customers details');

    const url = `http://localhost:8000/api/customers/${id}`;

    fetch(url)
      .then((res) => {
        if (res.status === 404) {
          navigate('/404');
        } else if (res.status === 405) {
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
    </>

  )
}