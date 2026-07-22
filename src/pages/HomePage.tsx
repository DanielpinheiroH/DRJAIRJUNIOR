import { ArrowRight, HeartHandshake, ScanLine, ShieldCheck, Sparkles, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { officialAssets } from '../config/assets';
import { clinicConfig, locationLabel } from '../config/clinic';
import { featuredTreatments } from '../data/treatments';
import { authorizedResults } from '../data/results';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { MediaPlaceholder } from '../components/common/MediaPlaceholder';
import { Reveal } from '../components/common/Reveal';
import { SectionHeading } from '../components/common/SectionHeading';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { CallToAction } from '../components/sections/CallToAction';
import { SEO } from '../components/seo/SEO';
import { TreatmentCard } from '../components/treatments/TreatmentCard';

const differentials = [
  [ScanLine, 'Planejamento personalizado', 'Decisões organizadas a partir da avaliação e das necessidades de cada paciente.'],
  [Stethoscope, 'Tecnologia aplicada', 'Recursos podem apoiar diagnóstico, comunicação e execução quando clinicamente indicados.'],
  [HeartHandshake, 'Atendimento humanizado', 'Escuta, clareza e respeito em todas as conversas sobre o tratamento.'],
  [ShieldCheck, 'Estética e função', 'Planejamento que considera saúde, função e harmonia de maneira integrada.'],
];

const steps = ['Primeiro contato', 'Avaliação odontológica', 'Planejamento individual', 'Início do tratamento', 'Acompanhamento'];

const faq = [
  { question: 'Como funciona a primeira avaliação?', answer: 'É um momento para conversar sobre necessidades e expectativas, realizar o exame clínico e definir se exames complementares são necessários.' },
  { question: 'Implante dentário pode ser indicado para qualquer pessoa?', answer: 'Não. A indicação depende de avaliação clínica, histórico de saúde, exames e condições dos tecidos bucais.' },
  { question: 'Quanto tempo dura um tratamento odontológico?', answer: 'O prazo varia de acordo com o diagnóstico, as etapas necessárias e a resposta individual. O planejamento é personalizado.' },
  { question: 'Como saber qual tratamento é mais indicado?', answer: 'A escolha deve ser feita após avaliação profissional, considerando saúde, função, estética, riscos, benefícios e alternativas.' },
  { question: 'Lentes de contato dental são indicadas para todos?', answer: 'Não. Há situações em que opções mais conservadoras podem ser adequadas. Cada caso deve ser analisado individualmente.' },
  { question: 'O protocolo dentário é fixo?', answer: 'Em geral, a prótese protocolo é fixada sobre implantes e sua remoção é feita pelo profissional para manutenção quando necessário.' },
  { question: 'É necessário realizar exames antes do tratamento?', answer: 'Alguns tratamentos exigem exames de imagem, fotografias ou registros digitais. A necessidade é definida na avaliação.' },
];

export default function HomePage() {
  const title = `Dentista em ${locationLabel} | Implantes, Lentes e Reabilitação Oral`;
  return (
    <>
      <SEO title={title} description={`Atendimento odontológico particular em ${locationLabel}, com planejamento personalizado em implantes, protocolo, próteses, lentes e estética do sorriso.`} canonical="/" faq={faq} />
      <section className="hero-home">
        <div className="hero-noise" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><Sparkles size={14} /> Odontologia estética e reabilitação oral</span>
            <h1>Planejamento preciso.<br /><em>Cuidado individual.</em></h1>
            <p>Cada sorriso possui necessidades únicas. Os tratamentos são planejados considerando saúde, função, estética e as expectativas de cada paciente.</p>
            <div className="hero-actions"><WhatsAppButton origin="hero" /><Link to="/tratamentos" className="text-link">Conhecer tratamentos <ArrowRight size={17} /></Link></div>
            <div className="hero-meta"><span>01</span><p>Avaliação profissional</p><span>02</span><p>Planejamento individualizado</p></div>
          </div>
          <div className="hero-visual">
            <div className="hero-frame"><MediaPlaceholder src={officialAssets.dentistaHero} alt={`Retrato profissional de ${clinicConfig.dentistName}`} expectedFile="dentista-hero.webp" priority /></div>
            <div className="hero-signature"><span>Dr.</span><strong>Jair Júnior</strong><small>Odontologia estética · Reabilitação oral</small></div>
          </div>
        </div>
      </section>

      <section className="intro-strip"><div className="container"><p>Clareza para decidir. <em>Precisão para planejar.</em> Cuidado em cada etapa.</p></div></section>

      <section className="section treatments-section"><div className="container">
        <Reveal><SectionHeading eyebrow="Tratamentos em destaque" title="Possibilidades para diferentes necessidades" description="Conheça abordagens que podem integrar um planejamento individualizado após avaliação profissional." /></Reveal>
        <div className="treatment-grid">{featuredTreatments.map((item, index) => <Reveal key={item.slug}><TreatmentCard treatment={item} index={index} /></Reveal>)}</div>
        <div className="center-action"><Link className="button button--outline" to="/tratamentos">Ver todos os tratamentos <ArrowRight size={17} /></Link></div>
      </div></section>

      <section className="section about-preview"><div className="container split-grid">
        <Reveal><div className="about-media"><MediaPlaceholder src={officialAssets.dentistaConsultorio} alt={`Foto profissional de ${clinicConfig.dentistName}`} expectedFile="dentista-consultorio.webp" /><div className="media-label">Material oficial</div></div></Reveal>
        <Reveal><div className="about-copy"><span className="eyebrow">Sobre o profissional</span><h2>Escuta, planejamento e transparência</h2><p>O atendimento é conduzido de forma individualizada, respeitando as necessidades clínicas, funcionais e estéticas de cada paciente.</p><p>Antes de qualquer decisão, possibilidades, limitações e cuidados devem ser discutidos com clareza.</p><Link className="text-link" to="/sobre">Conheça o Dr. Jair Júnior <ArrowRight size={17} /></Link><WhatsAppButton origin="about_preview" variant="outline" /></div></Reveal>
      </div></section>

      <section className="section differentiators"><div className="container">
        <SectionHeading eyebrow="Princípios do atendimento" title="Cuidado pensado nos detalhes" align="center" />
        <div className="differential-grid">{differentials.map(([Icon, title, text], index) => <Reveal key={String(title)}><article><span className="diff-number">0{index + 1}</span><Icon size={25} /><h3>{String(title)}</h3><p>{String(text)}</p></article></Reveal>)}</div>
      </div></section>

      <section className="section process-section"><div className="container">
        <SectionHeading eyebrow="Jornada de cuidado" title="Da primeira conversa ao acompanhamento" description="Uma sequência clara, adaptada às necessidades e ao ritmo de cada tratamento." />
        <ol className="process-list">{steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><h3>{step}</h3></li>)}</ol>
      </div></section>

      <section className="section results-preview"><div className="container">
        <div className="results-heading"><SectionHeading eyebrow="Registros clínicos" title="Casos reais, histórias individuais" description="Materiais disponibilizados na pasta oficial. Nenhum resultado é prometido ou reproduzível de forma idêntica." /><Link className="text-link" to="/resultados">Conhecer resultados <ArrowRight size={17} /></Link></div>
        <div className="results-preview-grid">{authorizedResults.slice(0, 3).map((item) => <img key={item.src} src={item.src} alt={item.alt} width="800" height="1000" loading="lazy" />)}</div>
        <p className="ethics-note">Cada paciente possui características e necessidades próprias. Os resultados podem variar conforme o caso clínico e o planejamento realizado.</p>
      </div></section>

      <section className="section faq-section"><div className="container faq-grid"><SectionHeading eyebrow="Perguntas frequentes" title="Informação para uma decisão consciente" description="As respostas são gerais e não substituem uma avaliação com o cirurgião-dentista." /><FAQAccordion items={faq} /></div></section>
      <CallToAction />
    </>
  );
}
