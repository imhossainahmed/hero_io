import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { useApp } from "../../context/useApp";
import Toast from "../../components/Toast";

const Root= () => {
  const { toast, isLoading } = useApp();
  return (
    <div className="font-sans">
      <NavBar />
      <main className="grow container mx-auto px-4 py-8">
        {isLoading ? <div className="w-full flex items-center justify-center h-40">
            <span className="loading loading-infinity loading-lg"></span>
          </div> : <Outlet />}
      </main>
      <Footer />  
      <Toast message={toast} />
    </div>
  );
};

export default Root;
