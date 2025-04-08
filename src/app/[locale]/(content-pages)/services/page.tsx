import { use } from 'react';
import { LanguagePageProps } from '@/i18n/config';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { AnimatedCard } from '@/components/destination-card/animated-card';
import { Partners } from '@/components/partners/partners';
import Link from 'next/link';
import { servicesCardConfig } from '@/types/services';
import { Typography } from '@/components/typography/typography';
import { Route } from 'next';
import { defaultTranslationVales } from '@/i18n/translation-values';

export default function Page({ params }: LanguagePageProps) {
  const { locale } = use(params);

  setRequestLocale(locale);

  const t = useTranslations('services-page');

  return (
    <div>
      <div className='flex h-[410px] flex-col items-center gap-6 bg-europe px-2.5 py-8 desktop:py-14'>
        <Typography as='h1' size='heading-2xl' color='basics-white'>
          {t('title')}
        </Typography>
        <Typography
          as='span'
          size='body-lg'
          color='basics-white'
          weight='light'
          className='text-center'
        >
          {t.rich('message', defaultTranslationVales)}
        </Typography>
      </div>
      <div className='mt-[-180px] flex items-center gap-4 overflow-auto p-6 desktop:mt-[-160px] desktop:justify-center desktop:overflow-hidden'>
        {Object.entries(servicesCardConfig).map(([service, imgSrc]) => (
          <Link key={service} href={`services/${service}` as Route}>
            <AnimatedCard
              imgSrc={imgSrc}
              title={t(`services.${service}.title`)}
              caption={t('services.see-more')}
              containerClasses='w-[328px] h-[506px]'
              labelClasses='w-[174px] h-[192px]'
            />
          </Link>
        ))}
      </div>
      <div className='py-16'>
        <Partners />
      </div>
    </div>
  );
}
