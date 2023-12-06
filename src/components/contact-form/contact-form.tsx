'use client';

import { FieldPath, useForm } from 'react-hook-form';
import { useFormState, useFormStatus } from 'react-dom';
import { useTranslations } from 'next-intl';
import { ContactUsState, getContactUs } from '@/actions/contactUs';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { contactUsSchema } from '@/schemas/contactUsSchema';

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};
export const ContactForm = () => {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState<ContactUsState, FormData>(
    getContactUs,
    null
  );
  const {
    register,
    formState: { isValid, errors },
    setError,
  } = useForm<ContactFormValues>({
    mode: 'all',
    resolver: zodResolver(contactUsSchema),
  });

  const t = useTranslations('contact-form');

  useEffect(() => {
    if (!state) {
      return;
    }

    if (state.status === 'error') {
      state.errors?.forEach((error) => {
        setError(error.path as FieldPath<ContactFormValues>, {
          message: error.message,
        });
      });
    }
  }, [state, setError]);

  return (
    <>
      <h1 style={{ color: state?.status === 'success' ? 'green' : 'red' }}>
        {state?.message}
      </h1>
      <form
        style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}
        action={formAction}
      >
        <input {...register('name')} placeholder={t('input.name')} />
        <ErrorMessage name='name' errors={errors} />
        <input {...register('email')} placeholder={t('input.email')} />
        <ErrorMessage name='email' errors={errors} />
        <input {...register('message')} placeholder={t('input.message')} />
        <ErrorMessage name='message' errors={errors} />
        <button type='submit' disabled={pending || !isValid}>
          {t('submit')}
        </button>
      </form>
    </>
  );
};
