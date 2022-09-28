import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DefinitionSearch() {
  const [word, setWord] = useState("");
  const navigate = useNavigate();


  return (

      <form
        className="flex justify-center space-x-2 max-w-md mx-auto rounded-lg shadow-lg"
        onSubmit={() => {
          navigate(`/definition/${word}`);
        }}>
        <input
          className="rounded-lg border-2 border-gray-600 p-2 min-w-0 w-full"
          placeholder="Search for a word"
          type="text"
          onChange={(e) => {
            setWord(e.target.value)
          }}
        />
        <button
          className="bg-purple-500 hover:bg-purple-700 mx-auto text-white font-bold py-2 px-4 rounded"
        >
          Search...
        </button>
      </form>
  )
}