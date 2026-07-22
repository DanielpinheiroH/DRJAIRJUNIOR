import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import type { TreatmentFaq } from '../../types';

export function FAQAccordion({ items }: { items: TreatmentFaq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const expanded = open === index;
        return (
          <div className="faq-item" key={item.question}>
            <h3>
              <button aria-expanded={expanded} aria-controls={`faq-${index}`} onClick={() => setOpen(expanded ? null : index)}>
                {item.question}<ChevronDown className={expanded ? 'rotate' : ''} aria-hidden="true" />
              </button>
            </h3>
            <div id={`faq-${index}`} className={`faq-answer ${expanded ? 'is-open' : ''}`}><p>{item.answer}</p></div>
          </div>
        );
      })}
    </div>
  );
}
