import { Helmet } from 'react-helmet-async';
import { clinicConfig, displayName, siteUrl } from '../../config/clinic';
import { officialAssets } from '../../config/assets';
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
  const selectedImage = image || officialAssets.dentistaHero || undefined;
  const socialImage = selectedImage
    ? (selectedImage.startsWith('http') ? selectedImage : `${siteUrl.replace(/\/$/, '')}${selectedImage}`)
    : undefined;
  const schemas: Record<string, unknown>[] = [
    stripEmpty({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description,
      url: canonicalUrl,
      inLanguage: 'pt-BR',
      image: socialImage,
    }),
    stripEmpty({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: clinicConfig.clinicName || displayName,
      url: clinicConfig.website,
      inLanguage: 'pt-BR',
    }),
  ];

  if (clinicConfig.dentistName) {
    schemas.push(stripEmpty({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: clinicConfig.dentistName,
      jobTitle: 'Cirurgião-dentista',
      identifier: clinicConfig.cro,
      image: socialImage,
      url: clinicConfig.website,
    }));
  }

  if (clinicConfig.clinicName) {
    schemas.push(stripEmpty({
      '@context': 'https://schema.org',
      '@type': ['Dentist', 'MedicalBusiness'],
      name: clinicConfig.clinicName,
      url: clinicConfig.website,
      image: socialImage,
      telephone: clinicConfig.phone,
      email: clinicConfig.email,
      address: clinicConfig.address ? stripEmpty({
        '@type': 'PostalAddress',
        streetAddress: clinicConfig.address,
        addressLocality: clinicConfig.city,
        addressRegion: clinicConfig.state,
        addressCountry: 'BR',
      }) : undefined,
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
      itemListElement: [{ label: 'Início', href: '/' }, ...breadcrumbs].map((item, index) => ({
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
      {socialImage && <meta property="og:image" content={socialImage} />}
      {socialImage && <meta property="og:image:alt" content={`Imagem de ${displayName}`} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {socialImage && <meta name="twitter:image" content={socialImage} />}
      {schemas.map((schema, index) => (
        <script type="application/ld+json" key={index}>{JSON.stringify(schema)}</script>
      ))}
    </Helmet>
  );
}
