import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { domAnimation, LazyMotion } from 'framer-motion';
import App from './App';
import './styles/global.css';
import './styles/theme-light.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <LazyMotion features={domAnimation} strict>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LazyMotion>
    </HelmetProvider>
  </StrictMode>,
);
