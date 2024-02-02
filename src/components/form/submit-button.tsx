'use client';

import { useFormStatus } from 'react-dom';
import { useTranslations } from 'next-intl';
import clsx from 'clsx';
import { buttonTypes } from '@/components/button/button';
import React from 'react';

export const SubmitButton = ({ isValid }: { isValid: boolean }) => {
  const { pending } = useFormStatus();
  const t = useTranslations('forms');

  return (
    <button
      className={clsx('self-end', buttonTypes({ intent: 'secondary-light' }))}
      type='submit'
      disabled={pending || !isValid}
    >
      {t('submit')}
    </button>
  );
};
