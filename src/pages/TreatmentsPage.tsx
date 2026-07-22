import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { CallToAction } from '../components/sections/CallToAction';
import { SEO } from '../components/seo/SEO';
import { TreatmentCard } from '../components/treatments/TreatmentCard';
import { treatmentCategories, treatments } from '../data/treatments';
import { locationLabel } from '../config/clinic';

const breadcrumbs = [{ label: 'Tratamentos' }];

export default function TreatmentsPage() {
  const [category, setCategory] = useState('Todos');
  const [search, setSearch] = useState('');
  const filtered = useMemo(() => treatments.filter((item) => (category === 'Todos' || item.category === category) && item.title.toLowerCase().includes(search.toLowerCase())), [category, search]);
  return (
    <>
      <SEO title={`Tratamentos odontológicos em ${locationLabel} | Dr. Jair Júnior`} description="Conheça possibilidades em implantes, reabilitação oral, estética, prevenção, endodontia, periodontia, cirurgia e bruxismo." canonical="/tratamentos" breadcrumbs={breadcrumbs} />
      <section className="internal-hero"><div className="container"><Breadcrumb items={breadcrumbs} /><span className="eyebrow">Tratamentos</span><h1>Cuidado completo,<br /><em>planejamento individual.</em></h1><p>Informações claras para conhecer possibilidades que dependem sempre de avaliação profissional.</p></div></section>
      <section className="section"><div className="container">
        <div className="treatment-tools"><label className="search-box"><Search size={18} /><span className="sr-only">Buscar tratamento</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Buscar tratamento" /></label><div className="filter-row" role="group" aria-label="Filtrar por categoria">{treatmentCategories.map((item) => <button key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>)}</div></div>
        <p className="result-count" aria-live="polite">{filtered.length} tratamentos encontrados</p>
        <div className="treatment-grid all-treatments">{filtered.map((item, index) => <TreatmentCard key={item.slug} treatment={item} index={index} />)}</div>
      </div></section>
      <CallToAction />
    </>
  );
}
