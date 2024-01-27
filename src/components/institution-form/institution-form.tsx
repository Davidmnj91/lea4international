'use client';

import { Controller, FieldPath, useForm } from 'react-hook-form';
import { useFormState, useFormStatus } from 'react-dom';
import { useLocale, useTranslations } from 'next-intl';
import { ContactUsState, getContactUs } from '@/actions/contactUs';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState } from 'react';
import { InstitutionsContactSchema } from '@/schemas/contactSchemas';
import {
  checkboxStyles,
  ErrorField,
  inputStyles,
  labelStyles,
} from '@/components/form/form';
import { buttonTypes } from '@/components/button/button';
import clsx from 'clsx';
import countries from '../../../public/countries.json';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Link from 'next/link';
import { FormResultPopup } from '@/components/form/form-result';
import { InstitutionFormData } from '@/types/contact';

const accommodationTypes = [
  'apartment',
  'student-residence',
  'hotel',
  'hostel',
  'host-family',
];

const roomTypes = ['single', 'double', 'triple', 'quadruple'];

const boardTypes = ['self-catering', 'Breakfast', 'half-board', 'full-board'];

const roundTripOptions = ['yes', 'arrival', 'departure', 'no'];

const culturalOptions = ['yes', 'no'];

export const InstitutionForm = () => {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState<ContactUsState, FormData>(
    getContactUs,
    null
  );
  const [showPopup, setShowPopup] = useState(false);
  const [serverError, setServerError] = useState<boolean>(false);

  const {
    register,
    control,
    formState: { isValid, errors },
    setError,
  } = useForm<InstitutionFormData>({
    mode: 'all',
    resolver: zodResolver(InstitutionsContactSchema),
  });

  const t = useTranslations('forms');
  const locale = useLocale();

  useEffect(() => {
    if (!state) {
      return;
    }
    if (state.status === 'VALIDATION_ERROR') {
      state.errors?.forEach((error) => {
        setError(error.path as FieldPath<InstitutionFormData>, {
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
        <input type='hidden' name='type' value='INSTITUTION' />
        <div className='flex flex-col gap-9 desktop:flex-[0_0_50%]'>
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
            <label htmlFor='nationality' className={labelStyles}>
              {t('input.nationality.label')}
            </label>
            <select
              id='service'
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
            <label htmlFor='institutionName' className={labelStyles}>
              {t('input.institutionName.label')}
            </label>
            <input
              id='institutionName'
              {...register('institutionName')}
              className={inputStyles}
              placeholder={t('input.institutionName.placeholder')}
            />
            <ErrorField
              name='institutionName'
              errors={errors}
              message={t('input.institutionName.error')}
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
        </div>
        <div className='flex flex-col gap-9 desktop:flex-[0_0_50%]'>
          <div>
            <div className='flex flex-col'>
              <label htmlFor='dateRange' className={labelStyles}>
                {t('input.dateRange.label')}
              </label>
              <Controller
                control={control}
                name='dateRange'
                render={({ field: { onChange, value, name } }) => (
                  <DatePicker
                    className='block w-full'
                    name={name}
                    selected={value ? value[0] : undefined}
                    onChange={([from, to]) => onChange([from, to])}
                    startDate={value ? value[0] : undefined}
                    endDate={value ? value[1] : undefined}
                    selectsRange
                  />
                )}
              />
            </div>
            <ErrorField
              name='dateRange'
              errors={errors}
              message={t('input.dateRange.error')}
            />
          </div>
          <div>
            <label htmlFor='supervisorNumber' className={labelStyles}>
              {t('input.supervisorNumber.label')}
            </label>
            <input
              id='supervisorNumber'
              type='number'
              min='1'
              step='1'
              {...register('supervisorNumber')}
              className={inputStyles}
              placeholder={t('input.supervisorNumber.placeholder')}
            />
            <ErrorField
              name='supervisorNumber'
              errors={errors}
              message={t('input.supervisorNumber.error')}
            />
          </div>
          <div>
            <label htmlFor='accommodationType' className={labelStyles}>
              {t('input.accommodationType.label')}
            </label>
            <select
              id='accommodationType'
              className={inputStyles}
              {...register('accommodationType')}
            >
              {accommodationTypes.map((accommodationType) => (
                <option key={accommodationType} value={accommodationType}>
                  {t(`input.accommodationType.options.${accommodationType}`)}
                </option>
              ))}
            </select>
            <ErrorField
              name='accommodationType'
              errors={errors}
              message={t('input.accommodationType.error')}
            />
          </div>
          <div>
            <label htmlFor='roomType' className={labelStyles}>
              {t('input.roomType.label')}
            </label>
            <select
              id='roomType'
              className={inputStyles}
              {...register('roomType')}
            >
              {roomTypes.map((roomType) => (
                <option key={roomType} value={roomType}>
                  {t(`input.roomType.options.${roomType}`)}
                </option>
              ))}
            </select>
            <ErrorField
              name='roomType'
              errors={errors}
              message={t('input.roomType.error')}
            />
          </div>
          <div>
            <label htmlFor='boardType' className={labelStyles}>
              {t('input.boardType.label')}
            </label>
            <select
              id='boardType'
              className={inputStyles}
              {...register('boardType')}
            >
              {boardTypes.map((boardType) => (
                <option key={boardType} value={boardType}>
                  {t(`input.boardType.options.${boardType}`)}
                </option>
              ))}
            </select>
            <ErrorField
              name='boardType'
              errors={errors}
              message={t('input.boardType.error')}
            />
          </div>
          <div>
            <label htmlFor='roundTripIncluded' className={labelStyles}>
              {t('input.roundTripIncluded.label')}
            </label>
            <select
              id='roundTripIncluded'
              className={inputStyles}
              {...register('roundTripIncluded')}
            >
              {roundTripOptions.map((option) => (
                <option key={option} value={option}>
                  {t(`input.roundTripIncluded.options.${option}`)}
                </option>
              ))}
            </select>
            <ErrorField
              name='roundTripIncluded'
              errors={errors}
              message={t('input.roundTripIncluded.error')}
            />
          </div>
          <div>
            <label htmlFor='culturalActivitiesIncluded' className={labelStyles}>
              {t('input.culturalActivitiesIncluded.label')}
            </label>
            <select
              id='culturalActivitiesIncluded'
              className={inputStyles}
              {...register('culturalActivitiesIncluded')}
            >
              {culturalOptions.map((option) => (
                <option key={option} value={option}>
                  {t(`input.culturalActivitiesIncluded.options.${option}`)}
                </option>
              ))}
            </select>
            <ErrorField
              name='culturalActivitiesIncluded'
              errors={errors}
              message={t('input.culturalActivitiesIncluded.error')}
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
