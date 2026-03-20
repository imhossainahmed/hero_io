import { Link } from 'react-router-dom';
import { Star, Download } from 'lucide-react';
import { formatNumber } from '../utils/utils';

const AppCard = ({ app }) => {
  return (
    <div className="card p-4 bg-white hover:-translate-y-2 duration-300 shadow-sm hover:shadow-md transition-all border border-base-200 rounded-lg overflow-hidden group">
      <figure className="rounded-md">
        <img 
          src={app.image} 
          alt={app.title} 
          className="w-full h-full object-cover" 
        />
      </figure>
      <div>
        <h2 className="font-bold my-2 text-base text-base-content line-clamp-1">{app.title}</h2>
        <div className="flex items-center justify-between">
          <div className="flex badge badge-soft badge-accent items-center gap-1 text-success font-bold text-sm">
            <Download size={14} className="fill-success" />
            <span>{formatNumber(app.downloads)}</span>
          </div>
          <div className="flex badge badge-soft badge-warning  items-center gap-1 text-warning font-bold text-sm">
            <Star size={14} className="fill-warning" />
            <span>{app.ratingAvg}</span>
          </div>
        </div>
        <Link to={`/app/${app.id}`} className="absolute inset-0 z-10 opacity-0">View Details</Link>
      </div>
    </div>
  );
};

export default AppCard;
