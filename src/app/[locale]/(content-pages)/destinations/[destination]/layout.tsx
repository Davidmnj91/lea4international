import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { CaretLeft } from '@phosphor-icons/react/dist/ssr/CaretLeft';
import { BigButton } from '@/components/button/big-button';
import { Typography } from '@/components/typography/typography';
import React from 'react';
import { defaultTranslationVales } from '@/i18n/translation-values';

type RootDestinationsLayoutProps = {
  children: React.ReactNode;
};

export default function RootDestinationsLayout({
  children,
}: RootDestinationsLayoutProps) {
  const t = useTranslations('destinations-page');

  return (
    <>
      <div className='flex border-b border-basics-disabled px-6 py-2.5 desktop:px-12'>
        <Link href={'/destinations'} className='flex items-center gap-4'>
          <CaretLeft size={32} weight='thin' />
          <Typography as='span' size='body-lg' color='europe-dark'>
            {t('back-to-destinations')}
          </Typography>
        </Link>
      </div>
      {children}
      <div className='flex justify-center desktop:py-14'>
        <div className='flex flex-col gap-6 bg-europe px-6 py-14 desktop:gap-9 desktop:p-14'>
          <Typography as='h3' size='heading-2xl' color='basics-white'>
            {t('inspired.title')}
          </Typography>
          <Typography as='p' size='body-lg' color='basics-white'>
            {t.rich('inspired.description', defaultTranslationVales)}
          </Typography>
          <div className='flex flex-col gap-6 desktop:flex-row desktop:gap-8'>
            <BigButton
              subject={t('inspired.join')}
              caption={t('contact-us')}
              href={'/contact/individual'}
            />
            <BigButton
              subject={t('inspired.accommodations')}
              caption={t('see-more')}
              href={'/accommodations'}
            />
          </div>
        </div>
      </div>
    </>
  );
}
