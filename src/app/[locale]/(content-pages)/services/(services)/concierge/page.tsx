import { LanguagePageProps } from '@/i18n';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import concierge_services_bg from '../../../../../../../public/concierge_services_bg.png';
import { AirplaneTilt } from '@phosphor-icons/react/dist/ssr/AirplaneTilt';
import { FirstAidKit } from '@phosphor-icons/react/dist/ssr/FirstAidKit';
import { Globe } from '@phosphor-icons/react/dist/ssr/Globe';
import { MapPin } from '@phosphor-icons/react/dist/ssr/MapPin';
import { MapTrifold } from '@phosphor-icons/react/dist/ssr/MapTrifold';
import { Ticket } from '@phosphor-icons/react/dist/ssr/Ticket';
import { Translate } from '@phosphor-icons/react/dist/ssr/Translate';
import { Typography } from '@/components/typography/typography';

export default function Page({ params: { locale } }: LanguagePageProps) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('services-page.services.concierge');

  const services = {
    'meeting-greeting': <MapPin size={32} />,
    'airport-transfer': <AirplaneTilt size={32} />,
    'local-transport': <Ticket size={32} />,
    'immigration-services': <Globe size={32} />,
    'city-tour': <MapTrifold size={32} />,
    'emergency-support': <FirstAidKit size={32} />,
    'language-support': <Translate size={32} />,
  };

  return (
    <div>
      <div className='flex flex-col items-center justify-center gap-28 px-12 py-24'>
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
          {t('description')}
        </Typography>
      </div>
      <div className='flex'>
        <div className='flex flex-[0_0_60%] flex-col gap-24 px-12 py-24'>
          <Typography as='h2' size='heading-xl' color='europe-dark'>
            {t(`includes`)}
          </Typography>
          <ul className='flex flex-col gap-4'>
            {Object.entries(services).map(([title, icon]) => (
              <li
                key={title}
                className='flex flex-col items-center border border-gold p-4 desktop:flex-row'
              >
                <div className='border-t border-t-gold desktop:border-r desktop:border-t-0 desktop:border-r-gold'>
                  {icon}
                </div>
                <Typography as='p' size='body-lg' color='europe-dark'>
                  {t(`services.${title}`)}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
        <div
          className='flex-[0_0_40%] bg-cover bg-no-repeat'
          style={{
            backgroundImage: `url(${concierge_services_bg.src})`,
          }}
        />
      </div>
    </div>
  );
}
