import DashboardLayout from "../layouts/DashboardLayout";
import { ShieldCheck } from "lucide-react";

function SecurityChecker() {
  const documents = [
    {
      id: "DOC-1001",
      title: "API Documentation",
      hash: "A7F2B9C",
      integrity: "Verified",
      lastVerified: "2 min ago",
    },
    {
      id: "DOC-1002",
      title: "Employee Handbook",
      hash: "D9K3L7P",
      integrity: "Verified",
      lastVerified: "5 min ago",
    },
    {
      id: "DOC-1003",
      title: "Financial Report",
      hash: "Q4X8M2Z",
      integrity: "Warning",
      lastVerified: "12 min ago",
    },
    {
      id: "DOC-1004",
      title: "Legal Contract",
      hash: "T8V6W1R",
      integrity: "Verified",
      lastVerified: "20 min ago",
    },
    {
      id: "DOC-1005",
      title: "Company Policy",
      hash: "Y2N7B4K",
      integrity: "Verified",
      lastVerified: "25 min ago",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Header */}

        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Security Checker
          </h1>

          <p className="text-slate-500 mt-2">
            Verify document integrity using unique ID validation.
          </p>
        </div>

        {/* Stats Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p className="text-slate-500">Verified Files</p>
            <h2 className="text-3xl font-bold text-green-600 mt-2">
              248
            </h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p className="text-slate-500">Warnings</p>
            <h2 className="text-3xl font-bold text-red-500 mt-2">
              3
            </h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p className="text-slate-500">Last Scan</p>
            <h2 className="text-xl font-bold mt-2">
              2 min ago
            </h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p className="text-slate-500">System Status</p>
            <h2 className="text-3xl font-bold text-blue-600 mt-2">
              99.8%
            </h2>
          </div>

        </div>

        {/* Verification Status Table */}

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

          <div className="p-6 border-b flex items-center gap-2">
            <ShieldCheck className="text-green-600" />
            <h2 className="text-xl font-bold">
              Document Verification Status
            </h2>
          </div>

          <table className="w-full">

            <thead className="bg-slate-50">

              <tr>
                <th className="text-left p-4">Document ID</th>
                <th className="text-left p-4">Title</th>
                <th className="text-left p-4">Hash</th>
                <th className="text-left p-4">Integrity</th>
                <th className="text-left p-4">Last Verified</th>
              </tr>

            </thead>

            <tbody>

              {documents.map((doc) => (
                <tr
                  key={doc.id}
                  className="border-t"
                >
                  <td className="p-4">{doc.id}</td>

                  <td className="p-4">{doc.title}</td>

                  <td className="p-4 font-mono">
                    {doc.hash}
                  </td>

                  <td className="p-4">

                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        doc.integrity === "Verified"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {doc.integrity}
                    </span>

                  </td>

                  <td className="p-4">
                    {doc.lastVerified}
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

export default SecurityChecker;