import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [apps, setApps] = useState([]);
  
  const [isLoading, setIsLoading] = useState(true);
  const [toast, setToast] = useState(null);

    useEffect(() => {
    const fetchApps = async () => {
      try{
        const res = await fetch("/apps.json");
        const result = await res.json();
        console.log(res)
        setApps(result);
      } catch(err) {
        console.log("Apps Loading Error", err)
      } finally {
        setIsLoading(false)
      }
    };
    fetchApps()
  }, [])


  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <AppContext.Provider value={{ 
      apps, 
      isLoading, 
      setIsLoading,
      toast
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
