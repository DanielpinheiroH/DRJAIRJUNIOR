export interface ClinicConfig {
  clinicName: string;
  dentistName: string;
  cro: string;
  city: string;
  state: string;
  neighborhood: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  instagram: string;
  website: string;
  latitude: string;
  longitude: string;
  openingHours: string;
  education: string;
  specializations: string;
}

export interface TreatmentFaq {
  question: string;
  answer: string;
}

export interface Treatment {
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  imageFile: string;
  seoTitle: string;
  seoDescription: string;
  introduction: string;
  indications: string[];
  benefits: string[];
  howItWorks: string;
  steps: string[];
  care: string[];
  faq: TreatmentFaq[];
}

export type AnalyticsEvent =
  | 'click_whatsapp'
  | 'click_phone'
  | 'click_instagram'
  | 'click_email'
  | 'click_schedule'
  | 'view_treatment'
  | 'view_result'
  | 'submit_contact'
  | 'view_location'
  | 'click_route';
