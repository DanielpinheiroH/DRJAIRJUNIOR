import { Camera, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { clinicConfig, displayName } from '../../config/clinic';
import { officialAssets } from '../../config/assets';
import { featuredTreatments } from '../../data/treatments';
import { trackEvent } from '../../services/analytics';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brand" aria-label={`${displayName} — início`}>
            {officialAssets.logoPrincipal ? <img src={officialAssets.logoPrincipal} alt={displayName} width="195" height="64" loading="lazy" /> : <><span className="brand-mark">D</span><span>{displayName}</span></>}
          </Link>
          <p>Atendimento odontológico particular com escuta, transparência e planejamento individualizado.</p>
        </div>
        <div><h2>Navegação</h2><Link to="/sobre">Sobre</Link><Link to="/tratamentos">Tratamentos</Link><Link to="/resultados">Resultados</Link><Link to="/contato">Contato</Link></div>
        <div><h2>Tratamentos</h2>{featuredTreatments.map((item) => <Link key={item.slug} to={`/tratamentos/${item.slug}`}>{item.title}</Link>)}</div>
        <div className="footer-contact"><h2>Contato</h2>
          {clinicConfig.phone && <a href={`tel:${clinicConfig.phone}`} onClick={() => trackEvent('click_phone', { origin: 'footer' })}><Phone size={15} />{clinicConfig.phone}</a>}
          {clinicConfig.email && <a href={`mailto:${clinicConfig.email}`} onClick={() => trackEvent('click_email', { origin: 'footer' })}><Mail size={15} />{clinicConfig.email}</a>}
          {clinicConfig.address && <span><MapPin size={15} />{clinicConfig.address}</span>}
          {clinicConfig.instagram && <a href={clinicConfig.instagram} target="_blank" rel="noreferrer" onClick={() => trackEvent('click_instagram', { origin: 'footer' })}><Camera size={15} />Instagram</a>}
          {!clinicConfig.phone && !clinicConfig.email && !clinicConfig.address && <Link to="/contato">Fale com a equipe</Link>}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {displayName}. Todos os direitos reservados.</span>
        {clinicConfig.cro && <span>{clinicConfig.cro}</span>}
        <Link to="/politica-de-privacidade">Privacidade e LGPD</Link>
      </div>
    </footer>
  );
}
