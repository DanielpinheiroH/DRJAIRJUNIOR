import { clinicConfig } from '../config/clinic';

export const defaultWhatsAppMessage =
  'Olá! Acessei o site e gostaria de agendar uma avaliação odontológica.';

export function whatsappUrl(message = defaultWhatsAppMessage) {
  const digits = clinicConfig.whatsapp.replace(/\D/g, '');
  if (!digits) return '#contato-pendente';
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function treatmentWhatsAppMessage(treatment: string) {
  return `Olá! Acessei a página sobre ${treatment} e gostaria de receber mais informações e agendar uma avaliação.`;
}
