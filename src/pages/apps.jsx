import AppCard from "../components/AppCard";
import { useApp } from "../context/AppContext";


const Apps = () => {
  const { apps } = useApp();
  return (
    <div className='w-11/12 mx-auto py-16 px-4'>
      <div className='text-center'>
          <h2 className='text-4xl font-bold mb-2'>Our All Applications</h2>
          <p className='text-center text-gray-400'>Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>
      <div className='flex py-10 items-center md:justify-between justify-center flex-col md:flex-row gap-3'>
        <h3 className='text-2xl underline font-medium'>({apps.length ? apps.length : 0}) Apps Found</h3>
        <div>
          <label className="input w-84">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input name='search' type="search" className="grow" placeholder="Search app" />
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {apps.map(app => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
};

export default Apps;