import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Treatment } from '../../types';
import { TreatmentVisual } from './TreatmentVisual';

export function TreatmentCard({ treatment, index = 0 }: { treatment: Treatment; index?: number }) {
  return (
    <article className="treatment-card">
      <div className="treatment-card__media"><TreatmentVisual slug={treatment.slug} title={treatment.title} /></div>
      <div className="treatment-card__content">
        <span className="card-index">{String(index + 1).padStart(2, '0')}</span>
        <span className="card-category">{treatment.category}</span>
        <h3>{treatment.title}</h3>
        <p>{treatment.shortDescription}</p>
        <Link to={`/tratamentos/${treatment.slug}`} aria-label={`Conhecer ${treatment.title}`}>Conhecer tratamento <ArrowUpRight size={17} /></Link>
      </div>
    </article>
  );
}
