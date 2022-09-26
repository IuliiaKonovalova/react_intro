import { useState } from "react";
export default function Dictionary() {
  const [word, setWord] = useState();

  return (
    <div className="App bg-slate-200 min-h-screen max-w-120rem p-8">
      <input className="rounded-lg border-2 border-gray-600 mb-2" type="text" onChange={(e) => setWord(e.target.value)} />
      <p>Let's get the definition for {word}</p>
    </div>
  )
}