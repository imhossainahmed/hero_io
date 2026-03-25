import { Link } from 'react-router-dom';
import ErrorImg from "../assets/error-404.png";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ErrorPage = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center h-screen justify-center min-h-[60vh] text-center space-y-8 px-4">
        <div>
          <img loading="lazy" src={ErrorImg} alt='404 Image' className='w-96'/>
        </div>
        <div className="space-y-4">
          <h2 className="text-4xl font-bold uppercase">Oops, page not found!</h2>
          <p className="text-xl text-base-content/60 max-w-md mx-auto">
            The page you are looking for is not available.
          </p>
        </div>

        <Link href="/" className="btn bg-linear-to-r from-violet-700 to-purple-500 text-white btn-lg w-54">GO BACK!</Link>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
