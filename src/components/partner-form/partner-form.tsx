'use client';

import { FieldPath, useForm } from 'react-hook-form';
import { useFormState, useFormStatus } from 'react-dom';
import { useTranslations } from 'next-intl';
import { ContactUsState, getContactUs } from '@/actions/contactUs';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { PartnerContactSchema } from '@/schemas/contactSchemas';
import {
  checkboxStyles,
  ErrorField,
  inputStyles,
  labelStyles,
} from '@/components/form/form';
import { buttonTypes } from '@/components/button/button';
import clsx from 'clsx';
import { z } from 'zod';
import { ContactServices } from '@/types/contact';
import Link from 'next/link';
import { FormResultPopup } from '@/components/form/form-result';

type PartnerFormValues = z.infer<typeof PartnerContactSchema>;
export const PartnerForm = () => {
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
  } = useForm<PartnerFormValues>({
    mode: 'all',
    resolver: zodResolver(PartnerContactSchema),
  });

  const t = useTranslations('forms');

  useEffect(() => {
    if (!state) {
      return;
    }
    if (state.status === 'VALIDATION_ERROR') {
      state.errors?.forEach((error) => {
        setError(error.path as FieldPath<PartnerFormValues>, {
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
      <form className='flex flex-col justify-center gap-9' action={formAction}>
        <div>
          <label htmlFor='service' className={labelStyles}>
            {t('input.service.label')}
          </label>
          <select id='service' className={inputStyles} {...register('service')}>
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
          <label htmlFor='applicantName' className={labelStyles}>
            {t('input.applicantName.label')}
          </label>
          <input
            id='applicantName'
            {...register('applicantName')}
            className={inputStyles}
            placeholder={t('input.applicantName.placeholder')}
          />
          <ErrorField
            name='applicantName'
            errors={errors}
            message={t('input.applicantName.error')}
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
          <label htmlFor='projectDescription' className={labelStyles}>
            {t('input.projectDescription.label')}
          </label>
          <textarea
            id='projectDescription'
            rows={9}
            {...register('projectDescription', { required: true })}
            className={clsx('h-[250px]', inputStyles)}
            placeholder={t('input.projectDescription.placeholder')}
          />
          <ErrorField
            name='projectDescription'
            errors={errors}
            message={t('input.projectDescription.error')}
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
      </form>
    </>
  );
};
