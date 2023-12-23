import { LanguagePageProps } from '@/i18n';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { buttonTypes, tagButtonTypes } from '@/components/button/button';
import React from 'react';
import apartment_bg from '../../../../../public/apartment_bg.png';
import student_residence_bg from '../../../../../public/student_residence_bg.png';
import host_family_bg from '../../../../../public/host_family_bg.png';
import hotel_bg from '../../../../../public/hotel_bg.png';
import hostel_bg from '../../../../../public/hostel_bg.png';
import airbnb_bg from '../../../../../public/airbnb_bg.png';
import prague_bg from '../../../../../public/prague_bg.png';
import madrid_bg from '../../../../../public/madrid_bg.png';
import malaga_bg from '../../../../../public/malaga_bg.png';
import clsx from 'clsx';
import { BecomePartner } from '@/components/partners/become-partner';
import { Typography } from '@/components/typography/typography';
import { AnimatedCard } from '@/components/destination-card/animated-card';

export default function Page({ params: { locale } }: LanguagePageProps) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('accommodations-page');

  const accommodations = {
    apartment: apartment_bg.src,
    'student-residence': student_residence_bg.src,
    'host-family': host_family_bg.src,
    hotel: hotel_bg.src,
    hostel: hostel_bg.src,
    airbnb: airbnb_bg.src,
  };

  const destinations = {
    prague: prague_bg.src,
    madrid: madrid_bg.src,
    malaga: malaga_bg.src,
  };

  return (
    <div>
      <div className='flex items-center justify-center py-14 desktop:py-24'>
        <Typography
          as='h1'
          size='heading-2xl'
          color='europe-dark'
          className='text-center desktop:text-left'
        >
          {t('title')}
        </Typography>
      </div>
      <section id='accommodations' className='sticky top-20'>
        <div className='flex items-center gap-6 overflow-auto border-y border-y-basics-disabled bg-basics-white px-6 py-6 desktop:justify-center desktop:overflow-hidden desktop:px-12'>
          {Object.keys(accommodations).map((accommodation) => (
            <Link
              href={`#${accommodation}`}
              scroll={true}
              key={accommodation}
              className={tagButtonTypes()}
            >
              {t(`accommodations.${accommodation}.title`)}
            </Link>
          ))}
        </div>
      </section>
      <div className='flex items-center justify-center p-6 desktop:px-12 desktop:py-24'>
        <Typography
          as='h2'
          size='body-lg'
          color='europe-dark'
          className='text-center'
        >
          {t('description')}
        </Typography>
      </div>
      {Object.entries(accommodations).map(([accommodation, imgSrc], index) => (
        <section key={accommodation} id={accommodation}>
          <div className='mb-6 flex items-center justify-center desktop:mb-14'>
            <div className='flex bg-basics-gray p-6 desktop:max-w-[1200px]'>
              <div
                className={clsx(
                  `flex flex-col-reverse items-center justify-center gap-6 border border-europe px-4 py-2.5 desktop:h-[530px] desktop:w-[1150px] desktop:gap-[70px]`,
                  index % 2 === 0
                    ? 'desktop:flex-row'
                    : 'desktop:flex-row-reverse'
                )}
              >
                <div
                  className={clsx(
                    'h-[189px] w-full bg-cover bg-no-repeat desktop:mb-0 desktop:h-[427px] desktop:w-[675px]',
                    index % 2 === 0
                      ? 'desktop:ml-[-100px]'
                      : 'desktop:mr-[-100px]'
                  )}
                  style={{ backgroundImage: `url(${imgSrc})` }}
                />
                <div className='flex flex-col items-start justify-center gap-2.5 desktop:max-w-[474px] desktop:px-6'>
                  <Typography
                    as='h3'
                    size='heading-lg'
                    color='europe'
                    weight='bold'
                  >
                    {t(`accommodations.${accommodation}.title`)}
                  </Typography>
                  <Typography as='p' size='body-lg' color='europe'>
                    {t(`accommodations.${accommodation}.description`)}
                  </Typography>
                  <button className={buttonTypes({ intent: 'primary' })}>
                    {t('contact-us')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
      <section id='become-partner'>
        <BecomePartner />
      </section>
      <section id='top-destinations'>
        <div className='flex h-[410px] flex-col items-center gap-6 bg-europe p-6 desktop:p-14'>
          <Typography
            as='h3'
            size='heading-2xl'
            color='basics-white'
            className='text-center'
          >
            {t('top-destinations.title')}
          </Typography>
          <div className='flex items-center justify-center'>
            <span className='w-[58px] border-b border-b-europe-light desktop:w-[250px]' />
            <button
              className={clsx(
                'mx-4',
                buttonTypes({ intent: 'secondary-dark' })
              )}
            >
              {t('top-destinations.see-all')}
            </button>
            <span className='w-[58px] border-b border-b-europe-light desktop:w-[250px]' />
          </div>
        </div>
        <div className='mt-[-160px] flex items-center gap-4 overflow-auto p-6 desktop:justify-center desktop:overflow-hidden'>
          {Object.entries(destinations).map(([destination, imgSrc]) => (
            <Link key={destination} href={`destinations/${destination}`}>
              <AnimatedCard
                imgSrc={imgSrc}
                title={t(`top-destinations.destinations.${destination}.title`)}
                caption={t(
                  `top-destinations.destinations.${destination}.country`
                )}
                containerClasses='w-[328px] h-[506px]'
                labelClasses='w-[174px] h-[192px]'
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
