import { CheckCircle2 } from 'lucide-react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { MediaPlaceholder } from '../components/common/MediaPlaceholder';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { CallToAction } from '../components/sections/CallToAction';
import { SEO } from '../components/seo/SEO';
import { officialAssets } from '../config/assets';
import { clinicConfig } from '../config/clinic';

const breadcrumbs = [{ label: 'Sobre' }];

export default function AboutPage() {
  return (
    <>
      <SEO title={`Sobre ${clinicConfig.dentistName} | Atendimento odontológico`} description="Conheça a filosofia de atendimento baseada em escuta, planejamento, transparência e cuidado individualizado." canonical="/sobre" breadcrumbs={breadcrumbs} />
      <section className="internal-hero"><div className="container"><Breadcrumb items={breadcrumbs} /><span className="eyebrow">Sobre o profissional</span><h1>Dr. Jair Júnior<br /><em>de Freitas</em></h1><p>Odontologia estética e reabilitação oral com atenção às necessidades particulares de cada paciente.</p></div></section>
      <section className="section"><div className="container split-grid about-page-grid">
        <div className="about-media tall"><MediaPlaceholder src={officialAssets.dentistaConsultorio} alt={`Retrato profissional de ${clinicConfig.dentistName}`} expectedFile="dentista-consultorio.webp" /></div>
        <div className="about-copy"><span className="eyebrow">Filosofia de atendimento</span><h2>Escutar antes de planejar</h2><p>O atendimento é baseado em escuta, planejamento e transparência. Cada tratamento é conduzido de forma individualizada, respeitando necessidades clínicas, funcionais e estéticas.</p><p>A indicação depende de avaliação profissional. Possibilidades, limitações, etapas e cuidados são discutidos antes do início do tratamento.</p>
          <div className="info-pending"><strong>Dados profissionais pendentes</strong><p>CRO, formação acadêmica e especializações serão publicados somente após confirmação documental.</p></div>
          <WhatsAppButton origin="about_page" />
        </div>
      </div></section>
      <section className="section values-section"><div className="container"><h2>Princípios que orientam o atendimento</h2><div className="values-grid">{['Avaliação individualizada', 'Comunicação transparente', 'Planejamento responsável', 'Acompanhamento profissional'].map((value) => <article key={value}><CheckCircle2 /><h3>{value}</h3><p>Cada decisão considera o contexto clínico e os objetivos discutidos durante a avaliação.</p></article>)}</div></div></section>
      <CallToAction />
    </>
  );
}
