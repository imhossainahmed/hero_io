import Logo from "../assets/logo.png";
import { LayoutGrid, Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-8 border-b border-white/10">
          <Link to="/" className="flex items-center gap-2 btn btn-ghost text-xl">
            <img loading="lazy" src={Logo} alt="Hero io Logo" className="w-8 h-8"/> <span className="text-2xl font-black tracking-tighter">HERO.IO</span>
          </Link>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <h3 className="font-bold text-lg">Social Links</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors"><Twitter size={24} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Linkedin size={24} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Github size={24} /></a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 text-center text-white/40 text-sm font-medium">
          Copyright © 2026 - All right reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
