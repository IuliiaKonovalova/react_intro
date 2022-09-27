import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
import NotFound from "../components/404";
import NoResults from "../components/NoResults";

export default function Definition() {

  const [word, setWord] = useState("");
  const [notFound, setNotFound] = useState(false);
  let { search } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then((response) => {
        console.log(response.status);
        console.log(response);
        if (response.status === 404) {
          setNotFound(true);
        }
        return response.json();
        // response.json()

      }
      )
      .then((data) => {
        console.log(data);
        setWord(data[0].meanings);
      }
      );
  }, []);

  if (notFound === true) {
    return (
      <>
      <NoResults />
      
      </>
    )
  }

  return (
    <>
      {word
        ? 
        <div className="App bg-slate-200 min-h-screen max-w-120rem flex pt-8 flex-wrap flex-column text-center">
          <Link to ='/dictionary'>Search another word</Link>
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