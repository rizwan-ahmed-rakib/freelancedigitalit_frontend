import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import BASE_URL from "../config";

const AboutContext = createContext();

export const AboutProvider = ({ children }) => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/about/`)
      .then(res => setAbout(res.data[0]))
      .catch(err => console.error("About fetch error:", err));
  }, []);

  return (
    <AboutContext.Provider value={about}>
      {children}
    </AboutContext.Provider>
  );
};

export const useAbout = () => useContext(AboutContext);
