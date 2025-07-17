import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import BASE_URL from "../config";

const ContactWithMeContext = createContext();

export const ContactWithMeProvider = ({ children }) => {
  const [contactWithMe, setContactWithMe] = useState([]); // ✅ Start with []

  useEffect(() => {
    axios.get(`${BASE_URL}/api/contact/`)
      .then(res => setContactWithMe(res.data)) // ✅ full array set
      .catch(err => console.error("Contact fetch error:", err));
  }, []);

  return (
    <ContactWithMeContext.Provider value={contactWithMe}>
      {children}
    </ContactWithMeContext.Provider>
  );
};

export const useContactWithMe = () => useContext(ContactWithMeContext);
