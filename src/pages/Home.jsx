import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Apple, ArrowRight, Star, Download, ShieldCheck } from 'lucide-react';
import AppCard from '../components/AppCard.jsx';
import { useApp } from '../context/AppContext.jsx';
import HeroBanner from "../assets/hero.png";
import PlayStoreImg from "../assets/playstore.png";
import AppStoreImg from "../assets/appstore.png";

const Home = () => {
  const { apps } = useApp();
  const topApps = apps.slice(0, 8);

  const stats = [
    { label: 'Total Downloads', value: '29.6M', desc: '21% More Than Last Month' },
    { label: 'Total Reviews', value: '906K', desc: '46% More Than Last Month' },
    { label: 'Active Apps', value: '132+', desc: '31 More Will Launch' },
  ];

  return (
    <div className="">
      <section className="pt-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-black text-[#1E293B] leading-tight">
            We Build <br/><span className="text-[#8B5CF6]">Productive</span> Apps
          </h2>
          <p className="text-lg capitalize text-base-content/60 max-w-5xl mx-auto leading-relaxed">
            At Hero.IO, We craft innovative apps designed to make everyday life simpler, smarter, and more exciting. 
            Our goal is to turn your ideas into digital experiences that truly make an impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button className="btn bg-white hover:bg-base-100 text-base-content border-base-300 rounded-lg px-8 gap-3 shadow-sm">
              <img src={PlayStoreImg} alt="Google Play" className="h-6" />
              <span className="font-bold">Google Play</span>
            </button>
            <button className="btn bg-white hover:bg-base-100 text-base-content border-base-300 rounded-lg px-8 gap-3 shadow-sm">
              <img src={AppStoreImg} alt="App Store" className="h-6" />
              <span className="font-bold">App Store</span>
            </button>
          </div>
          
          <div className="pt-12 mx-auto">
            <img 
              src={HeroBanner} 
              alt="Hero App" 
              className="w-full" 
            />
          </div>
        </div>
      </section>
      <section className="bg-[#8B5CF6] py-20 px-4 text-white">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <h2 className="text-4xl font-black">Trusted By Millions, Built For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <p className="text-white/70 font-bold uppercase tracking-widest text-sm">{stat.label}</p>
                <div className="text-6xl font-black">{stat.value}</div>
                <p className="text-white/60 text-sm font-medium">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Apps Section */}
      <section className="py-24 px-4 bg-base-100">
        <div className="w-11/12 mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-black text-[#1E293B]">Trending Apps</h2>
            <p className="text-lg text-base-content/60">Explore All Trending Apps on the Market developed by us</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {topApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>

          <div className="flex justify-center pt-8">
            <Link to="/apps" className="btn bg-[#8B5CF6] hover:bg-[#7C3AED] text-white border-none rounded-lg px-12 btn-lg font-bold">
              Show All
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
