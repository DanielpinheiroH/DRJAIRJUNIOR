import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const TreatmentsPage = lazy(() => import('./pages/TreatmentsPage'));
const TreatmentDetailPage = lazy(() => import('./pages/TreatmentDetailPage'));
const ResultsPage = lazy(() => import('./pages/ResultsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function RouteLoading() {
  return <div className="route-loading" role="status"><span />Carregando página…</div>;
}

export default function App() {
  return (
    <Suspense fallback={<RouteLoading />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="sobre" element={<AboutPage />} />
          <Route path="tratamentos" element={<TreatmentsPage />} />
          <Route path="tratamentos/:slug" element={<TreatmentDetailPage />} />
          <Route path="resultados" element={<ResultsPage />} />
          <Route path="contato" element={<ContactPage />} />
          <Route path="politica-de-privacidade" element={<PrivacyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
