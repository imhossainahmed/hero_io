import { useState } from 'react';
import { Trash2, Download, ArrowLeft, Star } from 'lucide-react';
import { useApp } from '../context/useApp.js';
import { Link } from 'react-router-dom';
import { formatNumber } from '../utils/utils.js';

const Installations = () => {
  const { installedApps, uninstallApp } = useApp();
  const [sortBy, setSortBy] = useState('newest');

  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortBy === 'size-desc') return b.size - a.size;
    if (sortBy === 'size-asc') return a.size - b.size;
    return 0;
  });

  if (installedApps.length === 0) {
    return (
      <div className="flex items-center justify-center flex-col h-[70vh] space-y-6 max-w-md mx-auto">
        <div className="flex justify-center">
          <div className="bg-base-200 p-8 rounded-full">
            <Download size={64} className="text-base-content/20" />
          </div>
        </div>
        <h2 className="text-3xl font-bold">No Apps Installed</h2>
        <p className="text-base-content/60 text-lg">You haven't installed any applications yet.</p>
        <Link to="/apps" className="btn btn-lg bg-linear-to-t w-full from-violet-700 rounded-md to-purple-500 text-white"><ArrowLeft size={20} /> Back to Marketplace</Link>
      </div>
    );
  }

  return (
    <div className="min-h-[70vh] py-16 px-4 w-11/12 mx-auto">
      <div className="flex mb-8 flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">({installedApps.length}) Apps Found</h1>
        </div>

        <select 
        className="select"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="newest">Recently Installed</option>
          <option value="size-desc">Largest Size</option>
          <option value="size-asc">Smallest Size</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {sortedApps.map((app) => (
          <div key={app.id} className="flex items-center md:flex-row flex-col bg-white border border-base-200 overflow-hidden">
            <figure className="w-24 sm:w-32 md:w-40 md:p-10 p-4  shrink-0">
              <img loading="lazy" src={app.image} alt={app.title} className="h-full w-full object-cover" referrerPolicy="no-referrer"/>
            </figure>
            <div className="card-body p-4 sm:p-6 md:flex-row justify-between flex-col gap-4 items-center">
              <div className="space-y-1">
                <h2 className="card-title text-lg sm:text-xl">{app.title}</h2>
                <p className="text-sm text-base-content/60">{app.companyName}</p>
                <div className="flex flex-wrap gap-4 mt-2">
                  <span className="badge badge-soft badge-success gap-1"><Download size={12} /> {formatNumber(app.downloads)}</span>
                  <span className="badge badge-soft badge-warning gap-1"><Star size={12} /> {app?.ratingAvg}</span>
                  <span className="badge badge-ghost">{app.size} MB</span>
                </div>
              </div>
              <div className="card-actions md:w-fit w-full">
                <button 
                  onClick={() => uninstallApp(app.id)}
                  className="btn btn-error btn-outline btn-sm w-full sm:btn-md gap-2 rounded-md"
                >
                  <Trash2 size={18} />
                  <span>Uninstall</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installations;
