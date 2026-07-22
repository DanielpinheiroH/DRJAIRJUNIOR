import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Navegação estrutural" className="breadcrumb">
      <ol>
        <li><Link to="/" aria-label="Início"><Home size={14} /></Link></li>
        {items.map((item) => (
          <li key={item.label}>
            <ChevronRight size={13} aria-hidden="true" />
            {item.href ? <Link to={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
