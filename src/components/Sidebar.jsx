import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FolderKanban,
  History,
  Clock3,
  ShieldCheck,
  Search,
  Network,
  Route,
  Database,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Keyword Organizer",
    path: "/keyword-organizer",
    icon: FolderKanban,
  },
  {
    name: "Search History & Undo",
    path: "/search-history",
    icon: History,
  },
  {
    name: "Background Indexer",
    path: "/background-indexer",
    icon: Clock3,
  },
  {
    name: "Security Checker",
    path: "/security-checker",
    icon: ShieldCheck,
  },
  {
    name: "Relevance Sorter",
    path: "/relevance-sorter",
    icon: Search,
  },
  {
    name: "Citation Hub",
    path: "/citation-hub",
    icon: Network,
  },
  {
    name: "Quick Reference Finder",
    path: "/reference-finder",
    icon: Route,
  },
  {
    name: "Data Balancer",
    path: "/data-balancer",
    icon: Database,
  },
];

function Sidebar() {
  return (
    <aside className="w-72 bg-gradient-to-b from-slate-900 to-blue-950 text-white min-h-screen flex flex-col">
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-blue-500 flex items-center justify-center font-bold">
            W
          </div>

          <div>
            <h1 className="font-bold text-lg">WikiGaze Matrix</h1>
            <p className="text-xs text-slate-400">
              Document Intelligence
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "hover:bg-slate-800 text-slate-300"
                }`
              }
            >
              <Icon size={18} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="m-4 p-4 rounded-xl bg-slate-800">
        <h3 className="font-semibold mb-3">Quick Stats</h3>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Total Docs</span>
            <span>2,847</span>
          </div>

          <div className="flex justify-between">
            <span>Indexed</span>
            <span>2,645</span>
          </div>

          <div className="flex justify-between">
            <span>Pending</span>
            <span>202</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;