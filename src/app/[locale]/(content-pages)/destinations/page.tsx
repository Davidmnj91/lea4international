import { use } from 'react';
import { LanguagePageProps } from '@/i18n/config';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { AnimatedCard } from '@/components/destination-card/animated-card';
import prague_bg from '../../../../../public/images/destinations/prague_bg.webp';
import madrid_bg from '../../../../../public/images/destinations/madrid_bg.webp';
import malaga_bg from '../../../../../public/images/destinations/malaga_bg.webp';
import krakow_bg from '../../../../../public/images/destinations/krakow_bg.webp';
import dublin_bg from '../../../../../public/images/destinations/dublin_bg.webp';
import ghent_bg from '../../../../../public/images/destinations/ghent_bg.webp';
import { Typography } from '@/components/typography/typography';
import { Route } from 'next';
import { defaultTranslationVales } from '@/i18n/translation-values';

export default function Page({ params }: LanguagePageProps) {
  const { locale } = use(params);

  setRequestLocale(locale);

  const t = useTranslations('destinations-page');

  const destinations = {
    prague: prague_bg.src,
    madrid: madrid_bg.src,
    malaga: malaga_bg.src,
    krakow: krakow_bg.src,
    dublin: dublin_bg.src,
    ghent: ghent_bg.src,
  };

  return (
    <div>
      <div className='flex h-[410px] flex-col items-center gap-6 bg-europe px-2.5 py-8 text-center desktop:py-14'>
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
      <div className='mt-[-160px] flex flex-wrap items-center justify-center gap-4 overflow-auto p-6 desktop:mt-[-160px] desktop:overflow-hidden'>
        {Object.entries(destinations).map(([destination, imgSrc]) => (
          <Link key={destination} href={`destinations/${destination}` as Route}>
            <AnimatedCard
              imgSrc={imgSrc}
              title={t(`destinations.${destination}.title`)}
              caption={t(`destinations.${destination}.country`)}
              containerClasses='w-[328px] h-[340px]'
              labelClasses='w-[174px] h-[192px]'
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
