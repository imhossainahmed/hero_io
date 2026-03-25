import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { useApp } from "../../context/useApp";
import Toast from "../../components/Toast";

const Root= () => {
  const { toast } = useApp();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="font-sans bg-base-200">
      <NavBar />
      <main>
        {isLoading ? <div className="w-full flex items-center justify-center h-screen">
            <span className="loading loading-infinity bg-linear-to-r from-violet-700 to-purple-500 loading-xl"></span>
          </div> : <Outlet />}
      </main>
      <Footer />  
      <Toast message={toast} />
    </div>
  );
};

export default Root;
