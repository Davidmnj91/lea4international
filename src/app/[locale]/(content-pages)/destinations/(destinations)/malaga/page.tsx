import { LanguagePageProps } from '@/i18n';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import malaga_bg from '../../../../../../../public/malaga_bg.png';
import malaga_1_bg from '../../../../../../../public/malaga_1_bg.png';
import malaga_2_bg from '../../../../../../../public/malaga_2_bg.png';
import React from 'react';
import { ArrowDown } from '@phosphor-icons/react/dist/ssr/ArrowDown';
import Image from 'next/image';
import { buttonTypes } from '@/components/button/button';
import clsx from 'clsx';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr/ArrowRight';
import { EuropeMapMalaga } from '@/components/maps/malaga';

export default function Page({ params: { locale } }: LanguagePageProps) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('destinations-page.destinations.malaga');

  const services = [
    'work-experience',
    'job-shadowing',
    'language-courses',
    'concierge',
  ];

  return (
    <div>
      <div
        className='flex h-[545px] w-full items-center justify-center bg-cover bg-center desktop:h-[716px]'
        style={{
          backgroundImage: `url(${malaga_bg.src}), linear-gradient(#0308227F,#0308227F)`,
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className='flex flex-col items-center justify-center gap-8'>
          <h1 className='font-title text-desktop-h-4xl text-basics-white'>
            {t('title')}
          </h1>
          <div className='flex items-center gap-4'>
            <span className='h-1 w-[250px] border-b border-b-europe-light' />
            <ArrowDown className='text-gold' size={32} />
            <span className='h-1 w-[250px] border-b border-b-europe-light' />
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-between desktop:flex-row desktop:px-12 desktop:py-16'>
        <div className='flex max-w-[614px] flex-col gap-8 p-6 desktop:gap-16 desktop:p-0'>
          <div className='gap-1 text-center'>
            <span className='font-title text-desktop-h-sm text-gold-dark'>
              {t('destinations')}
            </span>
            <h2 className='font-title text-desktop-h-xl text-europe-dark'>
              {t('choose')}
            </h2>
          </div>
          <p className='font-body text-b-lg text-europe-dark'>{t('reason')}</p>
        </div>
        <EuropeMapMalaga />
      </div>
      <div className='flex flex-col gap-2.5 py-6 desktop:px-12'>
        <div className='flex items-center justify-center gap-20 pb-6 pt-2 desktop:justify-between desktop:p-0'>
          <span className='hidden h-1 flex-grow border-b border-b-europe desktop:inline' />
          <h2 className='text-center font-title text-desktop-h-xl text-europe-dark desktop:text-left'>
            {t('know')}
          </h2>
        </div>
        <div className='flex flex-col gap-4 px-8 desktop:flex-row desktop:gap-12 desktop:px-0'>
          <Image
            src={malaga_1_bg.src}
            alt='prague_1'
            width={650}
            height={402}
            style={{ height: '100%', width: '100%' }}
          />
          <Image
            src={malaga_2_bg.src}
            alt='prague_2'
            width={650}
            height={402}
            style={{ height: '100%', width: '100%' }}
          />
        </div>
      </div>
      <div className='flex flex-col desktop:mt-16'>
        <h2 className='px-6 py-6 font-title text-desktop-h-xl text-europe-dark desktop:px-12'>
          {t('services.title')}
        </h2>
        <ul className='desktop:px-12'>
          {services.map((service) => (
            <li
              key={service}
              className='flex items-center justify-between border-b-2 border-t-0 border-basics-disabled p-6 first-of-type:border-t-2 desktop:px-0 desktop:py-6'
            >
              <h3 className='font-title text-desktop-h-lg text-europe-dark'>
                {t(`services.${service}`)}
              </h3>
              <button
                className={clsx(
                  buttonTypes({ intent: 'secondary-light' }),
                  'hidden desktop:inline-block'
                )}
              >
                {t(`services.see-more`)}
              </button>
              <ArrowRight className='desktop:hidden' size={32} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
