import DashboardLayout from "../layouts/DashboardLayout";
import { Link2 } from "lucide-react";

function CitationHub() {
  const links = [
    {
      source: "API Documentation",
      target: "Developer Guide",
      type: "References",
    },
    {
      source: "Developer Guide",
      target: "System Architecture",
      type: "Depends On",
    },
    {
      source: "Employee Handbook",
      target: "Company Policy",
      type: "References",
    },
    {
      source: "Financial Report",
      target: "Audit Report",
      type: "Linked",
    },
    {
      source: "Security Manual",
      target: "Compliance Guide",
      type: "References",
    },
  ];

  return (
    <DashboardLayout>

      <div className="space-y-8">

        {/* Header */}

        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Citation Hub
          </h1>

          <p className="text-slate-500 mt-2">
            Visualize and manage document references across the knowledge library.
          </p>
        </div>

        {/* Top Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-gray-500">Total Documents</p>
            <h2 className="text-3xl font-bold mt-2">248</h2>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-gray-500">Citation Links</p>
            <h2 className="text-3xl font-bold text-blue-600 mt-2">521</h2>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-gray-500">Active References</p>
            <h2 className="text-3xl font-bold text-green-600 mt-2">492</h2>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-gray-500">Broken Links</p>
            <h2 className="text-3xl font-bold text-red-500 mt-2">6</h2>
          </div>

        </div>

        {/* Citation Network */}

        <div className="bg-white rounded-2xl shadow-sm p-6">

          <h2 className="text-xl font-bold mb-6">
            Citation Network
          </h2>

          <div className="space-y-4">

            {links.map((item, index) => (

              <div
                key={index}
                className="border rounded-xl p-5 hover:shadow-md transition flex justify-between items-center"
              >

                <div>

                  <h3 className="font-bold text-lg">
                    {item.source}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    {item.type}
                  </p>

                </div>

                <div className="flex items-center gap-4">

                  <Link2 className="text-blue-600" />

                  <div className="bg-blue-50 px-4 py-2 rounded-xl font-semibold text-blue-700">
                    {item.target}
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Summary */}

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">

          <h2 className="text-2xl font-bold">
            Knowledge Graph Overview
          </h2>

          <p className="mt-3 opacity-90">
            Citation Hub helps visualize relationships between company
            documents, making it easier to navigate connected information
            and understand dependencies across the document library.
          </p>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default CitationHub;