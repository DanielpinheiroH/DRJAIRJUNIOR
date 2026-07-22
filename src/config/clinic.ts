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
  whatsapp: '',
  email: '',
  instagram: '',
  website: '',
  latitude: '',
  longitude: '',
  openingHours: '',
  education: '',
  specializations: '',
};

export const displayName = clinicConfig.dentistName || 'Atendimento odontológico';
export const locationLabel = clinicConfig.city || 'sua cidade';
export const siteUrl = clinicConfig.website || 'https://example.com';

export const hasContact = Boolean(clinicConfig.whatsapp || clinicConfig.phone);
