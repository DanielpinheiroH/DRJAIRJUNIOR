import { ArrowUp, MessageCircle } from 'lucide-react';
import { useEffect } from 'react';
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
  return (
    <>
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo"><Outlet /></main>
      <Footer />
      <a className={`floating-whatsapp ${!hasContact ? 'is-pending' : ''}`} href={whatsappUrl()} target={hasContact ? '_blank' : undefined} rel="noreferrer" onClick={() => trackEvent('click_whatsapp', { origin: 'floating_button' })} aria-label={hasContact ? 'Conversar pelo WhatsApp' : 'WhatsApp pendente de configuração'}><MessageCircle /></a>
      <button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Voltar ao topo"><ArrowUp /></button>
      <ScrollToTop />
    </>
  );
}
