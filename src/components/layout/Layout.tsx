import { ArrowUp, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { hasContact } from '../../config/clinic';
import { trackEvent } from '../../services/analytics';
import { whatsappUrl } from '../../utils/contact';
import { Footer } from './Footer';
import { Header } from './Header';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export function Layout() {
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackTop(window.scrollY > 700);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo"><Outlet /></main>
      <Footer />
      <a className={`floating-whatsapp ${!hasContact ? 'is-pending' : ''}`} href={whatsappUrl()} target={hasContact ? '_blank' : undefined} rel="noreferrer" onClick={() => trackEvent('click_whatsapp', { origin: 'floating_button' })} aria-label={hasContact ? 'Conversar pelo WhatsApp' : 'WhatsApp pendente de configuração'}><MessageCircle /></a>
      <button className={`back-top ${showBackTop ? 'is-visible' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Voltar ao topo" aria-hidden={!showBackTop} tabIndex={showBackTop ? 0 : -1}><ArrowUp /></button>
      <ScrollToTop />
    </>
  );
}
