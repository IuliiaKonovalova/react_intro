import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Dictionary() {
  const [word, setWord] = useState("");
  const navigate = useNavigate();


  return (
    <div className="App bg-slate-200 min-h-screen max-w-120rem p-8">
      <input
        className="rounded-lg border-2 border-gray-600 mb-2"
        type="text"
        onChange={(e) => {
          setWord(e.target.value)
        }}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          navigate(`/definition/${word}`);
        }}
      >
        Search
      </button>
    </div>
  )
}