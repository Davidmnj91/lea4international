'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

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
          <button
            key={title}
            className='group flex h-[158px] flex-col justify-between border border-basics-white p-2.5 hover:border-star-dark desktop:w-[310px]'
          >
            <h4
              className='text-left font-title text-desktop-h-lg font-bold text-basics-white'
              dangerouslySetInnerHTML={{
                __html: t.raw(`${title}`),
              }}
            />
            <span className='self-end font-title text-desktop-h-sm text-basics-white group-hover:text-star-dark'>
              {t('contact-us')}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
