'use client';

import { FieldPath, useForm } from 'react-hook-form';
import { useFormState, useFormStatus } from 'react-dom';
import { useTranslations } from 'next-intl';
import { ContactUsState, getContactUs } from '@/actions/contactUs';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { HostFamilyContactSchema } from '@/schemas/contactSchemas';
import {
  checkboxStyles,
  ErrorField,
  inputStyles,
  labelStyles,
} from '@/components/form/form';
import { buttonTypes } from '@/components/button/button';
import clsx from 'clsx';

type FamilyFormValues = {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  city: string;
  zipCode: string;
  hostSize: string;
  message: string;
  terms: boolean;
};
export const FamilyForm = () => {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState<ContactUsState, FormData>(
    getContactUs,
    null
  );
  const {
    register,
    formState: { isValid, errors },
    setError,
  } = useForm<FamilyFormValues>({
    mode: 'all',
    resolver: zodResolver(HostFamilyContactSchema),
  });

  const t = useTranslations('family-form');

  useEffect(() => {
    if (!state) {
      return;
    }

    if (state.status === 'error') {
      state.errors?.forEach((error) => {
        setError(error.path as FieldPath<FamilyFormValues>, {
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
            <div>
              <label htmlFor='city' className={labelStyles}>
                {t('input.city.label')}
              </label>
              <input
                id='city'
                {...register('city')}
                className={inputStyles}
                placeholder={t('input.city.placeholder')}
              />
              <ErrorField
                name='city'
                errors={errors}
                message={t('input.city.error')}
              />
            </div>
            <div>
              <label htmlFor='zipCode' className={labelStyles}>
                {t('input.zipCode.label')}
              </label>
              <input
                id='zipCode'
                {...register('zipCode')}
                className={inputStyles}
                placeholder={t('input.zipCode.placeholder')}
              />
              <ErrorField
                name='zipCode'
                errors={errors}
                message={t('input.zipCode.error')}
              />
            </div>
          </div>
          <div className='flex flex-[0_0_50%] flex-col gap-9'>
            <div>
              <label htmlFor='hostSize' className={labelStyles}>
                {t('input.hostSize.label')}
              </label>
              <input
                id='hostSize'
                type='number'
                min='1'
                step='1'
                {...register('hostSize')}
                className={inputStyles}
                placeholder={t('input.hostSize.placeholder')}
              />
              <ErrorField
                name='hostSize'
                errors={errors}
                message={t('input.hostSize.error')}
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
                <label
                  htmlFor='terms'
                  className={clsx('text-b-sm', labelStyles)}
                >
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
        </div>
      </form>
    </>
  );
};
