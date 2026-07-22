import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { domAnimation, LazyMotion } from 'framer-motion';
import App from './App';
import './styles/global.css';
import './styles/theme-light.css';

const moduleReloadKey = 'dr-jair-module-reload';
const recoverFromStaleModule = (event: Event | PromiseRejectionEvent) => {
  const reason = event instanceof PromiseRejectionEvent ? String(event.reason) : '';
  const isModuleFailure = event.type === 'vite:preloadError'
    || /Failed to fetch dynamically imported module|Failed to load module script/i.test(reason);

  if (!isModuleFailure) return;

  event.preventDefault();
  const lastAttempt = Number(sessionStorage.getItem(moduleReloadKey) || 0);
  if (Date.now() - lastAttempt < 30_000) return;

  sessionStorage.setItem(moduleReloadKey, String(Date.now()));
  window.location.reload();
};

window.addEventListener('vite:preloadError', recoverFromStaleModule);
window.addEventListener('unhandledrejection', recoverFromStaleModule);

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
