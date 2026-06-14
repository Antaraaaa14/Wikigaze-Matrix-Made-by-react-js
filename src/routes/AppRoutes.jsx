import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import KeywordOrganizer from "../pages/KeywordOrganizer";
import SearchHistory from "../pages/SearchHistory";
import BackgroundIndexer from "../pages/BackgroundIndexer";
import SecurityChecker from "../pages/SecurityChecker";
import RelevanceSorter from "../pages/RelevanceSorter";
import CitationHub from "../pages/CitationHub";
import QuickReferenceFinder from "../pages/QuickReferenceFinder";
import DataBalancer from "../pages/DataBalancer";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />

      <Route
        path="/keyword-organizer"
        element={<KeywordOrganizer />}
      />

      <Route
        path="/search-history"
        element={<SearchHistory />}
      />

      <Route
        path="/background-indexer"
        element={<BackgroundIndexer />}
      />

      <Route
        path="/security-checker"
        element={<SecurityChecker />}
      />

      <Route
        path="/relevance-sorter"
        element={<RelevanceSorter />}
      />

      <Route
        path="/citation-hub"
        element={<CitationHub />}
      />

      <Route
        path="/reference-finder"
        element={<QuickReferenceFinder />}
      />

      <Route
        path="/data-balancer"
        element={<DataBalancer />}
      />
    </Routes>
  );
}

export default AppRoutes;