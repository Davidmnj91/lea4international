import { LanguagePageProps } from '@/i18n';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { buttonTypes } from '@/components/button/button';
import { Services } from '@/types/services';
import work_experience_bg from '../../../../../../../public/work_experience_bg.png';
import we_offer_bg from '../../../../../../../public/we_offer_bg.png';
import job_shadowing_bg from '../../../../../../../public/job_shadowing_bg.png';
import school_exchange_bg from '../../../../../../../public/school_exchange_bg.png';
import erasmus_mundus_bg from '../../../../../../../public/erasmus_mundus_bg.png';
import { Airplane } from '@phosphor-icons/react/dist/ssr/Airplane';
import { Bank } from '@phosphor-icons/react/dist/ssr/Bank';
import { FlowerLotus } from '@phosphor-icons/react/dist/ssr/FlowerLotus';
import { Monitor } from '@phosphor-icons/react/dist/ssr/Monitor';
import { JSX } from 'react';

export default function Page({ params: { locale } }: LanguagePageProps) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('services-page.services.erasmus');

  const erasmusServices = Services.erasmus;
  const professions: Record<string, JSX.Element> = {
    IT: <Monitor size={32} />,
    business: <Bank size={32} />,
    tourism: <Airplane size={32} />,
    beauty: <FlowerLotus size={32} />,
  };
  return (
    <div>
      <div className='flex items-center justify-center py-24'>
        <h1 className='font-title text-desktop-h-2xl text-europe-dark'>
          {t('title')}
        </h1>
      </div>
      <div className='sticky top-[80px] z-20 flex items-center justify-center gap-6 border-y border-y-basics-disabled bg-basics-white px-12 py-6'>
        {erasmusServices.map((service) => (
          <Link
            href={`#${service}`}
            scroll={true}
            key={service}
            className={buttonTypes({ intent: 'secondary-light' })}
          >
            {t(`categories.${service}.title`)}
          </Link>
        ))}
      </div>
      <section id='work-experience'>
        <div className='flex flex-col items-center justify-center gap-28 px-12 py-24'>
          <div className='text-center'>
            <span className='font-title text-desktop-h-sm font-bold text-gold-dark'>
              {t('overview')}
            </span>
            <h2 className='font-title text-desktop-h-xl text-europe-dark'>
              {t('categories.work-experience.title')}
            </h2>
          </div>
          <span className='text-center font-body text-b-lg text-europe-dark'>
            {t('categories.work-experience.description')}
          </span>
        </div>
        <div className='flex h-[893px]'>
          <div
            style={{
              position: 'relative',
              height: '100%',
              flex: '0 0 60%',
              backgroundImage: `url(${work_experience_bg.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className='absolute right-[-90px] top-16 flex h-[240px] w-[245px] flex-[0_0_40%] items-center justify-center bg-europe p-6'>
              <div className='flex-grow border border-basics-white'>
                <span className='font-title text-desktop-h-lg text-basics-white'>
                  {t.rich('categories.work-experience.with')}
                </span>
              </div>
            </div>
          </div>
          <div className='flex flex-[0_0_40%] flex-col justify-end px-12 py-24'>
            <div className='z-10 bg-basics-white'>
              <p className='font-body text-b-lg text-europe-dark'>
                {t('categories.work-experience.message')}
              </p>
            </div>
          </div>
        </div>
        <div className='flex'>
          <div className='flex flex-[0_0_60%] flex-col gap-24 px-12 py-24'>
            <h2 className='font-title text-desktop-h-xl text-europe-dark'>
              {t('categories.work-experience.we-offer.title')}
            </h2>
            <ul className='flex flex-col gap-4'>
              {Object.entries(professions).map(([title, icon]) => (
                <li
                  key={title}
                  className='flex items-center border border-gold'
                >
                  <div className='flex h-full items-center border-r border-r-gold p-4'>
                    {icon}
                  </div>
                  <div className='p-4'>
                    <h3 className='font-title text-desktop-h-md text-europe-dark'>
                      {t(`categories.work-experience.we-offer.${title}.title`)}
                    </h3>
                    <p className='mt-2.5 font-body text-b-lg text-europe-dark'>
                      {t(
                        `categories.work-experience.we-offer.${title}.description`
                      )}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div
            className='flex-[0_0_40%]'
            style={{
              backgroundImage: `url(${we_offer_bg.src})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          />
        </div>
      </section>
      <section id='job-shadowing'>
        <div className='flex flex-col items-center justify-center gap-28 px-12 py-24'>
          <div className='text-center'>
            <span className='font-title text-desktop-h-sm font-bold text-gold-dark'>
              {t('overview')}
            </span>
            <h2 className='font-title text-desktop-h-xl text-europe-dark'>
              {t('categories.job-shadowing.title')}
            </h2>
          </div>
          <span className='text-center font-body text-b-lg text-europe-dark'>
            {t('categories.job-shadowing.description')}
          </span>
        </div>
        <div className='flex h-[1012px]'>
          <div
            style={{
              position: 'relative',
              height: '100%',
              flex: '0 0 60%',
              backgroundImage: `url(${job_shadowing_bg.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className='absolute right-[-90px] top-16 flex h-[240px] w-[245px] flex-[0_0_40%] items-center justify-center bg-europe p-6'>
              <div className='flex-grow border border-basics-white'>
                <span className='font-title text-desktop-h-lg text-basics-white'>
                  {t.rich('categories.job-shadowing.with')}
                </span>
              </div>
            </div>
          </div>
          <div className='flex flex-[0_0_40%] flex-col justify-end px-12 py-24'>
            <div className='z-10 bg-basics-white'>
              <p className='font-body text-b-lg text-europe-dark'>
                {t('categories.job-shadowing.message')}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id='school-exchange'>
        <div className='flex flex-col items-center justify-center gap-28 px-12 py-24'>
          <div className='text-center'>
            <span className='font-title text-desktop-h-sm font-bold text-gold-dark'>
              {t('overview')}
            </span>
            <h2 className='font-title text-desktop-h-xl text-europe-dark'>
              {t('categories.school-exchange.title')}
            </h2>
          </div>
          <span className='text-center font-body text-b-lg text-europe-dark'>
            {t('categories.school-exchange.description')}
          </span>
        </div>
        <div className='flex h-[782px]'>
          <div
            style={{
              position: 'relative',
              height: '100%',
              flex: '0 0 60%',
              backgroundImage: `url(${school_exchange_bg.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className='absolute right-[-90px] top-16 flex h-[240px] w-[245px] flex-[0_0_40%] items-center justify-center bg-europe p-6'>
              <div className='flex-grow border border-basics-white'>
                <span className='font-title text-desktop-h-lg text-basics-white'>
                  {t.rich('categories.school-exchange.with')}
                </span>
              </div>
            </div>
          </div>
          <div className='flex flex-[0_0_40%] flex-col justify-end px-12 py-24'>
            <div className='z-10 bg-basics-white'>
              <p className='font-body text-b-lg text-europe-dark'>
                {t('categories.school-exchange.message')}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id='erasmus-mundus'>
        <div className='flex flex-col items-center justify-center gap-28 px-12 py-24'>
          <div className='text-center'>
            <span className='font-title text-desktop-h-sm font-bold text-gold-dark'>
              {t('overview')}
            </span>
            <h2 className='font-title text-desktop-h-xl text-europe-dark'>
              {t('categories.erasmus-mundus.title')}
            </h2>
          </div>
          <span className='text-center font-body text-b-lg text-europe-dark'>
            {t('categories.erasmus-mundus.description')}
          </span>
        </div>
        <div className='flex h-[698px]'>
          <div
            style={{
              position: 'relative',
              height: '100%',
              flex: '0 0 60%',
              backgroundImage: `url(${erasmus_mundus_bg.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className='absolute right-[-90px] top-16 flex h-[240px] w-[245px] flex-[0_0_40%] items-center justify-center bg-europe p-6'>
              <div className='flex-grow border border-basics-white'>
                <span className='font-title text-desktop-h-lg text-basics-white'>
                  {t.rich('categories.erasmus-mundus.with')}
                </span>
              </div>
            </div>
          </div>
          <div className='flex flex-[0_0_40%] flex-col justify-end px-12 py-24'>
            <div className='z-10 bg-basics-white'>
              <p className='font-body text-b-lg text-europe-dark'>
                {t('categories.erasmus-mundus.message')}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id='KA-2'>
        <div className='flex flex-col items-center justify-center gap-28 px-12 py-24'>
          <div className='text-center'>
            <span className='font-title text-desktop-h-sm font-bold text-gold-dark'>
              {t('overview')}
            </span>
            <h2 className='font-title text-desktop-h-xl text-europe-dark'>
              {t('categories.KA-2.title')}
            </h2>
          </div>
          <span className='text-center font-body text-b-lg text-europe-dark'>
            {t('categories.KA-2.description')}
          </span>
        </div>
      </section>
    </div>
  );
}
