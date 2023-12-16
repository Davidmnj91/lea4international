import { LanguagePageProps } from '@/i18n';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { AnimatedCard } from '@/components/destination-card/animated-card';
import praga_bg from '../../../../../public/praga_bg.png';
import madrid_bg from '../../../../../public/madrid_bg.png';
import malaga_bg from '../../../../../public/malaga_bg.png';
import krakow_bg from '../../../../../public/krakow_bg.png';
import dublin_bg from '../../../../../public/dublin_bg.png';
import ghent_bg from '../../../../../public/ghent_bg.png';

export default function Page({ params: { locale } }: LanguagePageProps) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('destinations-page');

  const destinations = {
    prague: praga_bg.src,
    madrid: madrid_bg.src,
    malaga: malaga_bg.src,
    krakow: krakow_bg.src,
    dublin: dublin_bg.src,
    ghent: ghent_bg.src,
  };

  return (
    <div>
      <div className='flex h-[410px] flex-col items-center gap-6 bg-europe px-2.5 py-14 desktop:py-14'>
        <h1 className='font-title text-desktop-h-2xl text-basics-white'>
          {t('title')}
        </h1>
        <span className='max-w-[386px] text-center font-body text-b-lg font-light text-basics-white'>
          {t.rich('message')}
        </span>
      </div>
      <div className='mt-[-180px] flex flex-wrap items-center gap-4 overflow-auto p-6 desktop:mt-[-160px] desktop:justify-center desktop:overflow-hidden'>
        {Object.entries(destinations).map(([destination, imgSrc]) => (
          <Link key={destination} href={`destinations/${destination}`}>
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
