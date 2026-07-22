import { Check, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { CallToAction } from '../components/sections/CallToAction';
import { SEO } from '../components/seo/SEO';
import { TreatmentCard } from '../components/treatments/TreatmentCard';
import { TreatmentVisual } from '../components/treatments/TreatmentVisual';
import { getRelatedTreatments, getTreatment } from '../data/treatments';
import { trackEvent } from '../services/analytics';
import { treatmentWhatsAppMessage } from '../utils/contact';
import NotFoundPage from './NotFoundPage';

export default function TreatmentDetailPage() {
  const { slug = '' } = useParams();
  const treatment = getTreatment(slug);
  useEffect(() => { if (treatment) trackEvent('view_treatment', { treatment: treatment.title }); }, [treatment]);
  if (!treatment) return <NotFoundPage />;
  const breadcrumbs = [{ label: 'Tratamentos', href: '/tratamentos' }, { label: treatment.title }];
  return (
    <>
      <SEO title={treatment.seoTitle} description={treatment.seoDescription} canonical={`/tratamentos/${treatment.slug}`} type="article" breadcrumbs={breadcrumbs} faq={treatment.faq} />
      <section className="treatment-hero"><div className="container"><Breadcrumb items={breadcrumbs} /><div className="treatment-hero-grid"><div><span className="eyebrow">{treatment.category}</span><h1>{treatment.title}</h1><p>{treatment.shortDescription}</p><WhatsAppButton origin="treatment_hero" message={treatmentWhatsAppMessage(treatment.title)} /></div><TreatmentVisual slug={treatment.slug} title={treatment.title} /></div></div></section>
      <section className="section treatment-content"><div className="container content-grid"><article>
        <section><span className="section-number">01</span><h2>Entenda o tratamento</h2><p className="lead">{treatment.introduction}</p><p>{treatment.howItWorks}</p></section>
        <section><span className="section-number">02</span><h2>Para quem pode ser indicado</h2><p>A indicação depende das condições clínicas e deve ser definida após avaliação profissional.</p><ul className="check-list">{treatment.indications.map((item) => <li key={item}><Check />{item}</li>)}</ul></section>
        <section><span className="section-number">03</span><h2>Possíveis benefícios</h2><p>Os benefícios variam conforme o diagnóstico, o planejamento e a resposta individual.</p><div className="benefit-grid">{treatment.benefits.map((item, index) => <div key={item}><span>0{index + 1}</span><p>{item}</p></div>)}</div></section>
        <section><span className="section-number">04</span><h2>Etapas do tratamento</h2><ol className="timeline">{treatment.steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><p>{step}</p></li>)}</ol></section>
        <section><span className="section-number">05</span><h2>Cuidados necessários</h2><ul className="check-list">{treatment.care.map((item) => <li key={item}><Check />{item}</li>)}</ul></section>
        <section><span className="section-number">06</span><h2>Dúvidas frequentes</h2><FAQAccordion items={treatment.faq} /></section>
      </article><aside className="treatment-aside"><div><span className="eyebrow">Avaliação individual</span><h2>Converse sobre o seu caso</h2><p>Receba informações sobre possibilidades, exames, etapas e cuidados.</p><WhatsAppButton origin="treatment_sidebar" message={treatmentWhatsAppMessage(treatment.title)} /><small>Os resultados podem variar. Consulte o cirurgião-dentista.</small></div></aside></div></section>
      <section className="section related-section"><div className="container"><div className="results-heading"><div><span className="eyebrow">Continue explorando</span><h2>Tratamentos relacionados</h2></div><Link to="/tratamentos" className="text-link">Ver todos <ChevronRight /></Link></div><div className="treatment-grid">{getRelatedTreatments(treatment).map((item, index) => <TreatmentCard key={item.slug} treatment={item} index={index} />)}</div></div></section>
      <CallToAction treatment={treatment.title} />
    </>
  );
}
