import { WhatsAppButton } from '../common/WhatsAppButton';

export function CallToAction({ treatment }: { treatment?: string }) {
  return (
    <section className="cta-section">
      <div className="cta-glow" />
      <div className="container cta-content">
        <span className="eyebrow">Próximo passo</span>
        <h2>O primeiro passo para cuidar do seu sorriso começa com uma avaliação</h2>
        <p>Converse com a equipe para entender possibilidades, etapas e cuidados indicados para o seu caso.</p>
        <WhatsAppButton origin={treatment ? 'treatment_cta' : 'final_cta'} message={treatment ? `Olá! Acessei a página sobre ${treatment} e gostaria de receber mais informações e agendar uma avaliação.` : undefined} />
      </div>
    </section>
  );
}
