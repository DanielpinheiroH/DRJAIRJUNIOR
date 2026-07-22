import { MessageCircle } from 'lucide-react';
import { hasContact } from '../../config/clinic';
import { trackEvent } from '../../services/analytics';
import { whatsappUrl } from '../../utils/contact';

interface WhatsAppButtonProps {
  message?: string;
  label?: string;
  origin: string;
  variant?: 'primary' | 'outline';
  className?: string;
}

export function WhatsAppButton({
  message,
  label = 'Agendar pelo WhatsApp',
  origin,
  variant = 'primary',
  className = '',
}: WhatsAppButtonProps) {
  const href = whatsappUrl(message);
  return (
    <a
      href={href}
      target={hasContact ? '_blank' : undefined}
      rel={hasContact ? 'noreferrer' : undefined}
      className={`button button--${variant} ${!hasContact ? 'button--pending' : ''} ${className}`}
      onClick={() => trackEvent('click_whatsapp', { origin, button_text: label })}
      aria-label={hasContact ? label : `${label}. Número pendente de configuração.`}
      title={!hasContact ? 'Configure o WhatsApp em src/config/clinic.ts' : undefined}
    >
      <MessageCircle size={18} aria-hidden="true" />
      {label}
    </a>
  );
}
