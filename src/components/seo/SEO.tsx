import { Helmet } from 'react-helmet-async';
import { clinicConfig, displayName, siteUrl } from '../../config/clinic';
import type { Crumb } from '../common/Breadcrumb';
import type { TreatmentFaq } from '../../types';

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  image?: string;
  type?: 'website' | 'article';
  breadcrumbs?: Crumb[];
  faq?: TreatmentFaq[];
}

const stripEmpty = (value: Record<string, unknown>) =>
  Object.fromEntries(Object.entries(value).filter(([, field]) => Boolean(field)));

export function SEO({
  title,
  description,
  canonical,
  image,
  type = 'website',
  breadcrumbs = [],
  faq = [],
}: SEOProps) {
  const canonicalUrl = `${siteUrl.replace(/\/$/, '')}${canonical}`;
  const schemas: Record<string, unknown>[] = [
    stripEmpty({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description,
      url: canonicalUrl,
    }),
    stripEmpty({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: clinicConfig.clinicName || displayName,
      url: clinicConfig.website,
    }),
  ];

  if (clinicConfig.dentistName) {
    schemas.push(stripEmpty({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: clinicConfig.dentistName,
      jobTitle: 'Cirurgião-dentista',
      identifier: clinicConfig.cro,
    }));
  }

  if (clinicConfig.clinicName && clinicConfig.address) {
    schemas.push(stripEmpty({
      '@context': 'https://schema.org',
      '@type': ['Dentist', 'LocalBusiness', 'MedicalBusiness'],
      name: clinicConfig.clinicName,
      telephone: clinicConfig.phone,
      email: clinicConfig.email,
      address: stripEmpty({
        '@type': 'PostalAddress',
        streetAddress: clinicConfig.address,
        addressLocality: clinicConfig.city,
        addressRegion: clinicConfig.state,
        addressCountry: 'BR',
      }),
      geo: clinicConfig.latitude && clinicConfig.longitude ? {
        '@type': 'GeoCoordinates',
        latitude: clinicConfig.latitude,
        longitude: clinicConfig.longitude,
      } : undefined,
    }));
  }

  if (breadcrumbs.length) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
        ...(item.href ? { item: `${siteUrl.replace(/\/$/, '')}${item.href}` } : {}),
      })),
    });
  }

  if (faq.length) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    });
  }

  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      {schemas.map((schema, index) => (
        <script type="application/ld+json" key={index}>{JSON.stringify(schema)}</script>
      ))}
    </Helmet>
  );
}
