import React from 'react';
import { SetupProvider } from './SetupContext';
import { AboutProvider } from './AboutContext';
import {ContactWithMeProvider} from './ContactContext';
import { ServiceProvider } from './ServiceContext';
import { ImageGalleryProvider } from './GalleryContext';
import { MessageProvider } from './MessageContext';

const RootProvider = ({ children }) => {
  return (
    <SetupProvider>
      <AboutProvider>
        <ContactWithMeProvider>
          <ServiceProvider>
            <ImageGalleryProvider>
              <MessageProvider>
                {children}
              </MessageProvider>
            </ImageGalleryProvider>
          </ServiceProvider>
        </ContactWithMeProvider>
      </AboutProvider>
    </SetupProvider>
  );
};

export default RootProvider;
