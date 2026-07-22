import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/seo/SEO';

export default function NotFoundPage() {
  return (
    <section className="not-found"><SEO title="Página não encontrada | Dr. Jair Júnior" description="A página solicitada não foi encontrada." canonical="/404" /><div className="container"><span>404</span><h1>Esta página não foi encontrada.</h1><p>O endereço pode ter mudado ou não estar mais disponível.</p><Link className="button button--primary" to="/"><ArrowLeft /> Voltar ao início</Link></div></section>
  );
}
