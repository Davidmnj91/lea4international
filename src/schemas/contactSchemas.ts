import { z } from 'zod';
import { ContactServices } from '@/types/contact';

const checkboxValidation = z.union([
  z.literal(true),
  z.literal('on').transform(() => true),
]);
export const GeneralContactSchema = z.object({
  service: z.nativeEnum(ContactServices),
  name: z.string().min(1),
  lastname: z.string().min(1).optional(),
  email: z.string().email().min(1),
  phone: z
    .string()
    .regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/)
    .optional(),
  nationality: z.string().min(1),
  message: z.string().min(1).max(255).optional(),
  terms: checkboxValidation,
});

export const HostFamilyContactSchema = z.object({
  name: z.string().min(1),
  lastname: z.string().min(1).optional(),
  email: z.string().email().min(1),
  phone: z
    .string()
    .regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/)
    .optional(),
  city: z.string().min(1),
  zipCode: z.string().min(1),
  hostSize: z.coerce.number().min(1),
  message: z.string().min(1).max(255).optional(),
  terms: checkboxValidation,
});

export const InstitutionsContactSchema = z.object({
  name: z.string().min(1),
  lastname: z.string().min(1).optional(),
  email: z.string().email().min(1),
  phone: z
    .string()
    .regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/)
    .optional(),
  nationality: z.string().min(1),
  institutionName: z.string().min(1),
  city: z.string().min(1),
  hostSize: z.coerce.number().min(1),
  dateRange: z.string().optional(),
  supervisorNumber: z.coerce.number().min(1),
  accommodationType: z.string().min(1),
  roomType: z.string().min(1),
  boardType: z.string().min(1),
  roundTripIncluded: z.string().min(1),
  culturalActivitiesIncluded: z.string().min(1),
  terms: checkboxValidation,
});

export const PartnerContactSchema = z.object({
  name: z.string().min(1),
  lastname: z.string().min(1).optional(),
  applicantName: z.string().min(1).optional(),
  email: z.string().email().min(1),
  projectDescription: z.string().min(1).max(255).optional(),
  terms: checkboxValidation,
});
