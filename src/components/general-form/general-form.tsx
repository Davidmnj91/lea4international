'use client';

import { FieldPath, useForm } from 'react-hook-form';
import { useFormState, useFormStatus } from 'react-dom';
import { useLocale, useTranslations } from 'next-intl';
import { ContactUsState, getContactUs } from '@/actions/contactUs';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { GeneralContactSchema } from '@/schemas/contactSchemas';
import {
  checkboxStyles,
  ErrorField,
  inputStyles,
  labelStyles,
} from '@/components/form/form';
import { buttonTypes } from '@/components/button/button';
import clsx from 'clsx';
import countries from '../../../public/countries.json';
import { ContactServices, GeneralFormData } from '@/types/contact';
import Link from 'next/link';
import { FormResultPopup } from '@/components/form/form-result';

export const GeneralForm = () => {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState<ContactUsState, FormData>(
    getContactUs,
    null
  );
  const [showPopup, setShowPopup] = useState(false);
  const [serverError, setServerError] = useState<boolean>(false);

  const {
    register,
    formState: { isValid, errors },
    setError,
  } = useForm<GeneralFormData>({
    mode: 'all',
    resolver: zodResolver(GeneralContactSchema),
  });

  const t = useTranslations('forms');
  const locale = useLocale();

  useEffect(() => {
    if (!state) {
      return;
    }
    if (state.status === 'VALIDATION_ERROR') {
      state.errors?.forEach((error) => {
        setError(error.path as FieldPath<GeneralFormData>, {
          message: error.message,
        });
      });
      return;
    }
    setShowPopup(true);
    if (state.status === 'INTERNAL_ERROR') {
      setServerError(true);
    }
  }, [state, setError]);

  return (
    <>
      <FormResultPopup
        state={serverError ? 'error' : 'success'}
        open={showPopup}
        onClose={() => setShowPopup(false)}
      />
      <form
        className='flex flex-col justify-center gap-8 desktop:flex-row desktop:gap-16'
        action={formAction}
      >
        <input type='hidden' name='language' value={locale} />
        <input type='hidden' name='type' value='GENERAL' />
        <div className='flex flex-col gap-9 desktop:flex-[0_0_50%]'>
          <div>
            <label htmlFor='service' className={labelStyles}>
              {t('input.service.label')}
            </label>
            <select
              id='service'
              className={inputStyles}
              {...register('service')}
            >
              {Object.values(ContactServices).map((service) => (
                <option key={service} value={service}>
                  {t(`input.service.options.${service}`)}
                </option>
              ))}
            </select>
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
            <label htmlFor='nationality' className={labelStyles}>
              {t('input.nationality.label')}
            </label>
            <select
              id='nationality'
              className={inputStyles}
              {...register('nationality')}
            >
              {countries.map(({ name }) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
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
              {...register('message', { required: true })}
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
            <div className='flex items-center gap-4'>
              <input
                type='checkbox'
                id='terms'
                {...register('terms')}
                className={checkboxStyles}
              />
              <label htmlFor='terms' className={clsx('text-b-sm', labelStyles)}>
                {t('input.terms.label.first')}
                <Link
                  className='font-bold underline'
                  href={'/privacy-policy'}
                  target={'_blank'}
                >
                  {t('input.terms.label.link')}
                </Link>
                {t('input.terms.label.last')}
              </label>
            </div>
            <ErrorField
              name='terms'
              errors={errors}
              message={
                <>
                  {t('input.terms.error.first')}{' '}
                  <Link
                    className='font-bold underline'
                    href={'/privacy-policy'}
                    target={'_blank'}
                  >
                    {t('input.terms.error.link')}
                  </Link>
                </>
              }
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
