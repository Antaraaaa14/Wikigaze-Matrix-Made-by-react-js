import DashboardLayout from "../layouts/DashboardLayout";
import { Database, Cloud, Activity } from "lucide-react";
function DataBalancer() {
  const servers = [
    {
      name: "Cloud Server A",
      load: 72,
      capacity: "1.8 TB",
      status: "Healthy"
    },
    {
      name: "Cloud Server B",
      load: 65,
      capacity: "1.6 TB",
      status: "Healthy"
    },
    {
      name: "Cloud Server C",
      load: 81,
      capacity: "2.1 TB",
      status: "Warning"
    },
    {
      name: "Cloud Server D",
      load: 58,
      capacity: "1.4 TB",
      status: "Healthy"
    }
  ];
  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Header */}

        <div>

          <h1 className="text-3xl font-bold text-slate-800">
            Search Data Balancer
          </h1>

          <p className="text-slate-500 mt-2">
            Distribute search index evenly across cloud servers for maximum performance.
          </p>

        </div>

        {/* Top Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

          <div className="bg-white rounded-2xl shadow-sm p-6">

            <p className="text-gray-500">
              Total Servers
            </p>

            <h2 className="text-3xl font-bold mt-2">
              4
            </h2>

          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">

            <p className="text-gray-500">
              Average Load
            </p>

            <h2 className="text-3xl font-bold text-blue-600 mt-2">
              69%
            </h2>

          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">

            <p className="text-gray-500">
              Total Capacity
            </p>

            <h2 className="text-3xl font-bold text-green-600 mt-2">
              6.9 TB
            </h2>

          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">

            <p className="text-gray-500">
              Healthy Servers
            </p>

            <h2 className="text-3xl font-bold text-purple-600 mt-2">
              3 / 4
            </h2>

          </div>

        </div>

        {/* Cloud Servers */}

        <div className="grid md:grid-cols-2 gap-6">

          {servers.map((server,index)=>(

            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm p-6"
            >

              <div className="flex justify-between items-center">

                <div>

                  <h2 className="text-xl font-bold">

                    {server.name}

                  </h2>

                  <p className="text-gray-500 mt-2">

                    Capacity : {server.capacity}

                  </p>

                </div>

                <Cloud className="text-blue-600"/>

              </div>

              <div className="mt-6">

                <div className="flex justify-between mb-2">

                  <span>Load Usage</span>

                  <span>{server.load}%</span>

                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">

                  <div

                    className="bg-blue-600 h-3 rounded-full"

                    style={{width:`${server.load}%`}}

                  ></div>

                </div>

              </div>

              <div className="mt-5">

                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    server.status==="Healthy"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                  }`}
                >

                  {server.status}

                </span>

              </div>

            </div>

          ))}

        </div>

        {/* Strategy Section */}

        <div className="bg-white rounded-2xl shadow-sm p-8">

          <div className="flex items-center gap-2 mb-6">

            <Database className="text-blue-600"/>

            <h2 className="text-2xl font-bold">

              Load Balancer Strategy

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-blue-50 rounded-xl p-5">

              <Activity className="text-blue-600 mb-3"/>

              <h3 className="font-bold text-lg">

                Shard Distribution

              </h3>

              <p className="text-gray-600 mt-2">

                Search index is evenly divided among cloud servers to reduce latency.

              </p>

            </div>

            <div className="bg-green-50 rounded-xl p-5">

              <Activity className="text-green-600 mb-3"/>

              <h3 className="font-bold text-lg">

                Health Monitoring

              </h3>

              <p className="text-gray-600 mt-2">

                Continuous monitoring detects overloaded or unavailable servers.

              </p>

            </div>

            <div className="bg-purple-50 rounded-xl p-5">

              <Activity className="text-purple-600 mb-3"/>

              <h3 className="font-bold text-lg">

                Dynamic Rebalancing

              </h3>

              <p className="text-gray-600 mt-2">

                System automatically redistributes search data when server load changes.

              </p>

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>

  );

}

export default DataBalancer;