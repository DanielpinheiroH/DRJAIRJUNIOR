import {
  Activity,
  CircleDot,
  Droplets,
  HeartPulse,
  Layers3,
  Moon,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from 'lucide-react';

const iconBySlug = {
  'protocolo-dentario': Layers3,
  'implante-dentario': CircleDot,
  'lentes-de-contato-dental': Sparkles,
  'proteses-dentarias': Layers3,
  'facetas-dentarias': Sparkles,
  'coroas-dentarias': ShieldCheck,
  'clareamento-dental': Droplets,
  'restauracoes-esteticas': Sparkles,
  'reabilitacao-oral': HeartPulse,
  'planejamento-digital-do-sorriso': ScanLine,
  'limpeza-e-prevencao': ShieldCheck,
  'tratamento-de-canal': Activity,
  periodontia: HeartPulse,
  bruxismo: Moon,
  'placas-de-protecao': ShieldCheck,
  'cirurgias-odontologicas': Stethoscope,
  'avaliacao-odontologica': ScanLine,
} as const;

export function TreatmentVisual({ slug, title }: { slug: string; title: string }) {
  const Icon = iconBySlug[slug as keyof typeof iconBySlug] ?? ScanLine;

  return (
    <div className={`treatment-visual treatment-visual--${slug}`} role="img" aria-label={`Representação gráfica de ${title}`}>
      <span className="treatment-visual__orbit" aria-hidden="true" />
      <span className="treatment-visual__line" aria-hidden="true" />
      <span className="treatment-visual__icon" aria-hidden="true"><Icon /></span>
      <small aria-hidden="true">Planejamento individual</small>
    </div>
  );
}
