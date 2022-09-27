import { Link } from "react-router-dom";

export default function NoResults() {
  return (
    <div className="App bg-slate-200 min-h-screen content-center max-w-120rem p-8 flex pt-8 flex-wrap justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 m-4 max-w-sm w-full">
        <div className="text-center">
          <h1 className="text-gray-700">No results found</h1>
          <p className="text-gray-800">Sorry! We didn't find any meanings for this word</p>
          <Link to ='/dictionary'>Go back to dictionary</Link>
        </div>
      </div>
    </div>
  )
}