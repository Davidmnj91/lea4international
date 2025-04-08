import { LanguagePageProps } from '@/i18n';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import concierge_services_bg from '../../../../../../../public/images/services/concierge/concierge_services_bg.webp';
import { FirstAidKit } from '@phosphor-icons/react/dist/ssr/FirstAidKit';
import { Globe } from '@phosphor-icons/react/dist/ssr/Globe';
import { MapPin } from '@phosphor-icons/react/dist/ssr/MapPin';
import { MapTrifold } from '@phosphor-icons/react/dist/ssr/MapTrifold';
import { Ticket } from '@phosphor-icons/react/dist/ssr/Ticket';
import { Translate } from '@phosphor-icons/react/dist/ssr/Translate';
import { Taxi } from '@phosphor-icons/react/dist/ssr/Taxi';
import { Typography } from '@/components/typography/typography';
import {
  InformationCategories,
  MoreInfo,
} from '@/components/more-info/more-info';
import React, { use } from 'react';

export default function Page({ params }: LanguagePageProps) {
  const { locale } = use(params);

  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('services-page.services.concierge');

  const services = {
    'meeting-greeting': <MapPin size={32} />,
    'airport-transfer': <Taxi size={32} />,
    'local-transport': <Ticket size={32} />,
    'immigration-services': <Globe size={32} />,
    'city-tour': <MapTrifold size={32} />,
    'emergency-support': <FirstAidKit size={32} />,
    'language-support': <Translate size={32} />,
  };

  return (
    <div>
      <div className='flex flex-col items-center justify-center gap-8 p-6 desktop:gap-28 desktop:px-12 desktop:py-24'>
        <Typography
          as='h1'
          size='heading-2xl'
          color='europe-dark'
          className='text-center desktop:text-left'
        >
          {t('title')}
        </Typography>
        <Typography
          as='p'
          size='body-lg'
          color='europe-dark'
          className='text-center'
        >
          {t.rich('description')}
        </Typography>
      </div>
      <div className='flex flex-col-reverse desktop:flex-row'>
        <div className='flex flex-col gap-8 p-6 desktop:flex-[0_0_60%] desktop:justify-between desktop:px-12 desktop:py-24'>
          <Typography as='h2' size='heading-xl' color='europe-dark'>
            {t(`includes`)}
          </Typography>
          <ul className='flex flex-col gap-4'>
            {Object.entries(services).map(([title, icon]) => (
              <li key={title} className='flex items-center border border-gold'>
                <div className='border-r border-r-gold p-4'>{icon}</div>
                <Typography
                  as='p'
                  size='body-lg'
                  color='europe-dark'
                  className='m-4'
                >
                  {t(`services.${title}`)}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
        <div
          className='h-[283px] w-full bg-contain bg-center bg-no-repeat desktop:h-[858px] desktop:flex-[0_0_40%]'
          style={{
            backgroundImage: `url(${concierge_services_bg.src})`,
          }}
        />
      </div>
      <section id='more-info'>
        <div className='desktop:py-14'>
          <MoreInfo
            informationCategories={[InformationCategories.MORE_INFO]}
            className='desktop:max-w-[576px]'
          />
        </div>
      </section>
    </div>
  );
}
