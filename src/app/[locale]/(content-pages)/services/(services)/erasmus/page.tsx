import { LanguagePageProps } from '@/i18n';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { tagButtonTypes } from '@/components/button/button';
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
import { ServiceItem } from '@/components/service-item/service-item';
import { BigButton } from '@/components/button/big-button';

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
        <h1 className='text-center font-title text-desktop-h-2xl text-europe-dark desktop:text-left'>
          {t('title')}
        </h1>
      </div>
      <div className='sticky top-[80px] z-20 flex items-center gap-6 overflow-auto border-y border-y-basics-disabled bg-basics-white px-6 py-6 desktop:justify-center desktop:overflow-hidden desktop:px-12'>
        {erasmusServices.map((service) => (
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
      <section id='work-experience'>
        <div className='flex flex-col items-center justify-center gap-28 p-6 desktop:px-12 desktop:py-24'>
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
        <div className='flex flex-col desktop:h-[893px] desktop:flex-row'>
          <div
            className='relative h-[380px] bg-cover bg-center desktop:flex-[0_0_60%]'
            style={{
              backgroundImage: `url(${work_experience_bg.src})`,
            }}
          >
            <div className='absolute left-[50%] top-[50%] flex h-[240px] w-[245px] flex-[0_0_40%] translate-x-[-50%] translate-y-[-50%] items-center justify-center bg-europe p-6 desktop:right-[-90px] desktop:top-16 desktop:translate-x-0 desktop:translate-y-0'>
              <div className='flex-grow border border-basics-white p-2.5'>
                <span className='font-title text-desktop-h-lg text-basics-white'>
                  {t.rich('categories.work-experience.with')}
                </span>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-end p-6 text-center desktop:flex-[0_0_40%] desktop:px-12 desktop:py-24 desktop:text-left'>
            <div className='z-10 bg-basics-white'>
              <p className='font-body text-b-lg text-europe-dark'>
                {t.rich('categories.work-experience.message')}
              </p>
            </div>
          </div>
        </div>
        <div className='flex'>
          <div className='flex flex-col gap-8 p-6 desktop:flex-[0_0_60%] desktop:gap-24 desktop:px-12 desktop:py-24'>
            <h2 className='font-title text-desktop-h-xl text-europe-dark'>
              {t('categories.work-experience.we-offer.title')}
            </h2>
            <ul className='flex flex-col gap-4'>
              {Object.entries(professions).map(([title, icon]) => (
                <ServiceItem
                  key={title}
                  icon={icon}
                  title={t(
                    `categories.work-experience.we-offer.${title}.title`
                  )}
                  description={t(
                    `categories.work-experience.we-offer.${title}.description`
                  )}
                />
              ))}
            </ul>
          </div>
          <div
            className='hidden bg-cover bg-no-repeat desktop:block desktop:flex-[0_0_40%]'
            style={{
              backgroundImage: `url(${we_offer_bg.src})`,
            }}
          />
        </div>
      </section>
      <section id='job-shadowing'>
        <div className='flex flex-col items-center justify-center gap-8 p-6 desktop:gap-28 desktop:px-12 desktop:py-24'>
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
        <div className='flex flex-col desktop:h-[1012px] desktop:flex-row'>
          <div
            className='relative h-[380px] bg-cover bg-center desktop:h-full desktop:flex-[0_0_60%]'
            style={{
              backgroundImage: `url(${job_shadowing_bg.src})`,
            }}
          >
            <div className='absolute left-[50%] top-[50%] flex h-[240px] w-[245px] flex-[0_0_40%] translate-x-[-50%] translate-y-[-50%] items-center justify-center bg-europe p-6 desktop:right-[-90px] desktop:top-16 desktop:translate-x-0 desktop:translate-y-0'>
              <div className='flex-grow border border-basics-white p-2.5'>
                <span className='font-title text-desktop-h-lg text-basics-white'>
                  {t.rich('categories.job-shadowing.with')}
                </span>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-end p-6 text-center desktop:flex-[0_0_40%] desktop:px-12 desktop:py-24 desktop:text-left'>
            <div className='z-10 bg-basics-white'>
              <p className='font-body text-b-lg text-europe-dark'>
                {t('categories.job-shadowing.message')}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id='school-exchange'>
        <div className='flex flex-col items-center justify-center gap-8 p-6 desktop:gap-28 desktop:px-12 desktop:py-24'>
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
        <div className='flex flex-col desktop:h-[782px] desktop:flex-row'>
          <div
            className='relative h-[380px] bg-cover bg-center desktop:h-full desktop:flex-[0_0_60%]'
            style={{
              backgroundImage: `url(${school_exchange_bg.src})`,
            }}
          >
            <div className='absolute left-[50%] top-[50%] flex h-[240px] w-[245px] flex-[0_0_40%] translate-x-[-50%] translate-y-[-50%] items-center justify-center bg-europe p-6 desktop:right-[-90px] desktop:top-16 desktop:translate-x-0 desktop:translate-y-0'>
              <div className='flex-grow border border-basics-white p-2.5'>
                <span className='font-title text-desktop-h-lg text-basics-white'>
                  {t.rich('categories.school-exchange.with')}
                </span>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-end p-6 text-center desktop:flex-[0_0_40%] desktop:px-12 desktop:py-24 desktop:text-left'>
            <div className='z-10 bg-basics-white'>
              <p className='font-body text-b-lg text-europe-dark'>
                {t('categories.school-exchange.message')}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id='erasmus-mundus'>
        <div className='flex flex-col items-center justify-center gap-8 p-6 desktop:gap-28 desktop:px-12 desktop:py-24'>
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
        <div className='flex flex-col desktop:h-[698px] desktop:flex-row'>
          <div
            className='relative h-[380px] bg-cover bg-center desktop:h-full desktop:flex-[0_0_60%]'
            style={{
              backgroundImage: `url(${erasmus_mundus_bg.src})`,
            }}
          >
            <div className='absolute left-[50%] top-[50%] flex h-[240px] w-[245px] flex-[0_0_40%] translate-x-[-50%] translate-y-[-50%] items-center justify-center bg-europe p-6 desktop:right-[-90px] desktop:top-16 desktop:translate-x-0 desktop:translate-y-0'>
              <div className='flex-grow border border-basics-white p-2.5'>
                <span className='font-title text-desktop-h-lg text-basics-white'>
                  {t.rich('categories.erasmus-mundus.with')}
                </span>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-end p-6 text-center desktop:flex-[0_0_40%] desktop:px-12 desktop:py-24 desktop:text-left'>
            <div className='z-10 bg-basics-white'>
              <p className='font-body text-b-lg text-europe-dark'>
                {t('categories.erasmus-mundus.message')}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id='KA-2'>
        <div className='flex flex-col items-center justify-center gap-8 p-6 desktop:gap-28 desktop:px-12 desktop:py-24'>
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
      <section id='become-partner'>
        <div className='flex justify-center bg-europe py-14 desktop:bg-transparent'>
          <div className='flex flex-col gap-9 bg-europe p-6 desktop:p-14'>
            <h2 className='text-center font-title text-desktop-h-2xl text-basics-white desktop:text-left'>
              {t('categories.become-partner.title')}
            </h2>
            <p className='font-body text-b-lg text-basics-white'>
              {t.rich('categories.become-partner.description')}
            </p>
            <BigButton
              title={t.rich('categories.become-partner.button.title')}
              caption={t('categories.become-partner.button.caption')}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
