import DashboardLayout from "../layouts/DashboardLayout";
import useDocuments from "../hooks/useDocuments";

function KeywordOrganizer() {
  const { documents, deleteDocument } = useDocuments();

  const categories = [
    {
      title: "All Documents",
      count: documents.length,
    },
    {
      title: "Technical Docs",
      count: documents.filter(
        (doc) => doc.category === "Technical Docs"
      ).length,
    },
    {
      title: "Legal Agreements",
      count: documents.filter(
        (doc) => doc.category === "Legal Agreements"
      ).length,
    },
    {
      title: "Financial Reports",
      count: documents.filter(
        (doc) => doc.category === "Financial Reports"
      ).length,
    },
    {
      title: "HR Policies",
      count: documents.filter(
        (doc) => doc.category === "HR Policies"
      ).length,
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Keyword Organizer
          </h1>

          <p className="text-slate-500 mt-2">
            Organize documents into folders using
            keywords and tags.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white rounded-2xl p-5 shadow-sm"
            >
              <h3 className="font-semibold text-slate-700">
                {cat.title}
              </h3>

              <p className="text-3xl font-bold text-blue-600 mt-3">
                {cat.count}
              </p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="font-bold text-xl">
              Documents Library
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4">Title</th>
                  <th className="text-left p-4">Keywords</th>
                  <th className="text-left p-4">Category</th>
                  <th className="text-left p-4">Date</th>
                  <th className="text-left p-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {documents.map((doc) => (
                  <tr
                    key={doc.id}
                    className="border-t"
                  >
                    {/* Title */}
                    <td className="p-4">
                      {doc.title}
                    </td>

                    {/* Keywords */}
                    <td className="p-4">
                      <div className="flex flex-wrap gap-2">
                        {Array.isArray(doc.keywords) ? (
                          doc.keywords.map((keyword, idx) => (
                            <span
                              key={idx}
                              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                            >
                              {keyword}
                            </span>
                          ))
                        ) : (
                          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                            {doc.keyword || doc.keywords}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Category */}
                    <td className="p-4">
                      {doc.category}
                    </td>

                    {/* Date */}
                    <td className="p-4">
                      {doc.date || doc.uploadTime}
                    </td>

                    {/* Action */}
                    <td className="p-4">
                      <button
                        onClick={() =>
                          deleteDocument(doc.id)
                        }
                        className="bg-red-100 text-red-600 px-3 py-1 rounded-lg hover:bg-red-200 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default KeywordOrganizer;