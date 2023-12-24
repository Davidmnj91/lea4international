import { Destinations } from '@/types/destinations';
import { useTranslations } from 'next-intl';
import { Typography } from '@/components/typography/typography';
import clsx from 'clsx';
import { buttonTypes } from '@/components/button/button';
import Link from 'next/link';
import { AnimatedCard } from '@/components/destination-card/animated-card';
import React from 'react';
import prague_bg from '../../../public/images/destinations/prague_bg.png';
import madrid_bg from '../../../public/images/destinations/madrid_bg.png';
import malaga_bg from '../../../public/images/destinations/malaga_bg.png';
import krakow_bg from '../../../public/images/destinations/krakow_bg.png';
import dublin_bg from '../../../public/images/destinations/dublin_bg.png';
import ghent_bg from '../../../public/images/destinations/ghent_bg.png';

export const TopDestinations = ({
  destinations,
}: {
  destinations: Destinations[];
}) => {
  const t = useTranslations('top-destinations');

  const destinationsImages: Record<Destinations, string> = {
    [Destinations.PRAGUE]: prague_bg.src,
    [Destinations.MADRID]: madrid_bg.src,
    [Destinations.MALAGA]: malaga_bg.src,
    [Destinations.KRAKOW]: krakow_bg.src,
    [Destinations.DUBLIN]: dublin_bg.src,
    [Destinations.GHENT]: ghent_bg.src,
  };

  return (
    <>
      <div className='flex h-[410px] flex-col items-center gap-6 bg-europe px-2.5 pt-14 desktop:mt-14 desktop:pt-14'>
        <Typography
          as='h3'
          size='heading-2xl'
          color='basics-white'
          className='text-center'
        >
          {t('title')}
        </Typography>
        <div className='flex items-center justify-center'>
          <span className='w-[58px] border-b border-b-europe-light desktop:w-[250px]' />
          <button
            className={clsx('mx-4', buttonTypes({ intent: 'secondary-dark' }))}
          >
            {t('see-all')}
          </button>
          <span className='w-[58px] border-b border-b-europe-light desktop:w-[250px]' />
        </div>
      </div>
      <div className='mt-[-160px] flex items-center gap-4 overflow-auto px-6 desktop:justify-center desktop:overflow-hidden'>
        {Object.entries(destinationsImages)
          .filter(([destination, _]) =>
            destinations.includes(destination as Destinations)
          )
          .map(([destination, imgSrc]) => (
            <Link key={destination} href={`destinations/${destination}`}>
              <AnimatedCard
                imgSrc={imgSrc}
                title={t(`destinations.${destination}.title`)}
                caption={t(`destinations.${destination}.country`)}
                containerClasses='w-[328px] h-[506px]'
                labelClasses='w-[174px] h-[192px]'
              />
            </Link>
          ))}
      </div>
    </>
  );
};
