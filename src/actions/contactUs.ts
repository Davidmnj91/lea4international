'use server';

import { Nullable, ValidationErrors } from '@/types/types';
import { zfd } from 'zod-form-data';
import { ZodError } from 'zod';
import { contactUsSchema } from '@/schemas/contactUsSchema';
import { getValidationErrors } from '@/utils/getValidationErrors';

type ContactUsSuccess = {
  status: 'success';
  message: string;
};

type ContactUsError = {
  status: 'error';
  errors: ValidationErrors;
  message: string;
};

export type ContactUsState = Nullable<ContactUsSuccess | ContactUsError>;

const contactUsFormDataSchema = zfd.formData(contactUsSchema);

export async function getContactUs(
  prevState: ContactUsState | null,
  data: FormData
): Promise<ContactUsState> {
  try {
    const { name, email, message } =
      await contactUsFormDataSchema.parseAsync(data);

    const fullMessage = `Contacted from ${name} with email ${email} and message: ${message}`;

    return {
      status: 'success',
      message: fullMessage,
    };
  } catch (e) {
    console.error(e);

    if (e instanceof ZodError) {
      return {
        status: 'error',
        errors: getValidationErrors(e),
        message: e.message,
      };
    }

    return {
      status: 'error',
      errors: [],
      message: `${e}`,
    };
  }
}