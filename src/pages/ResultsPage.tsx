import { Maximize2, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { CallToAction } from '../components/sections/CallToAction';
import { SEO } from '../components/seo/SEO';
import { authorizedResults } from '../data/results';
import { trackEvent } from '../services/analytics';

const breadcrumbs = [{ label: 'Resultados' }];

export default function ResultsPage() {
  const [selected, setSelected] = useState<number | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (selected === null) return;
    closeButton.current?.focus();
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setSelected(null);
    document.addEventListener('keydown', close);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', close); document.body.style.overflow = ''; };
  }, [selected]);
  return (
    <>
      <SEO title="Resultados clínicos | Dr. Jair Júnior" description="Registros clínicos individuais disponibilizados nos materiais oficiais, apresentados com contexto ético e sem promessa de resultado." canonical="/resultados" breadcrumbs={breadcrumbs} />
      <section className="internal-hero"><div className="container"><Breadcrumb items={breadcrumbs} /><span className="eyebrow">Registros clínicos</span><h1>Cada caso,<br /><em>uma história individual.</em></h1><p>Imagens reais fornecidas na pasta oficial. A publicação definitiva depende da confirmação dos respectivos termos de autorização.</p></div></section>
      <section className="section"><div className="container">
        <div className="ethics-banner"><strong>Transparência e responsabilidade</strong><p>As imagens apresentadas representam casos individuais. Cada paciente possui características próprias, e os resultados podem variar conforme o planejamento, as condições clínicas e os cuidados adotados.</p></div>
        <div className="results-gallery">{authorizedResults.map((item, index) => <figure key={item.src}><button onClick={() => { setSelected(index); trackEvent('view_result', { result_index: index + 1 }); }} aria-label={`Ampliar ${item.alt}`}><img src={item.src} alt={item.alt} width="800" height="1000" loading="lazy" /><span><Maximize2 /> Ampliar registro</span></button><figcaption>Registro clínico {String(index + 1).padStart(2, '0')} · Tratamento não informado</figcaption></figure>)}</div>
        <p className="authorization-note">Antes da publicação, confirme que cada paciente possui termo específico de autorização de uso de imagem.</p>
        <div className="center-action"><WhatsAppButton origin="results_gallery" /></div>
      </div></section>
      {selected !== null && <div className="image-modal" role="dialog" aria-modal="true" aria-label="Visualização ampliada do registro clínico" onMouseDown={(event) => event.target === event.currentTarget && setSelected(null)}><button ref={closeButton} onClick={() => setSelected(null)} aria-label="Fechar imagem"><X /></button><img src={authorizedResults[selected].src} alt={authorizedResults[selected].alt} /><p>Os resultados podem variar. Cada caso é planejado individualmente.</p></div>}
      <CallToAction />
    </>
  );
}
