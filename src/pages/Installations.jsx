import React, { useState } from 'react';
import { Trash2, Download, Smartphone, SlidersHorizontal } from 'lucide-react';
import { useApp } from '../context/useApp.js';
import { Link } from 'react-router-dom';
import { formatNumber } from '../utils/utils.js';

const Installation = () => {
  const { installedApps, uninstallApp } = useApp();
  const [sortBy, setSortBy] = useState('newest');

  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortBy === 'size-desc') return b.size - a.size;
    if (sortBy === 'size-asc') return a.size - b.size;
    if (sortBy === 'downloads') return b.downloads - a.downloads;
    return 0; // Default to newest (order of installation)
  });

  if (installedApps.length === 0) {
    return (
      <div className="text-center py-20 space-y-6 max-w-md mx-auto">
        <div className="flex justify-center">
          <div className="bg-base-200 p-8 rounded-full">
            <Smartphone size={64} className="text-base-content/20" />
          </div>
        </div>
        <h2 className="text-3xl font-bold">No Apps Installed</h2>
        <p className="text-base-content/60 text-lg">You haven't installed any applications yet. Browse our marketplace to find amazing apps!</p>
        <Link to="/apps" className="btn btn-primary btn-lg rounded-2xl w-full">Browse Marketplace</Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold">My Installations</h1>
          <p className="text-base-content/60">Manage your installed applications ({installedApps.length})</p>
        </div>
        
        <div className="flex items-center gap-2 bg-base-200 p-2 rounded-xl">
          <SlidersHorizontal size={20} className="text-base-content/60 ml-2" />
          <select 
            className="select select-ghost select-sm focus:bg-transparent"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="newest">Recently Installed</option>
            <option value="size-desc">Largest Size</option>
            <option value="size-asc">Smallest Size</option>
            <option value="downloads">Most Popular</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {sortedApps.map((app) => (
          <div key={app.id} className="card card-side bg-base-100 shadow-xl border border-base-200 overflow-hidden">
            <figure className="w-24 sm:w-32 md:w-40 shrink-0">
              <img src={app.image} alt={app.title} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
            </figure>
            <div className="card-body p-4 sm:p-6 flex-row justify-between items-center">
              <div className="space-y-1">
                <h2 className="card-title text-lg sm:text-xl">{app.title}</h2>
                <p className="text-sm text-base-content/60">{app.companyName}</p>
                <div className="flex flex-wrap gap-4 mt-2">
                  <span className="badge badge-ghost gap-1"><Download size={12} /> {formatNumber(app.downloads)}</span>
                  <span className="badge badge-ghost">{app.size} MB</span>
                </div>
              </div>
              <div className="card-actions">
                <button 
                  onClick={() => uninstallApp(app.id)}
                  className="btn btn-error btn-outline btn-sm sm:btn-md gap-2 rounded-xl"
                >
                  <Trash2 size={18} />
                  <span className="hidden sm:inline">Uninstall</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
