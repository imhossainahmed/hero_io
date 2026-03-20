import { useParams, useNavigate } from 'react-router-dom';
import { Download, Star, MessageSquare, ShieldCheck, ArrowLeft, CheckCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import DownlaodImg from "../assets/icon-downloads.png";
import RatingImg from "../assets/icon-ratings.png";
import ReviewImg from "../assets/icon-review.png";

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { apps, installApp, installedApps } = useApp();

  const app = apps.find(a => a.id === parseInt(id));
  console.log(app)
  if (!app) {
    return (
      <div className="text-center py-20 space-y-6">
        <h2 className="text-3xl font-bold">App Not Found</h2>
        <button onClick={() => navigate('/apps')} className="btn btn-primary gap-2">
          <ArrowLeft size={20} /> Back to Marketplace
        </button>
      </div>
    );
  }

  const isInstalled = installedApps.some(a => a.id === app.id);
  return (
  <section>
    <div className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row gap-8 items-start">

      <div className="max-w-96 aspect-square bg-white shadow rounded flex items-center justify-center p-12 border border-gray-50">
        <div className="relative w-full h-full">
          <img src={app?.image} alt={app?.title} />
        </div>
      </div>

      <div className="grow space-y-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{app?.title}</h1>
          <p className="text-lg text-gray-500 font-medium">Developed by <span className='text-indigo-500'>{app?.companyName}</span></p>
        </div>

        <div className="flex flex-wrap gap-12 border-y border-gray-100 py-8">
          <div className="flex flex-col gap-1">
            <div className="flex items-start gap-2 flex-col">
              <img src={DownlaodImg} alt='Donwload Icons' className='w-6 h-6'/>
              <span className="text-sm font-semibold uppercase tracking-wider opacity-60">Downloads</span>
            </div>
            <span className="text-4xl font-bold text-gray-900">{app?.downloads}</span>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-start gap-2 flex-col">
              <img src={RatingImg} alt='Donwload Icons' className='w-6 h-6'/>
              <span className="text-sm font-semibold uppercase tracking-wider opacity-60">Average Ratings</span>
            </div>
            <span className="text-4xl font-bold text-gray-900">{app?.ratingAvg}</span>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-start gap-2 flex-col">
              <img src={ReviewImg} alt='Donwload Icons' className='w-6 h-6'/>
              <span className="text-sm font-semibold uppercase tracking-wider opacity-60">Total Reviews</span>
            </div>
            <span className="text-4xl font-bold text-gray-900">{app?.reviews}</span>
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button 
            className={`btn btn-lg rounded grow md:grow-0 md:min-w-5 ${isInstalled ? 'btn-disabled bg-base-200' : 'btn-success text-white'}`}
            onClick={() => installApp(app)}
            disabled={isInstalled}
          >
            {isInstalled ? (
              <span className="flex items-center gap-2"><CheckCircle size={24} /> Installed Now ({app?.size})</span>
            ) : (
              <span className="flex items-center gap-2"><Download size={24} /> Install Now ({app?.size})</span>
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
          data={app?.ratings}
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
            {app.ratings.map((entry, index) => (
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
      <p>{app?.description}</p>
    </div>
  </div>
    </section>
  );
};

export default AppDetails;