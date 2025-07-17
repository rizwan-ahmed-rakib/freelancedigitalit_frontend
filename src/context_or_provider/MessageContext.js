import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import BASE_URL from "../config";

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/message/`)
      .then(res => setMessage(res.data[0]))
      .catch(err => console.error("Setup fetch error:", err));
  }, []);

  return (
    <MessageContext.Provider value={message}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessage = () => useContext(MessageContext);
