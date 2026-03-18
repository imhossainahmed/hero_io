import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const Root= () => {
  return (
    <div className="font-sans">
      <NavBar />
      <Outlet />
      <Footer />  
    </div>
  );
};

export default Root;
