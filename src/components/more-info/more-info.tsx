'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { BigButton } from '@/components/button/big-button';
import { Typography } from '@/components/typography/typography';

export const MoreInfo = () => {
  const t = useTranslations('more-info');

  return (
    <div className='m-auto flex flex-col gap-9 bg-europe px-6 py-14 desktop:p-14'>
      <Typography
        as='h3'
        color='basics-white'
        size='heading-2xl'
        className='text-center desktop:text-left'
        dangerouslySetInnerHTML={{
          __html: t.raw('title'),
        }}
      />
      <Typography
        as='p'
        size='body-lg'
        color='basics-white'
        weight='light'
        dangerouslySetInnerHTML={{
          __html: t.raw('questions'),
        }}
      />
      <div className='flex w-full flex-col justify-between gap-[30px] desktop:flex-row'>
        {['more-info', 'request-quote', 'host-family'].map((title) => (
          <BigButton
            key={title}
            subject={t.raw(title) as string}
            caption={t('contact-us')}
          />
        ))}
      </div>
    </div>
  );
};
