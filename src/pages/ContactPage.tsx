import { FormEvent, useState } from 'react';
import { Camera, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { SEO } from '../components/seo/SEO';
import { clinicConfig, hasContact, locationLabel } from '../config/clinic';
import { treatments } from '../data/treatments';
import { trackEvent } from '../services/analytics';
import { whatsappUrl } from '../utils/contact';

const breadcrumbs = [{ label: 'Contato' }];

export default function ContactPage() {
  const [status, setStatus] = useState('');
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get('website')) return;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const message = `Olá! Acessei o site e gostaria de agendar uma avaliação odontológica.%0A%0ANome: ${data.get('name')}%0ATelefone: ${data.get('phone')}%0AE-mail: ${data.get('email') || 'Não informado'}%0ATratamento: ${data.get('treatment') || 'Não informado'}%0AMensagem: ${data.get('message')}`;
    trackEvent('submit_contact', { origin: 'contact_form' });
    if (!hasContact) { setStatus('Formulário validado. Configure o WhatsApp em src/config/clinic.ts para habilitar o envio.'); return; }
    window.open(whatsappUrl(decodeURIComponent(message)), '_blank', 'noopener,noreferrer');
    setStatus('Os dados foram preparados. Conclua o envio na janela do WhatsApp.');
  };
  return (
    <>
      <SEO title={`Contato | Dentista em ${locationLabel}`} description="Entre em contato para conversar sobre avaliação odontológica, tratamentos e planejamento individualizado." canonical="/contato" breadcrumbs={breadcrumbs} />
      <section className="internal-hero"><div className="container"><Breadcrumb items={breadcrumbs} /><span className="eyebrow">Contato</span><h1>Vamos conversar<br /><em>sobre o seu cuidado?</em></h1><p>Envie seus dados para preparar uma mensagem de WhatsApp. O formulário não armazena informações.</p></div></section>
      <section className="section contact-section"><div className="container contact-grid">
        <div className="contact-info"><span className="eyebrow">Canais de atendimento</span><h2>Escolha como prefere entrar em contato</h2><p>Dados não preenchidos ficam ocultos até a confirmação oficial.</p>
          <div className="contact-cards">
            {clinicConfig.phone && <a href={`tel:${clinicConfig.phone}`} onClick={() => trackEvent('click_phone', { origin: 'contact_page' })}><Phone /><span><small>Telefone</small>{clinicConfig.phone}</span></a>}
            {clinicConfig.email && <a href={`mailto:${clinicConfig.email}`} onClick={() => trackEvent('click_email', { origin: 'contact_page' })}><Mail /><span><small>E-mail</small>{clinicConfig.email}</span></a>}
            {clinicConfig.address && <div><MapPin /><span><small>Endereço</small>{clinicConfig.address}</span></div>}
            {clinicConfig.openingHours && <div><Clock /><span><small>Horários</small>{clinicConfig.openingHours}</span></div>}
            {clinicConfig.instagram && <a href={clinicConfig.instagram} target="_blank" rel="noreferrer" onClick={() => trackEvent('click_instagram', { origin: 'contact_page' })}><Camera /><span><small>Instagram</small>Acessar perfil</span></a>}
          </div>
          {!clinicConfig.phone && !clinicConfig.email && !clinicConfig.address && <div className="info-pending"><strong>Contato pendente</strong><p>Telefone, endereço, horários e redes sociais aguardam confirmação.</p></div>}
          <WhatsAppButton origin="contact_info" />
        </div>
        <form className="contact-form" onSubmit={handleSubmit} noValidate><h2>Prepare sua mensagem</h2><p>Você revisará o conteúdo antes de enviá-lo pelo WhatsApp.</p>
          <div className="form-grid"><label>Nome *<input name="name" required minLength={2} autoComplete="name" /></label><label>Telefone *<input name="phone" type="tel" required minLength={8} autoComplete="tel" /></label></div>
          <label>E-mail<input name="email" type="email" autoComplete="email" /></label>
          <label>Tratamento de interesse<select name="treatment" defaultValue=""><option value="">Selecione</option>{treatments.map((item) => <option key={item.slug}>{item.title}</option>)}</select></label>
          <label>Mensagem *<textarea name="message" required minLength={10} rows={5} /></label>
          <label className="honeypot" aria-hidden="true">Não preencha<input name="website" tabIndex={-1} autoComplete="off" /></label>
          <label className="consent"><input type="checkbox" required /> <span>Concordo em enviar estes dados pelo WhatsApp e li a <a href="/politica-de-privacidade">Política de Privacidade</a>.</span></label>
          <button className="button button--primary" type="submit">Preparar mensagem</button>
          {status && <p className="form-status" role="status">{status}</p>}
        </form>
      </div></section>
    </>
  );
}
