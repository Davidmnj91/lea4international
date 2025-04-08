import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Typography } from '@/components/typography/typography';
import React, { use } from 'react';
import { LanguagePageProps } from '@/i18n/config';
import { defaultTranslationVales } from '@/i18n/translation-values';

export default function Page({ params }: LanguagePageProps) {
  const { locale } = use(params);

  setRequestLocale(locale);

  const t = useTranslations('privacy-policy-page');

  return (
    <div className='p-6 desktop:px-12 desktop:py-24'>
      <Typography size='body-md' color='europe-dark'>
        {t.rich('content', defaultTranslationVales)}
      </Typography>
    </div>
  );
}
