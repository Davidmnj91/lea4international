'use server';

import { Nullable, ValidationErrors } from '@/types/types';
import { zfd } from 'zod-form-data';
import { ZodError } from 'zod';
import {
  HostFamilyContactSchema,
  IndividualContactSchema,
  InstitutionsContactSchema,
  PartnerContactSchema,
} from '@/schemas/contactSchemas';
import { getValidationErrors } from '@/utils/getValidationErrors';
import { sendMail } from '@/services/mail.service';
import { render } from '@react-email/render';
import AdminEmail from '../emails/admin-email';
import ClientEmail from '../emails/client-email';
import emails from '../messages/emails.json';
import { ContactData, ContactEmailProps } from '@/types/contact';
import { defaultLanguage, Language } from '@/i18n/config';

type ContactUsSuccess = {
  status: 'SUCCESS';
};

type ContactUsError = {
  status: 'VALIDATION_ERROR';
  errors: ValidationErrors;
  message: string;
};

type ServerError = {
  status: 'INTERNAL_ERROR';
};

export type ContactUsState = Nullable<
  ContactUsSuccess | ContactUsError | ServerError
>;

const generalFormDataSchema = zfd.formData(IndividualContactSchema);
const hostFamilyFormDataSchema = zfd.formData(HostFamilyContactSchema);
const institutionFormDataSchema = zfd.formData(InstitutionsContactSchema);

const partnerFormDataSchema = zfd.formData(PartnerContactSchema);

export async function getContactUs(
  prevState: ContactUsState | null,
  data: FormData
): Promise<ContactUsState> {
  try {
    const language: Language =
      (data.get('language') as Language) || defaultLanguage;
    let contactData: ContactData;

    switch (data.get('type')) {
      case 'INDIVIDUAL':
        contactData = {
          type: 'INDIVIDUAL',
          data: await generalFormDataSchema.parseAsync(data),
        };
        break;
      case 'FAMILY':
        contactData = {
          type: 'FAMILY',
          data: await hostFamilyFormDataSchema.parseAsync(data),
        };
        break;
      case 'INSTITUTION':
        contactData = {
          type: 'INSTITUTION',
          data: await institutionFormDataSchema.parseAsync(data),
        };
        break;
      case 'PARTNER':
        contactData = {
          type: 'PARTNER',
          data: await partnerFormDataSchema.parseAsync(data),
        };
        break;
      default:
        throw new Error(`Invalid type ${data.get('type')}`);
    }

    const email: ContactEmailProps = {
      language,
      contactData,
    };

    const adminTemplate = await render(AdminEmail({ props: email }));
    await sendMail(
      emails[language]['admin-mail'].subject,
      process.env.MAIL_USER!,
      adminTemplate
    );

    const clientTemplate = await render(ClientEmail({ props: email }));
    await sendMail(
      emails[language]['client-email'].subject,
      contactData.data.email,
      clientTemplate
    );

    return {
      status: 'SUCCESS',
    };
  } catch (e) {
    console.error(e);

    if (e instanceof ZodError) {
      return {
        status: 'VALIDATION_ERROR',
        errors: getValidationErrors(e),
        message: e.message,
      };
    }

    return {
      status: 'INTERNAL_ERROR',
    };
  }
}
