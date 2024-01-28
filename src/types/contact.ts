import { z } from 'zod';
import {
  GeneralContactSchema,
  HostFamilyContactSchema,
  InstitutionsContactSchema,
  PartnerContactSchema,
} from '@/schemas/contactSchemas';
import { Language } from '@/i18n';

export const Contact = {
  companyName: 'LEA 4 International',
  phone: '+34 605 34 20 75',
  mail: 'info@lea4int.com',
  instagram: 'https://www.instagram.com/lea4int',
  linkedin: 'https://www.linkedin.com/in/lucia-soto-5780402b1',
  facebook: 'https://www.facebook.com/profile.php?id=61555352530058',
  youtube: 'https://www.youtube.com/channel/UC58jbZp1CqC--5HBphpJmdg',
};

export enum ContactServices {
  ERASMUS = 'erasmus',
  LANGUAGE_COURSES = 'language-courses',
  CONCIERGE = 'concierge',
}

export type GeneralFormData = z.infer<typeof GeneralContactSchema>;
export type HostFamilyFormData = z.infer<typeof HostFamilyContactSchema>;
export type InstitutionFormData = z.infer<typeof InstitutionsContactSchema>;
export type PartnerFormData = z.infer<typeof PartnerContactSchema>;

export type ContactData =
  | { type: 'GENERAL'; data: GeneralFormData }
  | { type: 'FAMILY'; data: HostFamilyFormData }
  | { type: 'INSTITUTION'; data: InstitutionFormData }
  | { type: 'PARTNER'; data: PartnerFormData };

export type ContactEmailProps = {
  language: Language;
  contactData: ContactData;
};
