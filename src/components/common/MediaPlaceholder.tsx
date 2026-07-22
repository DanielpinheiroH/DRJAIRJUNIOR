import { Image, Sparkles } from 'lucide-react';

interface MediaPlaceholderProps {
  src?: string | null;
  alt: string;
  expectedFile: string;
  className?: string;
  priority?: boolean;
}

export function MediaPlaceholder({
  src,
  alt,
  expectedFile,
  className = '',
  priority = false,
}: MediaPlaceholderProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        width="1200"
        height="900"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        className={`media-image ${className}`}
      />
    );
  }

  return (
    <div className={`media-placeholder ${className}`} role="img" aria-label={`${alt}. Imagem oficial pendente.`}>
      <div className="media-placeholder__glow" />
      <Sparkles size={18} aria-hidden="true" />
      <Image size={34} strokeWidth={1.25} aria-hidden="true" />
      <span>Material oficial</span>
      <small>{expectedFile}</small>
    </div>
  );
}
