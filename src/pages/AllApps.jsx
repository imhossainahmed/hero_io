import { useState, useEffect, useMemo } from "react";
import { Search } from "lucide-react";
import AppCard from "../components/AppCard.jsx";
import { useLoaderData } from "react-router-dom";
import AppCardSkeleton from "../components/AppCardSkeleton.jsx";

const AllApps = () => {
  const apps = useLoaderData();

  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const isSearching = searchQuery !== debouncedQuery;

  const filteredApps = useMemo(() => {
    return apps.filter((app) =>
      app.title.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
      app.companyName.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
  }, [apps, debouncedQuery]);

  return (
    <div>
      <div className="container mx-auto py-16">
        
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h1 className="text-4xl font-bold">Explore All Apps</h1>
          <p className="text-base-content/60">
            Find the perfect tool for your needs from our curated collection of high-quality applications.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-between py-10">
          <h2 className="text-2xl font-medium">
            ({filteredApps.length}) Apps Found
          </h2>

          <label className="input flex items-center gap-2">
            <Search className="h-4 opacity-50" />
            <input
              type="search"
              placeholder="Search Apps..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </label>
        </div>

        {apps.length === 0 || isSearching ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {[...Array(8)].map((_, i) => (
              <AppCardSkeleton key={i} />
            ))}
          </div>
        ) : filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 space-y-4">
            <div className="flex justify-center">
              <Search size={64} className="text-base-content/20" />
            </div>
            <h3 className="text-2xl font-bold">No apps found</h3>
            <p className="text-base-content/60">
              Try adjusting your search to find what you're looking for.
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="btn btn-primary"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllApps;