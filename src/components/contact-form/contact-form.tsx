'use client';

import { FieldPath, useForm } from 'react-hook-form';
import { useFormState, useFormStatus } from 'react-dom';
import { useTranslations } from 'next-intl';
import { ContactUsState, getContactUs } from '@/actions/contactUs';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { contactUsSchema } from '@/schemas/contactUsSchema';
import {
  checkboxStyles,
  errorHintStyles,
  inputStyles,
  labelStyles,
} from '@/components/form/form';
import { buttonTypes } from '@/components/button/button';
import clsx from 'clsx';

type ContactFormValues = {
  service: string;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  nationality: string;
  message: string;
  terms: boolean;
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
      <form className='flex flex-col justify-center' action={formAction}>
        <div className='flex gap-16'>
          <div className='flex flex-[0_0_50%] flex-col gap-9'>
            <div>
              <label htmlFor='service' className={labelStyles}>
                {t('input.service.label')}
              </label>
              <input
                id='service'
                {...register('service')}
                className={inputStyles}
                placeholder={t('input.service.placeholder')}
              />
              <ErrorMessage
                name='service'
                errors={errors}
                render={({ message }) => (
                  <span className={errorHintStyles}>{message}</span>
                )}
              />
            </div>
            <div>
              <label htmlFor='name' className={labelStyles}>
                {t('input.name.label')}
              </label>
              <input
                id='name'
                {...register('name')}
                className={inputStyles}
                placeholder={t('input.name.placeholder')}
              />
              <ErrorMessage
                name='name'
                errors={errors}
                render={({ message }) => (
                  <span className={errorHintStyles}>{message}</span>
                )}
              />
            </div>
            <div>
              <label htmlFor='lastName' className={labelStyles}>
                {t('input.last-name.label')}
              </label>
              <input
                id='lastName'
                {...register('lastName')}
                className={inputStyles}
                placeholder={t('input.last-name.placeholder')}
              />
              <ErrorMessage
                name='lastName'
                errors={errors}
                render={({ message }) => (
                  <span className={errorHintStyles}>{message}</span>
                )}
              />
            </div>
            <div>
              <label htmlFor='email' className={labelStyles}>
                {t('input.email.label')}
              </label>
              <input
                id='email'
                {...register('email')}
                className={inputStyles}
                placeholder={t('input.email.placeholder')}
              />
              <ErrorMessage
                name='email'
                errors={errors}
                render={({ message }) => (
                  <span className={errorHintStyles}>{message}</span>
                )}
              />
            </div>
            <div>
              <label htmlFor='phone' className={labelStyles}>
                {t('input.phone.label')}
              </label>
              <input
                id='phone'
                {...register('phone')}
                className={inputStyles}
                placeholder={t('input.phone.placeholder')}
              />
              <ErrorMessage
                name='phone'
                errors={errors}
                render={({ message }) => (
                  <span className={errorHintStyles}>{message}</span>
                )}
              />
            </div>
          </div>
          <div className='flex flex-[0_0_50%] flex-col gap-9'>
            <div>
              <label htmlFor='message' className={labelStyles}>
                {t('input.message.label')}
              </label>
              <textarea
                id='message'
                rows={9}
                {...register('message')}
                className={clsx('h-[250px]', inputStyles)}
                placeholder={t('input.message.placeholder')}
              />
              <ErrorMessage
                name='message'
                errors={errors}
                render={({ message }) => (
                  <span className={errorHintStyles}>{message}</span>
                )}
              />
            </div>

            <div>
              <input
                type='checkbox'
                id='terms'
                {...register('terms')}
                className={checkboxStyles}
              />
              <label htmlFor='terms' className={clsx('text-b-sm', labelStyles)}>
                {t('input.terms')}
              </label>
              <ErrorMessage
                name='terms'
                errors={errors}
                render={({ message }) => (
                  <span className={errorHintStyles}>{message}</span>
                )}
              />
            </div>
            <button
              className={clsx(
                'self-end',
                buttonTypes({ intent: 'secondary-light' })
              )}
              type='submit'
              disabled={pending || !isValid}
            >
              {t('submit')}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
