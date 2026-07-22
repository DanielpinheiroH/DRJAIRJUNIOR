import { WhatsAppButton } from '../common/WhatsAppButton';

export function CallToAction({ treatment }: { treatment?: string }) {
  return (
    <section className="cta-section">
      <div className="container cta-content">
        <span className="eyebrow">Seu próximo passo</span>
        <h2>Um cuidado de excelência começa com uma boa conversa.</h2>
        <p>Solicite uma avaliação para compreender possibilidades, etapas e cuidados indicados para o seu caso.</p>
        <WhatsAppButton origin={treatment ? 'treatment_cta' : 'final_cta'} message={treatment ? `Olá! Acessei a página sobre ${treatment} e gostaria de receber mais informações e agendar uma avaliação.` : undefined} />
      </div>
    </section>
  );
}
