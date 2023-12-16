import { LanguagePageProps } from '@/i18n';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { tagButtonTypes } from '@/components/button/button';
import { Services } from '@/types/services';
import immersion_program_bg from '../../../../../../../public/immersion_program_bg.png';
import exchange_bg from '../../../../../../../public/exchange_bg.png';
import clsx from 'clsx';
import { AirplaneTilt } from '@phosphor-icons/react/dist/ssr/AirplaneTilt';
import { Bed } from '@phosphor-icons/react/dist/ssr/Bed';
import { RoadHorizon } from '@phosphor-icons/react/dist/ssr/RoadHorizon';
import { Train } from '@phosphor-icons/react/dist/ssr/Train';
import { Bank } from '@phosphor-icons/react/dist/ssr/Bank';

export default function Page({ params: { locale } }: LanguagePageProps) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('services-page.services.student-exchange');

  const studentExchangeServices = Services['student-exchange'];

  const sections = {
    'immersion-program': immersion_program_bg.src,
    'exchange-program': exchange_bg.src,
  };

  const services = {
    'round-trip': <RoadHorizon size={32} />,
    airport: <AirplaneTilt size={32} />,
    'local-transport': <Train size={32} />,
    accommodation: <Bed size={32} />,
    cultural: <Bank size={32} />,
  };

  return (
    <div>
      <div className='flex items-center justify-center py-24'>
        <h1 className='text-center font-title text-desktop-h-2xl text-europe-dark'>
          {t('title')}
        </h1>
      </div>
      <div className='sticky top-[80px] z-20 flex items-center gap-6 overflow-auto border-y border-y-basics-disabled bg-basics-white px-6 py-6 desktop:justify-center desktop:overflow-hidden desktop:px-12'>
        {studentExchangeServices.map((service) => (
          <Link
            href={`#${service}`}
            scroll={true}
            key={service}
            className={tagButtonTypes()}
          >
            {t(`categories.${service}.title`)}
          </Link>
        ))}
      </div>
      {Object.entries(sections).map(([section, imgSrc], index) => (
        <section key={section} id={section}>
          <div className='flex flex-col items-center justify-center gap-32 px-12 py-24'>
            <div className='flex flex-col items-center justify-center'>
              <span className='font-title text-desktop-h-sm font-bold text-gold-dark'>
                {t('overview')}
              </span>
              <h2 className='font-title text-desktop-h-xl text-europe-dark'>
                {t(`categories.${section}.title`)}
              </h2>
            </div>
            <p className='text-center font-body text-b-lg text-europe-dark'>
              {t(`categories.${section}.description`)}
            </p>
          </div>
          <div className={clsx('flex', index % 2 !== 0 && 'flex-row-reverse')}>
            <div className='flex flex-[0_0_60%] flex-col gap-24 px-12 py-24'>
              <h2 className='font-title text-desktop-h-xl text-europe-dark'>
                {t(`categories.${section}.includes`)}
              </h2>
              <ul className='flex flex-col gap-4'>
                {Object.entries(services).map(([title, icon]) => (
                  <li
                    key={title}
                    className='flex flex-col items-center border border-gold desktop:flex-row'
                  >
                    <div className='border-t border-t-gold p-4 desktop:border-r desktop:border-t-0 desktop:border-r-gold'>
                      {icon}
                    </div>
                    <p className='m-4 font-body text-b-lg text-europe-dark'>
                      {t(`services.${title}`)}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className='flex-[0_0_40%] bg-cover bg-no-repeat'
              style={{
                backgroundImage: `url(${imgSrc})`,
              }}
            />
          </div>
        </section>
      ))}
    </div>
  );
}