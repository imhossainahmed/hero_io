import { useState, useEffect } from "react";
import { AppContext } from "./AppContext";

export const AppProvider = ({ children }) => {
  const [apps, setApps] = useState([]);

  const [installedApps, setInstalledApps] = useState(() => {
    const saved = localStorage.getItem("installedApps");
    return saved ? JSON.parse(saved) : [];
  });

  const [isLoading, setIsLoading] = useState(true);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const res = await fetch("/apps.json");
        const result = await res.json();
        setApps(result);
      } catch (err) {
        console.log("Apps Loading Error", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchApps();
  }, []);

  useEffect(() => {
    localStorage.setItem('installedApps', JSON.stringify(installedApps));
  }, [installedApps]);

  const installApp = (app) => {
    if(!installedApps.find(a => a.id === app.id)) {
      setInstalledApps([...installedApps, app])
      showToast(`${app.title} installed successfully!`);
    }
  }

  const uninstallApp = (appId) => {
    const app = installedApps.find(a => a.id === appId);
    setInstalledApps(installedApps.filter(a => a.id !== appId));
    if (app) {
      showToast(`${app.title} uninstalled.`);
    }
  };

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <AppContext.Provider
      value={{
        apps,
        toast,
        showToast,
        isLoading,
        installApp,
        uninstallApp,
        installedApps,
        setInstalledApps,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};