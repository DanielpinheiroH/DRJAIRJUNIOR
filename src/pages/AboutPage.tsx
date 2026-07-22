import { HeartHandshake, MessageCircle, ScanLine, ShieldCheck } from 'lucide-react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { MediaPlaceholder } from '../components/common/MediaPlaceholder';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { CallToAction } from '../components/sections/CallToAction';
import { SEO } from '../components/seo/SEO';
import { officialAssets } from '../config/assets';
import { clinicConfig } from '../config/clinic';

const breadcrumbs = [{ label: 'Sobre' }];

const principles = [
  [HeartHandshake, 'Escuta', 'A consulta começa pela compreensão das necessidades, do histórico e das expectativas de cada paciente.'],
  [ScanLine, 'Avaliação', 'O contexto clínico orienta exames, possibilidades e limites que precisam ser considerados.'],
  [MessageCircle, 'Decisão', 'Alternativas e cuidados são apresentados com clareza para apoiar uma escolha consciente.'],
  [ShieldCheck, 'Acompanhamento', 'O cuidado continua com orientações e revisões definidas conforme cada tratamento.'],
];

export default function AboutPage() {
  return (
    <>
      <SEO title={`Sobre ${clinicConfig.dentistName} | Atendimento odontológico`} description="Conheça a filosofia de atendimento baseada em escuta, planejamento, transparência e cuidado individualizado." canonical="/sobre" breadcrumbs={breadcrumbs} />
      <section className="internal-hero about-hero"><div className="container"><Breadcrumb items={breadcrumbs} /><span className="eyebrow">Sobre o profissional</span><h1>Conhecimento técnico.<br /><em>Cuidado que acolhe.</em></h1><p>Dr. Jair Júnior de Freitas conduz uma odontologia pautada por escuta, planejamento e respeito às necessidades particulares de cada paciente.</p></div></section>
      <section className="section"><div className="container split-grid about-page-grid">
        <div className="about-media tall"><MediaPlaceholder src={officialAssets.dentistaConsultorio} alt={`Retrato profissional de ${clinicConfig.dentistName}`} expectedFile="dentista-consultorio.webp" /></div>
        <div className="about-copy"><span className="eyebrow">Filosofia de atendimento</span><h2>Escutar antes de planejar</h2><p className="lead">Cada sorriso pertence a uma história. Por isso, o cuidado começa muito antes de qualquer procedimento.</p><p>O atendimento é conduzido de forma individualizada, respeitando necessidades clínicas, funcionais e estéticas. A indicação depende de avaliação profissional, e possibilidades, limitações, etapas e cuidados são discutidos antes do início do tratamento.</p>
          {(clinicConfig.cro || clinicConfig.education || clinicConfig.specializations) && <div className="professional-facts">
            {clinicConfig.cro && <span><small>Registro profissional</small><strong>{clinicConfig.cro}</strong></span>}
            {clinicConfig.education && <span><small>Formação</small><strong>{clinicConfig.education}</strong></span>}
            {clinicConfig.specializations && <span><small>Especializações</small><strong>{clinicConfig.specializations}</strong></span>}
          </div>}
          <WhatsAppButton origin="about_page" />
        </div>
      </div></section>
      <section className="section story-section"><div className="container story-grid"><div><span className="eyebrow">Missão</span><h2>Cuidar com responsabilidade, clareza e presença.</h2></div><div><p>Saúde, função e estética são dimensões conectadas. O objetivo do planejamento é organizar essas necessidades de forma equilibrada, respeitando o momento e as particularidades de cada pessoa.</p><blockquote>“Uma decisão bem informada também faz parte de um cuidado de excelência.”</blockquote></div></div></section>
      <section className="section values-section"><div className="container"><span className="eyebrow">Uma jornada consciente</span><h2>Como o cuidado ganha forma</h2><div className="values-grid">{principles.map(([Icon, title, text], index) => <article key={String(title)}><span className="value-index">0{index + 1}</span><Icon /><h3>{String(title)}</h3><p>{String(text)}</p></article>)}</div></div></section>
      <CallToAction />
    </>
  );
}
