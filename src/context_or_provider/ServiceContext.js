import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import BASE_URL from "../config";

const ServiceContext = createContext();

export const ServiceProvider = ({ children }) => {
  const [service, setService] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/service/`)
      .then(res => setService(res.data))
      .catch(err => console.error("Setup fetch error:", err));
  }, []);

  return (
    <ServiceContext.Provider value={service}>
      {children}
    </ServiceContext.Provider>
  );
};

export const useService = () => useContext(ServiceContext);
