import { LanguagePageProps } from '@/i18n';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Typography } from '@/components/typography/typography';
import React from 'react';

export default function Page({ params: { locale } }: LanguagePageProps) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('privacy-policy-page');

  return (
    <div className='p-6 desktop:px-12 desktop:py-24'>
      <Typography size='body-md' color='europe-dark'>
        {t.rich('content')}
      </Typography>
    </div>
  );
}
