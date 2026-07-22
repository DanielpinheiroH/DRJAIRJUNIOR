import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { displayName } from '../../config/clinic';
import { officialAssets } from '../../config/assets';
import { WhatsAppButton } from '../common/WhatsAppButton';

const nav = [
  ['Início', '/'], ['Sobre', '/sobre'], ['Tratamentos', '/tratamentos'],
  ['Resultados', '/resultados'], ['Contato', '/contato'],
];

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label={`${displayName} — início`}>
          {officialAssets.logoPrincipal ? (
            <img src={officialAssets.logoPrincipal} alt={displayName} width="176" height="52" />
          ) : (
            <><span className="brand-mark">D</span><span>{displayName}</span></>
          )}
        </Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {nav.map(([label, to]) => <NavLink key={to} to={to}>{label}</NavLink>)}
        </nav>
        <WhatsAppButton origin="header" label="Agendar avaliação" className="header-cta" />
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Fechar menu' : 'Abrir menu'}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <nav aria-label="Navegação móvel">
          {nav.map(([label, to], index) => <NavLink key={to} to={to} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}</NavLink>)}
          <WhatsAppButton origin="menu_mobile" />
        </nav>
      </div>
    </header>
  );
}
