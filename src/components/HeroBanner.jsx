import HeroImg from "../assets/hero.png";
import PlayStoreImg from "../assets/playstore.png";
import AppStoreImg from "../assets/appstore.png";

const HeroBanner = () => {
  return (
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
      <a href='https://play.google.com/store/apps?hl=en' target='_blank' className="btn bg-white hover:bg-base-100 text-base-content border-base-300 rounded-lg px-8 gap-3 shadow-sm">
        <img loading="lazy" src={PlayStoreImg} alt="Google Play" className="h-6" />
        <span className="font-bold">Google Play</span>
      </a>
      <a href='https://www.apple.com/app-store/' target='_blank' className="btn bg-white hover:bg-base-100 text-base-content border-base-300 rounded-lg px-8 gap-3 shadow-sm">
        <img loading="lazy" src={AppStoreImg} alt="App Store" className="h-6" />
        <span className="font-bold">App Store</span>
      </a>
    </div>
    
    <div className="pt-12 mx-auto">
      <img 
        src={HeroImg} 
        alt="Hero App" 
        className="w-full" 
      />
    </div>
  </div>
  </section>
  );
};

export default HeroBanner;