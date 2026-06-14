import { Search, Upload } from "lucide-react";
import useDocuments from "../hooks/useDocuments";

function Navbar() {
  const { addDocument } = useDocuments();

  return (
    <header className="bg-white border-b border-slate-200 px-8 py-5">
      <div className="flex justify-between items-center">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-4xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              WikiGaze Matrix
            </span>
          </h2>

          <p className="text-sm text-slate-500 mt-1 tracking-wide font-medium">
            Intelligent Document Management & Knowledge Discovery
          </p>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-5">
          
          {/* Search Box */}
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search documents, keywords, references..."
              className="
                pl-11 pr-4 py-3
                w-80
                border border-slate-300
                rounded-2xl
                bg-slate-50
                outline-none
                transition-all duration-300
                focus:bg-white
                focus:ring-4 focus:ring-blue-100
                focus:border-blue-500
              "
            />
          </div>

          {/* Upload Button */}
          <label
            className="
              bg-gradient-to-r
              from-blue-600
              to-indigo-600
              text-white
              px-5
              py-3
              rounded-2xl
              flex
              items-center
              gap-2
              cursor-pointer
              shadow-lg
              hover:scale-105
              hover:shadow-xl
              transition-all
              duration-300
            "
          >
            <Upload size={18} />
            Upload

            <input
              type="file"
              hidden
              onChange={(e) => {
                if (e.target.files[0]) {
                  addDocument(e.target.files[0]);
                }
              }}
            />
          </label>
        </div>
      </div>
    </header>
  );
}

export default Navbar;