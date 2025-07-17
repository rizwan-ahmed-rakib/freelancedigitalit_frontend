// import React, { createContext, useContext, useEffect, useState } from 'react';
// import axios from 'axios';
// import BASE_URL from "../config";
//
// const MessageContext = createContext();
//
// export const MessageProvider = ({ children }) => {
//   const [message, setMessage] = useState(null);
//
//   useEffect(() => {
//     axios.get(`${BASE_URL}/api/message/`)
//       .then(res => setMessage(res.data[0]))
//       .catch(err => console.error("Setup fetch error:", err));
//   }, []);
//
//   return (
//     <MessageContext.Provider value={message}>
//       {children}
//     </MessageContext.Provider>
//   );
// };
//
// export const useMessage = () => useContext(MessageContext);






// context_or_provider/MessageContext.js

import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import BASE_URL from "../config";

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/message/`)
      .then(res => setMessages(res.data))
      .catch(err => console.error("Setup fetch error:", err));
  }, []);

  // 🔵 নতুন মেসেজ POST করার ফাংশন
  const postMessage = async (formData) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/message/`, formData);
      setMessages(prev => [...prev, response.data]); // নতুন মেসেজ লিস্টে যোগ করুন
      return response.data;
    } catch (error) {
      console.error("Post error:", error);
      throw error;
    }
  };

  return (
    <MessageContext.Provider value={{ messages, postMessage }}>
      {children}
    </MessageContext.Provider>
  );
};

// 🔵 কাস্টম হুক
export const useMessage = () => useContext(MessageContext);
