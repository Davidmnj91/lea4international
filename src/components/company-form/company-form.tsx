'use client';

import { Controller, FieldPath, useForm } from 'react-hook-form';
import { useFormState, useFormStatus } from 'react-dom';
import { useTranslations } from 'next-intl';
import { ContactUsState, getContactUs } from '@/actions/contactUs';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { CompanyContactSchema } from '@/schemas/contactSchemas';
import {
  checkboxStyles,
  ErrorField,
  inputStyles,
  labelStyles,
} from '@/components/form/form';
import { buttonTypes } from '@/components/button/button';
import clsx from 'clsx';
import ComboBoxWrapper from '@/components/select/select';
import countries from '../../../public/countries.json';

type ContactFormValues = {
  service: string;
  name: string;
  lastname: string;
  email: string;
  phone: string;
  nationality: string;
  message: string;
  terms: boolean;
};
export const CompanyForm = () => {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState<ContactUsState, FormData>(
    getContactUs,
    null
  );
  const {
    register,
    control,
    formState: { isValid, errors },
    setError,
  } = useForm<ContactFormValues>({
    mode: 'all',
    resolver: zodResolver(CompanyContactSchema),
  });

  const t = useTranslations('forms');

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
        className='flex flex-col justify-center gap-8 desktop:flex-row desktop:gap-16'
        action={formAction}
      >
        <div className='flex flex-col gap-9 desktop:flex-[0_0_50%]'>
          <div>
            <Controller
              name='service'
              control={control}
              render={({ field: { onChange, value, onBlur } }) => (
                <ComboBoxWrapper
                  label={t('input.service.label')}
                  placeholder={t('input.service.placeholder')}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  options={[
                    {
                      id: 'erasmus',
                      label: t('input.service.options.erasmus'),
                      value: 'erasmus',
                    },
                    {
                      id: 'language-courses',
                      label: t('input.service.options.language-courses'),
                      value: 'language-courses',
                    },
                    {
                      id: 'concierge',
                      label: t('input.service.options.concierge'),
                      value: 'concierge',
                    },
                  ]}
                />
              )}
            />
            <ErrorField
              name='service'
              errors={errors}
              message={t('input.service.error')}
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
            <ErrorField
              name='name'
              errors={errors}
              message={t('input.name.error')}
            />
          </div>
          <div>
            <label htmlFor='lastname' className={labelStyles}>
              {t('input.lastname.label')}
            </label>
            <input
              id='lastname'
              {...register('lastname')}
              className={inputStyles}
              placeholder={t('input.lastname.placeholder')}
            />
            <ErrorField
              name='lastname'
              errors={errors}
              message={t('input.lastname.error')}
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
            <ErrorField
              name='email'
              errors={errors}
              message={t('input.email.error')}
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
            <ErrorField
              name='phone'
              errors={errors}
              message={t('input.phone.error')}
            />
          </div>
        </div>

        <div className='flex flex-col gap-9 desktop:flex-[0_0_50%]'>
          <div>
            <Controller
              name='nationality'
              control={control}
              render={({ field: { onChange, value, onBlur } }) => (
                <ComboBoxWrapper
                  label={t('input.nationality.label')}
                  placeholder={t('input.nationality.placeholder')}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  options={countries.map(({ name, code }) => ({
                    id: code,
                    value: name,
                    label: name,
                  }))}
                />
              )}
            />
            <ErrorField
              name='nationality'
              errors={errors}
              message={t('input.nationality.error')}
            />
          </div>
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
            <ErrorField
              name='message'
              errors={errors}
              message={t('input.message.error')}
            />
          </div>

          <div className='flex flex-col'>
            <div className='flex items-center gap-2'>
              <input
                type='checkbox'
                id='terms'
                {...register('terms')}
                className={checkboxStyles}
              />
              <label htmlFor='terms' className={clsx('text-b-sm', labelStyles)}>
                {t('input.terms.label')}
              </label>
            </div>
            <ErrorField
              name='terms'
              errors={errors}
              message={t('input.terms.error')}
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
      </form>
    </>
  );
};
