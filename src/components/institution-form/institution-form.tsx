'use client';

import { Controller, FieldPath, useForm } from 'react-hook-form';
import { useFormState, useFormStatus } from 'react-dom';
import { useTranslations } from 'next-intl';
import { ContactUsState, getContactUs } from '@/actions/contactUs';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react';
import { InstitutionsContactSchema } from '@/schemas/contactSchemas';
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
import { z } from 'zod';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type InstitutionFormValues = z.infer<typeof InstitutionsContactSchema>;

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
  const {
    register,
    control,
    formState: { isValid, errors },
    setError,
  } = useForm<InstitutionFormValues>({
    mode: 'all',
    resolver: zodResolver(InstitutionsContactSchema),
  });

  const t = useTranslations('forms');

  useEffect(() => {
    if (!state) {
      return;
    }

    if (state.status === 'error') {
      state.errors?.forEach((error) => {
        setError(error.path as FieldPath<InstitutionFormValues>, {
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
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    className='block w-full'
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
            <Controller
              name='accommodationType'
              control={control}
              render={({ field: { onChange, value, onBlur } }) => (
                <ComboBoxWrapper
                  label={t('input.accommodationType.label')}
                  placeholder={t('input.accommodationType.placeholder')}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  options={accommodationTypes.map((accommodationType) => ({
                    id: accommodationType,
                    label: t(
                      `input.accommodationType.options.${accommodationType}`
                    ),
                    value: accommodationType,
                  }))}
                />
              )}
            />
            <ErrorField
              name='accommodationType'
              errors={errors}
              message={t('input.accommodationType.error')}
            />
          </div>
          <div>
            <Controller
              name='roomType'
              control={control}
              render={({ field: { onChange, value, onBlur } }) => (
                <ComboBoxWrapper
                  label={t('input.roomType.label')}
                  placeholder={t('input.roomType.placeholder')}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  options={roomTypes.map((roomType) => ({
                    id: roomType,
                    label: t(`input.roomType.options.${roomType}`),
                    value: roomType,
                  }))}
                />
              )}
            />
            <ErrorField
              name='roomType'
              errors={errors}
              message={t('input.roomType.error')}
            />
          </div>
          <div>
            <Controller
              name='boardType'
              control={control}
              render={({ field: { onChange, value, onBlur } }) => (
                <ComboBoxWrapper
                  label={t('input.boardType.label')}
                  placeholder={t('input.boardType.placeholder')}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  options={boardTypes.map((boardType) => ({
                    id: boardType,
                    label: t(`input.boardType.options.${boardType}`),
                    value: boardType,
                  }))}
                />
              )}
            />
            <ErrorField
              name='boardType'
              errors={errors}
              message={t('input.boardType.error')}
            />
          </div>
          <div>
            <Controller
              name='roundTripIncluded'
              control={control}
              render={({ field: { onChange, value, onBlur } }) => (
                <ComboBoxWrapper
                  label={t('input.roundTripIncluded.label')}
                  placeholder={t('input.roundTripIncluded.placeholder')}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  options={roundTripOptions.map((option) => ({
                    id: option,
                    label: t(`input.roundTripIncluded.options.${option}`),
                    value: option,
                  }))}
                />
              )}
            />
            <ErrorField
              name='roundTripIncluded'
              errors={errors}
              message={t('input.roundTripIncluded.error')}
            />
          </div>
          <div>
            <Controller
              name='culturalActivitiesIncluded'
              control={control}
              render={({ field: { onChange, value, onBlur } }) => (
                <ComboBoxWrapper
                  label={t('input.culturalActivitiesIncluded.label')}
                  placeholder={t(
                    'input.culturalActivitiesIncluded.placeholder'
                  )}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  options={culturalOptions.map((option) => ({
                    id: option,
                    label: t(
                      `input.culturalActivitiesIncluded.options.${option}`
                    ),
                    value: option,
                  }))}
                />
              )}
            />
            <ErrorField
              name='culturalActivitiesIncluded'
              errors={errors}
              message={t('input.culturalActivitiesIncluded.error')}
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
