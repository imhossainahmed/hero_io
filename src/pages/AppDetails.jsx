import { useLoaderData, useNavigate } from 'react-router-dom';
import { Download, ArrowLeft, CheckCircle } from 'lucide-react';
import { useApp } from '../context/useApp';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import DownlaodImg from "../assets/icon-downloads.png";
import RatingImg from "../assets/icon-ratings.png";
import ReviewImg from "../assets/icon-review.png";
import ErrorImg from "../assets/App-Error.png";

const AppDetails = () => {
  const apps = useLoaderData();
  const navigate = useNavigate();
  const { installApp, installedApps } = useApp();

  if (!apps) {
    return (
      <div className="flex items-center justify-center h-[90vh]">
        <div className='flex items-center justify-center gap-4 p-4 flex-col'>
          <img loading="lazy" src={ErrorImg} alt="App Not Found" className='w-76'/>
          <h1 className="font-bold uppercase text-4xl">OPPS!! APP NOT FOUND</h1>
          <h3 className='text-base text-gray-500'>The App you are requesting is not found on our system.  please try another apps</h3>
          <button onClick={() => navigate('/apps')} className="btn btn-lg bg-linear-to-t from-violet-700 rounded-md to-purple-500 text-white">
            <ArrowLeft size={20} /> Back to Marketplace
          </button>
        </div>
      </div>
    );
  }

  const isInstalled = installedApps.some(a => a.id === apps.id);
  return (
  <section>
    <div className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row gap-8 items-start">

      <div className="max-w-96 aspect-square bg-white shadow rounded-md flex items-center justify-center p-12 border border-gray-50">
        <div className="relative w-full h-full">
          <img loading="lazy" src={apps?.image} alt={apps?.title} className='object-cover rounded-md w-full'/>
        </div>
      </div>

      <div className="grow space-y-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{apps?.title}</h1>
          <p className="text-lg text-gray-500 font-medium">Developed by <span className='text-indigo-500'>{apps?.companyName}</span></p>
        </div>

        <div className="flex flex-wrap gap-12 border-y border-gray-100 py-8">
          <div className="flex flex-col gap-1">
            <div className="flex items-start gap-2 flex-col">
              <img loading="lazy" src={DownlaodImg} alt='Donwload Icons' className='w-6 h-6'/>
              <span className="text-sm font-semibold uppercase tracking-wider opacity-60">Downloads</span>
            </div>
            <span className="text-4xl font-bold text-gray-900">{apps?.downloads}</span>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-start gap-2 flex-col">
              <img loading="lazy" src={RatingImg} alt='Donwload Icons' className='w-6 h-6'/>
              <span className="text-sm font-semibold uppercase tracking-wider opacity-60">Average Ratings</span>
            </div>
            <span className="text-4xl font-bold text-gray-900">{apps?.ratingAvg}</span>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-start gap-2 flex-col">
              <img loading="lazy" src={ReviewImg} alt='Donwload Icons' className='w-6 h-6'/>
              <span className="text-sm font-semibold uppercase tracking-wider opacity-60">Total Reviews</span>
            </div>
            <span className="text-4xl font-bold text-gray-900">{apps?.reviews}</span>
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button 
            className={`btn btn-lg rounded grow md:grow-0 md:min-w-5 ${isInstalled ? 'btn-disabled bg-base-400' : 'btn-success text-white'}`}
            onClick={() => installApp(apps)}
            disabled={isInstalled}
          >
            {isInstalled ? (
              <span className="flex items-center gap-2"><CheckCircle size={24} /> Installed</span>
            ) : (
              <span className="flex items-center gap-2"><Download size={24} /> Install Now ({apps?.size})</span>
            )}
          </button>
        </div>
      </div>
    </div>
  </div>

  <div className="py-12 px-6 md:px-12 max-w-7xl mx-auto border-t border-gray-100">
    <h2 className="text-2xl font-bold text-gray-900 mb-8">Ratings</h2>
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={apps?.ratings}
          margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
        >
          <XAxis type="number" hide />
          <YAxis 
            type="category" 
            dataKey="name" 
            axisLine={false} 
            tickLine={false}
            tick={{ fill: '#4b5563', fontSize: 14 }}
          />
          <Tooltip 
            cursor={{ fill: 'transparent' }}
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <Bar dataKey="count" radius={[0, 4, 4, 0]} barSize={24}>
            {apps.ratings.map((entry, index) => (
              <Cell key={`cell-${index}`} fill="#f97316" />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="flex justify-between text-xs text-gray-400 px-12 mt-2">
        <span>0</span>
        <span>3000</span>
        <span>6000</span>
        <span>9000</span>
        <span>12000</span>
      </div>
    </div>
  </div>

  <div className="py-12 px-6 md:px-12 max-w-7xl mx-auto border-t border-gray-100">
    <h2 className="text-2xl font-bold text-gray-900 mb-8">Description</h2>
    <div className="prose prose-lg max-w-none text-gray-600 space-y-8 leading-relaxed">
      <p>{apps?.description}</p>
    </div>
  </div>
    </section>
  );
};

export default AppDetails;