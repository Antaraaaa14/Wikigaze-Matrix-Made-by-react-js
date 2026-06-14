import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { History, Undo2 } from "lucide-react";

function SearchHistory() {
  const [history, setHistory] = useState([
    {
      version: "V1",
      change: "Search Mode → Basic",
      time: "10:20 AM",
    },
    {
      version: "V2",
      change: "Sort By → Date",
      time: "10:25 AM",
    },
    {
      version: "V3",
      change: "Filters → Enabled",
      time: "10:28 AM",
    },
  ]);

  const [count, setCount] = useState(4);

  const addChange = () => {
    const newEntry = {
      version: `V${count}`,
      change: "Search Mode → Advanced",
      time: new Date().toLocaleTimeString(),
    };

    setHistory([...history, newEntry]);
    setCount(count + 1);
  };

  const undoChange = () => {
    if (history.length === 0) return;

    const updatedHistory = [...history];
    updatedHistory.pop();

    setHistory(updatedHistory);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Header */}

        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Search History & Undo
          </h1>

          <p className="text-slate-500 mt-2">
            Track search setting changes and safely undo updates.
          </p>
        </div>

        {/* Stats Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p className="text-slate-500">Total Changes</p>
            <h2 className="text-3xl font-bold mt-2">
              {history.length}
            </h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p className="text-slate-500">Today's Changes</p>
            <h2 className="text-3xl font-bold mt-2">
              {history.length}
            </h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p className="text-slate-500">Undo Available</p>
            <h2 className="text-3xl font-bold mt-2">
              {history.length > 0 ? "Yes" : "No"}
            </h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p className="text-slate-500">Last Update</p>
            <h2 className="text-xl font-bold mt-2">
              Just Now
            </h2>
          </div>

        </div>

        {/* Current Settings */}

        <div className="bg-white rounded-2xl p-6 shadow-sm">

          <h2 className="text-xl font-bold mb-4">
            Current Search Settings
          </h2>

          <div className="space-y-3 text-slate-700">

            <p>
              <strong>Search Mode:</strong> Advanced
            </p>

            <p>
              <strong>Sort By:</strong> Relevance
            </p>

            <p>
              <strong>Filters:</strong> Active
            </p>

          </div>

          <div className="flex gap-4 mt-6">

            <button
              onClick={addChange}
              className="bg-blue-600 text-white px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-blue-700"
            >
              <History size={18} />
              Change Setting
            </button>

            <button
              onClick={undoChange}
              className="bg-red-500 text-white px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-red-600"
            >
              <Undo2 size={18} />
              Undo Last Change
            </button>

          </div>

        </div>

        {/* History Table */}

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

          <div className="p-6 border-b">
            <h2 className="text-xl font-bold">
              Change History
            </h2>
          </div>

          <table className="w-full">

            <thead className="bg-slate-50">

              <tr>
                <th className="text-left p-4">
                  Version
                </th>

                <th className="text-left p-4">
                  Change
                </th>

                <th className="text-left p-4">
                  Time
                </th>

                <th className="text-left p-4">
                  Status
                </th>
              </tr>

            </thead>

            <tbody>

              {history.map((item, index) => (
                <tr
                  key={index}
                  className="border-t"
                >
                  <td className="p-4">
                    {item.version}
                  </td>

                  <td className="p-4">
                    {item.change}
                  </td>

                  <td className="p-4">
                    {item.time}
                  </td>

                  <td className="p-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                      Saved
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

export default SearchHistory;