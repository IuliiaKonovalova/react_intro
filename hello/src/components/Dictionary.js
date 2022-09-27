import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Dictionary() {
  const [word, setWord] = useState("");
  const navigate = useNavigate();


  return (
    <div className="App bg-slate-200 min-h-screen max-w-120rem p-8">
      <form
        className="flex justify-center space-x-2 max-w-xl mx-auto bg-white rounded-lg shadow-lg p-8 flex-col mt-8"
        onClick={() => {
          navigate(`/definition/${word}`);
        }}>
        <h1 className="text-2xl text-gray-700 font-semibold text-center mb-4">Dictionary</h1>
        <input
          className="rounded-lg border-2 border-gray-600 mb-4 p-2"
          placeholder="Search for a word"
          type="text"
          onChange={(e) => {
            setWord(e.target.value)
          }}
        />
        <button
          className="bg-purple-500 hover:bg-purple-700 mx-auto text-white font-bold py-2 px-4 rounded"
        >
          Search more...
        </button>
      </form>
    </div>
  )
}