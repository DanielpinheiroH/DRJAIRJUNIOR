import type { ClinicConfig } from '../types';

/**
 * Único ponto de edição dos dados profissionais e locais.
 * Campos vazios não são exibidos no site nem incluídos no JSON-LD.
 */
export const clinicConfig: ClinicConfig = {
  clinicName: 'Dr. Jair Júnior de Freitas',
  dentistName: 'Dr. Jair Júnior de Freitas',
  cro: '',
  city: '',
  state: '',
  neighborhood: '',
  address: '',
  phone: '',
  whatsapp: '+55 61 8576-5828',
  email: '',
  instagram: '',
  website: 'https://drjairjunior.vercel.app',
  latitude: '',
  longitude: '',
  openingHours: '',
  education: '',
  specializations: '',
};

export const displayName = clinicConfig.dentistName || 'Atendimento odontológico';
export const siteUrl = clinicConfig.website || 'https://drjairjunior.vercel.app';

export const locationSuffix = clinicConfig.city ? ` em ${clinicConfig.city}` : '';

export const hasContact = Boolean(clinicConfig.whatsapp || clinicConfig.phone);
