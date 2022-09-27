import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export default function Definition() {

  const [word, setWord] = useState("");
  let { search } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then((response) => {
        console.log(response.status);
        if (response.status === 404) {
          navigate("/404");
        }
        response.json()
      }
      )
      .then((data) => {
        setWord(data[0].meanings);
      }
      );
  }, []);

  return (
    <>
      {word
        ? 
        <>
        {word.map((meaning) => {
          return (
            <p key={uuidv4()}>
              {meaning.partOfSpeech + ": " + meaning.definitions[0].definition}
            </p>
          )
          })}
          </>
      : null}
    </>
  )
}