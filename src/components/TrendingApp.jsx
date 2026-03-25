import { Suspense } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AppCard from './AppCard';

const TrendingApp = () => {
  const apps = useLoaderData();
  const topApps = apps.slice(0, 8);
  return (
  <section className="py-24 px-4 bg-base-100">
    <div className="w-11/12 mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-black text-[#1E293B]">Trending Apps</h2>
        <p className="text-lg text-base-content/60">Explore All Trending Apps on the Market developed by us</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <Suspense>
          {topApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </Suspense>
      </div>

      <div className="flex justify-center pt-8">
        <Link to="/apps" className="btn bg-[#8B5CF6] hover:bg-[#7C3AED] text-white border-none rounded-lg px-12 btn-lg font-bold">
          Show All
        </Link>
      </div>
    </div>
  </section>
  );
};

export default TrendingApp;