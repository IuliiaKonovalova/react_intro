import { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
import NotFound from "../components/404";
import NoResults from "../components/NoResults";
import DefinitionSearch from "../components/DefinitionSearch"
import useFetch from "../hooks/UseFetch";

export default function Definition() {
  //const [word, setWord] = useState();
  //const [notFound, setNotFound] = useState(false);
  //const [error, setError] = useState(false);
  let { search } = useParams();

  const location = useLocation();
  const navigate = useNavigate();
  const { request, data: [{ meanings: word }] = [{}], errorStatus } = useFetch(
      'https://api.dictionaryapi.dev/api/v2/entries/en/' + search
  );

  useEffect(() => {
    request();
  }, []);

  if (errorStatus === 404) {
      return (
          <>
              <NotFound />
              <Link to="/dictionary">Search another</Link>
          </>
      );
  }

  if (errorStatus) {
      return (
          <>
              <p>There was a problem with the server, try again later.</p>
              <Link to="/dictionary">Search another</Link>
          </>
      );
  }

  return (
    <>
      {word
        ? 
        <div className="App bg-slate-200 min-h-screen max-w-120rem flex pt-8 flex-wrap flex-column text-center">
            <DefinitionSearch />
          <div className="flex flex-wrap flex-column justify-center mt-8">
        {word.map((meaning) => { 
          return (
            <div className="flex flex-col">
            <p key={uuidv4()}>
              <span className="mr-3 font-black text-stale-600">{meaning.partOfSpeech + ": "}</span> {meaning.definitions[0].definition}
            </p>
            </div>
          )
        })}
        </div>
          </div>
      : null}
    </>
  )
}