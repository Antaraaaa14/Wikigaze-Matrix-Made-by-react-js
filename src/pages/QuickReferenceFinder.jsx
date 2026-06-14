import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { Route, Search } from "lucide-react";

function QuickReferenceFinder() {

  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  const path = [
    "API Documentation",
    "Developer Guide",
    "System Architecture",
    "Deployment Manual"
  ];

  return (

    <DashboardLayout>

      <div className="space-y-8">

        {/* Header */}

        <div>

          <h1 className="text-3xl font-bold text-slate-800">
            Quick Reference Finder
          </h1>

          <p className="text-slate-500 mt-2">
            Find the shortest reference path between related documents.
          </p>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <p className="text-gray-500">Total Documents</p>
            <h2 className="text-3xl font-bold mt-2">248</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <p className="text-gray-500">Reference Nodes</p>
            <h2 className="text-3xl font-bold text-blue-600 mt-2">521</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <p className="text-gray-500">Fastest Path</p>
            <h2 className="text-3xl font-bold text-green-600 mt-2">4 Steps</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <p className="text-gray-500">Search Time</p>
            <h2 className="text-3xl font-bold text-purple-600 mt-2">0.02s</h2>
          </div>

        </div>

        {/* Search Card */}

        <div className="bg-white rounded-2xl shadow-sm p-6">

          <h2 className="text-xl font-bold mb-6">
            Find Reference Path
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <input
              className="border rounded-xl px-4 py-3 outline-none"
              placeholder="Source Document"
              value={source}
              onChange={(e)=>setSource(e.target.value)}
            />

            <input
              className="border rounded-xl px-4 py-3 outline-none"
              placeholder="Destination Document"
              value={destination}
              onChange={(e)=>setDestination(e.target.value)}
            />

          </div>

          <button
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-blue-700"
          >

            <Search size={18}/>

            Find Path

          </button>

        </div>

        {/* Result */}

        <div className="bg-white rounded-2xl shadow-sm p-6">

          <div className="flex items-center gap-2 mb-6">

            <Route className="text-blue-600"/>

            <h2 className="text-xl font-bold">
              Shortest Reference Path
            </h2>

          </div>

          <div className="flex flex-wrap items-center gap-3">

            {path.map((item,index)=>(

              <div key={index} className="flex items-center gap-3">

                <div className="bg-blue-50 text-blue-700 px-5 py-3 rounded-xl font-semibold">

                  {item}

                </div>

                {index!==path.length-1 &&

                  <span className="text-2xl text-blue-600">
                    →
                  </span>

                }

              </div>

            ))}

          </div>

        </div>

      </div>

    </DashboardLayout>

  );

}

export default QuickReferenceFinder;