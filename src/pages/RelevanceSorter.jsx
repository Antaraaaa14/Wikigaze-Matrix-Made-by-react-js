import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { Search } from "lucide-react";

function RelevanceSorter() {

  const documents = [
    {
      title: "React Documentation",
      keyword: "react",
      score: 98,
      category: "Technical"
    },
    {
      title: "React Router Guide",
      keyword: "react",
      score: 95,
      category: "Guide"
    },
    {
      title: "Employee Policy",
      keyword: "policy",
      score: 82,
      category: "HR"
    },
    {
      title: "Financial Report",
      keyword: "finance",
      score: 90,
      category: "Finance"
    },
    {
      title: "API Integration",
      keyword: "api",
      score: 88,
      category: "Technical"
    }
  ];

  const [search, setSearch] = useState("");

  const filtered = documents.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.keyword.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>

      <div className="space-y-8">

        <div>

          <h1 className="text-3xl font-bold text-slate-800">
            Relevance Sorter
          </h1>

          <p className="text-slate-500 mt-2">
            Smart ranking of search results based on keyword frequency and importance.
          </p>

        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">

          <div className="relative">

            <Search className="absolute left-4 top-3 text-gray-400"/>

            <input
              type="text"
              placeholder="Search documents..."
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              className="w-full pl-12 py-3 border rounded-xl outline-none"
            />

          </div>

        </div>

        <div className="grid gap-5">

          {filtered.map((doc,index)=>(

            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition"
            >

              <div className="flex justify-between items-center">

                <div>

                  <h2 className="text-xl font-bold">
                    {doc.title}
                  </h2>

                  <p className="text-gray-500 mt-2">
                    Category : {doc.category}
                  </p>

                  <p className="text-gray-500">
                    Keyword : {doc.keyword}
                  </p>

                </div>

                <div className="text-center">

                  <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl font-bold text-xl">
                    {doc.score}%
                  </div>

                  <p className="text-sm text-gray-500 mt-2">
                    Relevance
                  </p>

                </div>

              </div>

            </div>

          ))}

          {filtered.length===0 &&

            <div className="bg-white rounded-2xl p-10 text-center shadow-sm">

              <h2 className="text-2xl font-bold">
                No Results Found
              </h2>

              <p className="text-gray-500 mt-2">
                Try another keyword.
              </p>

            </div>

          }

        </div>

      </div>

    </DashboardLayout>
  );
}

export default RelevanceSorter;