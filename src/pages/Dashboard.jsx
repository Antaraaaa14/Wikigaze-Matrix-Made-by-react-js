import DashboardLayout from "../layouts/DashboardLayout";
import StatsCard from "../components/StatsCard";
import FeatureCard from "../components/FeatureCard";
import useDocuments from "../hooks/useDocuments";

import {
  FileText,
  Tags,
  Link2,
  Activity,
  FolderKanban,
  History,
  Clock3,
  ShieldCheck,
  Search,
  Network,
  Route,
  Database,
  Sidebar,
} from "lucide-react";
import Navbar from "../components/Navbar";

function Dashboard() {
  const { documents } = useDocuments();
  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Hero Section */}

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 text-white">
          <h1 className="text-4xl font-bold mb-3">
            Welcome to WikiGaze Matrix
          </h1>

          <p className="text-blue-100 max-w-2xl">
            A powerful document library management system
            that organizes, secures, indexes and maps
            relationships between your company documents.
          </p>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          <StatsCard
            title="Documents"
            value={documents.length}
            color="bg-blue-100"
            icon={<FileText className="text-blue-600" />}
          />

          <StatsCard
            title="Keywords"
            value="1,234"
            color="bg-green-100"
            icon={<Tags className="text-green-600" />}
          />

          <StatsCard
            title="Links Mapped"
            value="15.8K"
            color="bg-purple-100"
            icon={<Link2 className="text-purple-600" />}
          />

          <StatsCard
            title="System Health"
            value="99.8%"
            color="bg-orange-100"
            icon={<Activity className="text-orange-600" />}
          />

        </div>

        {/* Features */}

        <div>

          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Core Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            <FeatureCard
              title="Keyword Organizer"
              description="Organize documents using keywords and tags."
              link="/keyword-organizer"
              icon={<FolderKanban />}
            />

            <FeatureCard
              title="Search History & Undo"
              description="Track search changes and revert updates."
              link="/search-history"
              icon={<History />}
            />

            <FeatureCard
              title="Background Indexer"
              description="Process documents in upload order."
              link="/background-indexer"
              icon={<Clock3 />}
            />

            <FeatureCard
              title="Security Checker"
              description="Validate file integrity instantly."
              link="/security-checker"
              icon={<ShieldCheck />}
            />

            <FeatureCard
              title="Relevance Sorter"
              description="Rank search results intelligently."
              link="/relevance-sorter"
              icon={<Search />}
            />

            <FeatureCard
              title="Citation Hub"
              description="Manage document relationships."
              link="/citation-hub"
              icon={<Network />}
            />

            <FeatureCard
              title="Quick Reference Finder"
              description="Find shortest citation paths."
              link="/reference-finder"
              icon={<Route />}
            />

            <FeatureCard
              title="Data Balancer"
              description="Distribute search index efficiently."
              link="/data-balancer"
              icon={<Database />}
            />

          </div>
        </div>

        {/* About */}

        <div className="bg-gradient-to-r from-slate-900 to-blue-950 text-white rounded-3xl p-8">

          <h2 className="text-2xl font-bold mb-4">
            About WikiGaze Matrix
          </h2>

          <p className="text-slate-300 leading-relaxed">
            WikiGaze Matrix is a document intelligence
            platform that combines organization,
            indexing, security verification, search
            relevance analysis, citation mapping,
            shortest path discovery and balanced
            cloud indexing into a single powerful
            dashboard.
          </p>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default Dashboard;

