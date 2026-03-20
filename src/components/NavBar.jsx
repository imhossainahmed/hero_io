import Logo from "../assets/logo.png";
import { Link, useLocation } from 'react-router-dom';
import { Github, Menu } from 'lucide-react';
import { cn } from '../utils/utils';

const NavBar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Apps', path: '/apps' },
    { name: 'Installation', path: '/installation' },
  ];

  return (
    <div className='bg-base-100 sticky z-1 top-0 shadow-sm'>
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <Menu size={12}/>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={cn(
                    "font-bold text-base hover:text-primary transition-colors p-0 bg-transparent!",
                    location.pathname === link.path ? "text-primary border-b-2 border-primary rounded-none" : "text-base-content/70"
                  )}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl bg-linear-to-r from-violet-700 to-purple-500 bg-clip-text text-transparent"><img src={Logo} alt="Hero io Logo" className="w-8 h-8"/> HERO.IO</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={cn(
                    "font-medium text-base hover:text-primary transition-colors p-0 bg-transparent!",
                    location.pathname === link.path ? "text-primary border-b-2 border-primary rounded-none" : "text-base-content/70"
                  )}>
                    {link.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div className="navbar-end">
          <a href='/' className="btn bg-linear-to-t from-violet-700 rounded-md to-purple-500 text-white">
            <Github size={20}/>
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;