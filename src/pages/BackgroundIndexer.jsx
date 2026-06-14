import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { Upload, Play } from "lucide-react";

function BackgroundIndexer() {
  const [queue, setQueue] = useState([
    {
      id: 1,
      document: "API Documentation.pdf",
      status: "Processing",
    },
    {
      id: 2,
      document: "Employee Handbook.pdf",
      status: "Waiting",
    },
    {
      id: 3,
      document: "Financial Report.xlsx",
      status: "Waiting",
    },
    {
      id: 4,
      document: "Legal Contract.docx",
      status: "Waiting",
    },
  ]);

  const processNext = () => {
    const updatedQueue = [...queue];

    const processingIndex = updatedQueue.findIndex(
      (item) => item.status === "Processing"
    );

    if (processingIndex !== -1) {
      updatedQueue[processingIndex].status = "Completed";
    }

    const nextWaiting = updatedQueue.find(
      (item) => item.status === "Waiting"
    );

    if (nextWaiting) {
      nextWaiting.status = "Processing";
    }

    setQueue(updatedQueue);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Header */}

        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Background Indexer
          </h1>

          <p className="text-slate-500 mt-2">
            Process uploaded documents and make them searchable.
          </p>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p className="text-slate-500">Total Documents</p>
            <h2 className="text-3xl font-bold mt-2">
              {queue.length}
            </h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p className="text-slate-500">Completed</p>
            <h2 className="text-3xl font-bold mt-2">
              {
                queue.filter(
                  (item) => item.status === "Completed"
                ).length
              }
            </h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p className="text-slate-500">Processing</p>
            <h2 className="text-3xl font-bold mt-2">
              {
                queue.filter(
                  (item) => item.status === "Processing"
                ).length
              }
            </h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p className="text-slate-500">Waiting</p>
            <h2 className="text-3xl font-bold mt-2">
              {
                queue.filter(
                  (item) => item.status === "Waiting"
                ).length
              }
            </h2>
          </div>

        </div>

        {/* Action */}

        <div className="bg-white p-6 rounded-2xl shadow-sm">

          <div className="flex gap-4">

            <button className="bg-blue-600 text-white px-5 py-3 rounded-xl flex items-center gap-2">
              <Upload size={18} />
              Upload Document
            </button>

            <button
              onClick={processNext}
              className="bg-green-600 text-white px-5 py-3 rounded-xl flex items-center gap-2"
            >
              <Play size={18} />
              Process Next
            </button>

          </div>

        </div>

        {/* Queue Table */}

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

          <div className="p-6 border-b">
            <h2 className="text-xl font-bold">
              Indexing Queue
            </h2>
          </div>

          <table className="w-full">

            <thead className="bg-slate-50">

              <tr>
                <th className="text-left p-4">
                  Queue Position
                </th>

                <th className="text-left p-4">
                  Document
                </th>

                <th className="text-left p-4">
                  Status
                </th>
              </tr>

            </thead>

            <tbody>

              {queue.map((item, index) => (
                <tr
                  key={item.id}
                  className="border-t"
                >
                  <td className="p-4">
                    #{index + 1}
                  </td>

                  <td className="p-4">
                    {item.document}
                  </td>

                  <td className="p-4">

                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        item.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : item.status === "Processing"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {item.status}
                    </span>

                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default BackgroundIndexer;