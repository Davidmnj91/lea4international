import React, { JSX } from 'react';
import { AvailableServices, Destinations } from '@/types/destinations';
import prague_main_bg from '../../../../../../public/images/destinations/prague_main_bg.webp';
import prague_1_bg from '../../../../../../public/images/destinations/prague_1_bg.webp';
import prague_2_bg from '../../../../../../public/images/destinations/prague_2_bg.webp';
import madrid_bg from '../../../../../../public/images/destinations/madrid_bg.webp';
import madrid_1_bg from '../../../../../../public/images/destinations/madrid_1_bg.webp';
import madrid_2_bg from '../../../../../../public/images/destinations/madrid_2_bg.webp';
import malaga_bg from '../../../../../../public/images/destinations/malaga_bg.webp';
import malaga_1_bg from '../../../../../../public/images/destinations/malaga_1_bg.webp';
import malaga_2_bg from '../../../../../../public/images/destinations/malaga_2_bg.webp';
import krakow_bg from '../../../../../../public/images/destinations/krakow_bg.webp';
import krakow_1_bg from '../../../../../../public/images/destinations/krakow_1_bg.webp';
import krakow_2_bg from '../../../../../../public/images/destinations/krakow_2_bg.webp';
import dublin_bg from '../../../../../../public/images/destinations/dublin_bg.webp';
import dublin_1_bg from '../../../../../../public/images/destinations/dublin_1_bg.webp';
import dublin_2_bg from '../../../../../../public/images/destinations/dublin_2_bg.webp';
import ghent_bg from '../../../../../../public/images/destinations/ghent_bg.webp';
import ghent_1_bg from '../../../../../../public/images/destinations/ghent_1_bg.webp';
import ghent_2_bg from '../../../../../../public/images/destinations/ghent_2_bg.webp';
import { EuropeMapPrague } from '@/components/maps/prague';
import { EuropeMapMadrid } from '@/components/maps/madrid';
import { EuropeMapMalaga } from '@/components/maps/malaga';
import { EuropeMapKrakow } from '@/components/maps/krakow';
import { EuropeMapDublin } from '@/components/maps/dublin';
import { LanguagePageProps } from '@/i18n';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { ArrowDown } from '@phosphor-icons/react/dist/ssr/ArrowDown';
import Image from 'next/image';
import clsx from 'clsx';
import { buttonTypes } from '@/components/button/button';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr/ArrowRight';
import { notFound } from 'next/navigation';
import { Typography } from '@/components/typography/typography';
import { EuropeMapGhent } from '@/components/maps/ghent';
import Link from 'next/link';
import { Route } from 'next';

export const dynamicParams = false;

type DestinationPageDetails = {
  name: string;
  mainImageSrc: string;
  mapComponent: JSX.Element;
  sampleImages: [string, string];
  servicesAvailable: [AvailableServices, string][];
};
const iconClassNames =
  'h-[310px] w-[375px] desktop:h-[500px] desktop:w-[605px]';
const destinationsProps: Record<Destinations, DestinationPageDetails> = {
  [Destinations.PRAGUE]: {
    name: 'prague',
    mainImageSrc: prague_main_bg.src,
    mapComponent: <EuropeMapPrague className={iconClassNames} />,
    sampleImages: [prague_1_bg.src, prague_2_bg.src],
    servicesAvailable: [
      ['work-experience', '/services/erasmus#work-experience'],
      ['job-shadowing', '/services/erasmus#job-shadowing'],
      ['language-courses', '/services/language-courses'],
      ['concierge', '/services/concierge'],
    ],
  },
  [Destinations.MADRID]: {
    name: 'madrid',
    mainImageSrc: madrid_bg.src,
    mapComponent: <EuropeMapMadrid className={iconClassNames} />,
    sampleImages: [madrid_1_bg.src, madrid_2_bg.src],
    servicesAvailable: [
      ['work-experience', '/services/erasmus#work-experience'],
      ['job-shadowing', '/services/erasmus#job-shadowing'],
      ['language-courses', '/services/language-courses'],
      ['student-exchange', '/services/student-exchange'],
      ['concierge', '/services/concierge'],
    ],
  },
  [Destinations.MALAGA]: {
    name: 'malaga',
    mainImageSrc: malaga_bg.src,
    mapComponent: <EuropeMapMalaga className={iconClassNames} />,
    sampleImages: [malaga_1_bg.src, malaga_2_bg.src],
    servicesAvailable: [
      ['work-experience', '/services/erasmus#work-experience'],
      ['job-shadowing', '/services/erasmus#job-shadowing'],
      ['language-courses', '/services/language-courses'],
      ['student-exchange', '/services/student-exchange'],
      ['concierge', '/services/concierge'],
    ],
  },
  [Destinations.KRAKOW]: {
    name: 'krakow',
    mainImageSrc: krakow_bg.src,
    mapComponent: <EuropeMapKrakow className={iconClassNames} />,
    sampleImages: [krakow_1_bg.src, krakow_2_bg.src],
    servicesAvailable: [
      ['work-experience', '/services/erasmus#work-experience'],
      ['job-shadowing', '/services/erasmus#job-shadowing'],
    ],
  },
  [Destinations.DUBLIN]: {
    name: 'dublin',
    mainImageSrc: dublin_bg.src,
    mapComponent: <EuropeMapDublin className={iconClassNames} />,
    sampleImages: [dublin_1_bg.src, dublin_2_bg.src],
    servicesAvailable: [
      ['work-experience', '/services/erasmus#work-experience'],
      ['job-shadowing', '/services/erasmus#job-shadowing'],
      ['language-courses', '/services/language-courses'],
    ],
  },
  [Destinations.GHENT]: {
    name: 'ghent',
    mainImageSrc: ghent_bg.src,
    mapComponent: <EuropeMapGhent className={iconClassNames} />,
    sampleImages: [ghent_1_bg.src, ghent_2_bg.src],
    servicesAvailable: [
      ['work-experience', '/services/erasmus#work-experience'],
      ['job-shadowing', '/services/erasmus#job-shadowing'],
    ],
  },
};

export async function generateStaticParams() {
  return Object.values(Destinations).map((destination) => ({
    destination,
  }));
}

export default function Page({
  params: { locale, destination },
}: LanguagePageProps<{ destination: Destinations }>) {
  if (!destinationsProps[destination]) {
    notFound();
  }

  const { name, mainImageSrc, sampleImages, servicesAvailable, mapComponent } =
    destinationsProps[destination];

  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations(`destinations-page.destinations.${name}`);
  const tServices = useTranslations('destinations-page.services');

  return (
    <div>
      <div
        className='flex h-[545px] w-full items-center justify-center bg-cover bg-center desktop:h-[716px]'
        style={{
          backgroundImage: `url(${mainImageSrc}), linear-gradient(#0308227F,#0308227F)`,
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className='flex flex-col items-center justify-center gap-8'>
          <Typography as='h1' size='heading-4xl' color='basics-white'>
            {t('title')}
          </Typography>
          <div className='flex items-center gap-4'>
            <span className='w-[116px] border-b border-b-europe-light desktop:w-[250px]' />
            <ArrowDown className='text-gold' size={32} />
            <span className='w-[116px] border-b border-b-europe-light desktop:w-[250px]' />
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-between desktop:flex-row desktop:px-12 desktop:py-16'>
        <div className='flex max-w-[614px] flex-col gap-8 p-6 desktop:gap-16 desktop:p-0'>
          <div className='gap-1 text-center'>
            <Typography as='span' size='heading-sm' color='gold-dark'>
              {t('destinations')}
            </Typography>
            <Typography as='h2' size='heading-xl' color='europe-dark'>
              {t('choose')}
            </Typography>
          </div>
          <Typography as='p' size='body-lg' color='europe-dark'>
            {t.rich('reason')}
          </Typography>
        </div>
        {mapComponent}
      </div>
      <div className='flex flex-col gap-2.5 py-6 desktop:px-12'>
        <div className='flex items-center justify-center gap-20 pb-6 pt-2 desktop:justify-between desktop:p-0'>
          <span className='hidden h-1 flex-grow border-b border-b-europe desktop:inline' />
          <Typography
            as='h2'
            size='heading-xl'
            color='europe-dark'
            className='text-center desktop:text-left'
          >
            {t('know')}
          </Typography>
        </div>
        <div className='flex flex-col gap-4 px-8 desktop:flex-row desktop:gap-12 desktop:px-0'>
          <div className='h-[402px] flex-grow'>
            <Image
              src={sampleImages[0]}
              alt={`${destination}_1`}
              width={650}
              height={402}
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className='h-[402px] flex-grow'>
            <Image
              src={sampleImages[1]}
              alt={`${destination}_2`}
              width={650}
              height={402}
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col desktop:mt-16'>
        <Typography
          as='h2'
          size='heading-xl'
          color='europe-dark'
          className='px-6 py-6 desktop:px-12'
        >
          {tServices('title', { city: t('title') })}
        </Typography>
        <ul className='desktop:px-12'>
          {servicesAvailable.map(([service, href]) => (
            <li
              key={service}
              className='flex items-center justify-between border-b-2 border-t-0 border-basics-disabled p-6 first-of-type:border-t-2 desktop:px-0 desktop:py-6'
            >
              <Typography as='h3' size='heading-lg' color='europe-dark'>
                {tServices(`${service}`)}
              </Typography>
              <Link
                href={href as Route}
                className={clsx(
                  buttonTypes({ intent: 'secondary-light' }),
                  'hidden desktop:inline-block'
                )}
              >
                {tServices(`see-more`)}
              </Link>
              <ArrowRight className='desktop:hidden' size={32} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
