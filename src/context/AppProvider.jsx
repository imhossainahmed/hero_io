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

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <AppContext.Provider
      value={{
        apps,
        isLoading,
        installedApps,
        setInstalledApps,
        toast,
        showToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};