import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import BASE_URL from "../config";

const ImageGalleryContext = createContext();

export const ImageGalleryProvider = ({ children }) => {
  const [image_gallery, setImageGallery] = useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/gallery/`)
      .then(res => setImageGallery(res.data[0]))
      .catch(err => console.error("Setup fetch error:", err));
  }, []);

  return (
    <ImageGalleryContext.Provider value={image_gallery}>
      {children}
    </ImageGalleryContext.Provider>
  );
};

export const useImageGallery = () => useContext(ImageGalleryContext);
