'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { BigButton } from '@/components/button/big-button';

export const MoreInfo = () => {
  const t = useTranslations('more-info');

  return (
    <div className='m-auto flex flex-col gap-9 bg-europe px-6 py-14 desktop:p-14'>
      <h3
        className='text-center font-title text-desktop-h-2xl text-basics-white desktop:text-left'
        dangerouslySetInnerHTML={{
          __html: t.raw('title'),
        }}
      />
      <div>
        <p
          className='font-body text-b-lg font-light text-basics-white'
          dangerouslySetInnerHTML={{
            __html: t.raw('questions'),
          }}
        />
      </div>
      <div className='flex w-full flex-col justify-between gap-[30px] desktop:flex-row'>
        {['more-info', 'request-quote', 'host-family'].map((title) => (
          <BigButton
            key={title}
            title={t.raw(`${title}`)}
            caption={t('contact-us')}
          />
        ))}
      </div>
    </div>
  );
};
