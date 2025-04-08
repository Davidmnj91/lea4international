import { LanguagePageProps } from '@/i18n';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { buttonTypes, tagButtonTypes } from '@/components/button/button';
import { Services } from '@/types/services';
import work_experience_bg from '../../../../../../../public/images/services/erasmus/work_experience_bg.webp';
import we_offer_bg from '../../../../../../../public/images/services/erasmus/we_offer_bg.webp';
import job_shadowing_bg from '../../../../../../../public/images/services/erasmus/job_shadowing_bg.webp';
import school_exchange_bg from '../../../../../../../public/images/services/erasmus/school_exchange_bg.webp';
import erasmus_mundus_bg from '../../../../../../../public/images/services/erasmus/erasmus_mundus_bg.webp';
import ka_2_bg from '../../../../../../../public/images/services/erasmus/ka_2_bg.webp';
import { Airplane } from '@phosphor-icons/react/dist/ssr/Airplane';
import { Bank } from '@phosphor-icons/react/dist/ssr/Bank';
import { FlowerLotus } from '@phosphor-icons/react/dist/ssr/FlowerLotus';
import { Monitor } from '@phosphor-icons/react/dist/ssr/Monitor';
import { JSX, use } from 'react';
import { ServiceItem } from '@/components/service-item/service-item';
import { BecomePartner } from '@/components/partners/become-partner';
import { Typography } from '@/components/typography/typography';

export default function Page({ params }: LanguagePageProps) {
  const { locale } = use(params);

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
      <div className='flex items-center justify-center px-2.5 py-16 desktop:py-24'>
        <Typography
          as='h1'
          size='heading-2xl'
          color='europe-dark'
          className='text-center'
        >
          {t('title')}
        </Typography>
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
        <Link href={`#KA-2`} scroll={true} className={tagButtonTypes()}>
          {t(`categories.KA-2.title`)}
        </Link>
      </div>
      <section id='work-experience'>
        <div className='flex flex-col items-center justify-center gap-8 p-6 desktop:gap-28 desktop:px-12 desktop:py-24'>
          <div className='text-center'>
            <Typography
              as='span'
              size='heading-sm'
              color='gold-dark'
              weight='bold'
            >
              {t('overview')}
            </Typography>
            <Typography as='h2' size='heading-xl' color='europe-dark'>
              {t('categories.work-experience.title')}
            </Typography>
          </div>
          <Typography
            as='span'
            size='body-lg'
            color='europe-dark'
            className='text-center'
          >
            {t.rich('categories.work-experience.description')}
          </Typography>
        </div>
        <div className='flex flex-col desktop:h-[893px] desktop:flex-row'>
          <div
            className='relative h-[380px] bg-cover bg-center desktop:h-full desktop:flex-[0_0_60%]'
            style={{
              backgroundImage: `url(${work_experience_bg.src})`,
            }}
          >
            <div className='absolute left-[50%] top-[50%] flex h-[240px] w-[245px] flex-[0_0_40%] translate-x-[-50%] translate-y-[-50%] items-center justify-center bg-europe p-6 desktop:left-auto desktop:right-[-90px] desktop:top-16 desktop:translate-x-0 desktop:translate-y-0'>
              <div className='flex-grow border border-basics-white p-2.5'>
                <Typography as='span' size='heading-lg' color='basics-white'>
                  {t.rich('categories.work-experience.with')}
                </Typography>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-end p-6 text-center desktop:flex-[0_0_40%] desktop:px-12 desktop:text-left'>
            <div className='z-10 bg-basics-white'>
              <Typography as='p' size='body-lg' color='europe-dark'>
                {t.rich('categories.work-experience.message')}
              </Typography>
            </div>
          </div>
        </div>
        <div className='flex'>
          <div className='flex flex-col gap-8 p-6 desktop:flex-[0_0_60%] desktop:justify-between desktop:px-12 desktop:py-24'>
            <Typography as='h2' size='heading-xl' color='europe-dark'>
              {t('categories.work-experience.we-offer.title')}
            </Typography>
            <ul className='flex flex-col gap-4'>
              {Object.entries(professions).map(([title, icon]) => (
                <ServiceItem
                  key={title}
                  icon={icon}
                  title={t(
                    `categories.work-experience.we-offer.${title}.title`
                  )}
                  description={t.rich(
                    `categories.work-experience.we-offer.${title}.description`
                  )}
                />
              ))}
            </ul>
            <div>
              <Link
                href={'/contact/individual'}
                className={buttonTypes({ intent: 'primary' })}
              >
                {t('categories.work-experience.know-more')}
              </Link>
            </div>
          </div>
          <div
            className='hidden bg-cover bg-bottom bg-no-repeat desktop:block desktop:flex-[0_0_40%]'
            style={{
              backgroundImage: `url(${we_offer_bg.src})`,
            }}
          />
        </div>
      </section>
      <section id='job-shadowing'>
        <div className='flex flex-col items-center justify-center gap-8 p-6 desktop:gap-28 desktop:px-12 desktop:py-24'>
          <div className='text-center'>
            <Typography
              as='span'
              size='heading-sm'
              color='gold-dark'
              weight='bold'
            >
              {t('overview')}
            </Typography>
            <Typography as='h2' size='heading-xl' color='europe-dark'>
              {t('categories.job-shadowing.title')}
            </Typography>
          </div>
          <Typography
            as='span'
            size='body-lg'
            color='europe-dark'
            className='text-center'
          >
            {t.rich('categories.job-shadowing.description')}
          </Typography>
        </div>
        <div className='flex flex-col desktop:h-[1012px] desktop:flex-row'>
          <div
            className='relative h-[380px] bg-cover bg-center desktop:h-full desktop:flex-[0_0_60%]'
            style={{
              backgroundImage: `url(${job_shadowing_bg.src})`,
            }}
          >
            <div className='absolute left-[50%] top-[50%] flex h-[240px] w-[245px] flex-[0_0_40%] translate-x-[-50%] translate-y-[-50%] items-center justify-center bg-europe p-6 desktop:left-auto desktop:right-[-90px] desktop:top-16 desktop:translate-x-0 desktop:translate-y-0'>
              <div className='flex-grow border border-basics-white p-2.5'>
                <Typography as='span' size='heading-lg' color='basics-white'>
                  {t.rich('categories.job-shadowing.with')}
                </Typography>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-end p-6 text-center desktop:flex-[0_0_40%] desktop:px-12 desktop:text-left'>
            <div className='z-10 bg-basics-white'>
              <Typography as='p' size='body-lg' color='europe-dark'>
                {t.rich('categories.job-shadowing.message')}
              </Typography>
            </div>
          </div>
        </div>
      </section>
      <section id='school-exchange'>
        <div className='flex flex-col items-center justify-center gap-8 p-6 desktop:gap-28 desktop:px-12 desktop:py-24'>
          <div className='text-center'>
            <Typography
              as='span'
              size='heading-sm'
              color='gold-dark'
              weight='bold'
            >
              {t('overview')}
            </Typography>
            <Typography as='h2' size='heading-xl' color='europe-dark'>
              {t('categories.school-exchange.title')}
            </Typography>
          </div>
          <Typography
            as='span'
            size='body-lg'
            color='europe-dark'
            className='text-center'
          >
            {t.rich('categories.school-exchange.description')}
          </Typography>
        </div>
        <div className='flex flex-col desktop:h-[782px] desktop:flex-row'>
          <div
            className='relative h-[380px] bg-cover bg-center desktop:h-full desktop:flex-[0_0_60%]'
            style={{
              backgroundImage: `url(${school_exchange_bg.src})`,
            }}
          >
            <div className='absolute left-[50%] top-[50%] flex h-[240px] w-[245px] flex-[0_0_40%] translate-x-[-50%] translate-y-[-50%] items-center justify-center bg-europe p-6 desktop:left-auto desktop:right-[-90px] desktop:top-16 desktop:translate-x-0 desktop:translate-y-0'>
              <div className='flex-grow border border-basics-white p-2.5'>
                <Typography as='span' size='heading-lg' color='basics-white'>
                  {t.rich('categories.school-exchange.with')}
                </Typography>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-end p-6 text-center desktop:flex-[0_0_40%] desktop:px-12 desktop:text-left'>
            <div className='z-10 bg-basics-white'>
              <Typography as='p' size='body-lg' color='europe-dark'>
                {t.rich('categories.school-exchange.message')}
              </Typography>
            </div>
          </div>
        </div>
      </section>
      <section id='erasmus-mundus'>
        <div className='flex flex-col items-center justify-center gap-8 p-6 desktop:gap-28 desktop:px-12 desktop:py-24'>
          <div className='text-center'>
            <Typography
              as='span'
              size='heading-sm'
              color='gold-dark'
              weight='bold'
            >
              {t('overview')}
            </Typography>
            <Typography as='h2' size='heading-xl' color='europe-dark'>
              {t('categories.erasmus-mundus.title')}
            </Typography>
          </div>
          <Typography
            as='span'
            size='body-lg'
            color='europe-dark'
            className='text-center'
          >
            {t('categories.erasmus-mundus.description')}
          </Typography>
        </div>
        <div className='flex flex-col desktop:h-[698px] desktop:flex-row'>
          <div
            className='relative h-[380px] bg-cover bg-center desktop:h-full desktop:flex-[0_0_60%]'
            style={{
              backgroundImage: `url(${erasmus_mundus_bg.src})`,
            }}
          >
            <div className='absolute left-[50%] top-[50%] flex h-[240px] w-[245px] flex-[0_0_40%] translate-x-[-50%] translate-y-[-50%] items-center justify-center bg-europe p-6 desktop:left-auto desktop:right-[-90px] desktop:top-16 desktop:translate-x-0 desktop:translate-y-0'>
              <div className='flex-grow border border-basics-white p-2.5'>
                <Typography as='span' size='heading-lg' color='basics-white'>
                  {t.rich('categories.erasmus-mundus.with')}
                </Typography>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-end p-6 text-center desktop:flex-[0_0_40%] desktop:px-12 desktop:text-left'>
            <div className='z-10 bg-basics-white'>
              <Typography as='p' size='body-lg' color='europe-dark'>
                {t.rich('categories.erasmus-mundus.message')}
              </Typography>
            </div>
          </div>
        </div>
      </section>
      <section id='KA-2'>
        <div className='flex flex-col items-center justify-center gap-8 p-6 desktop:gap-28 desktop:px-12 desktop:py-24'>
          <div className='text-center'>
            <Typography
              as='span'
              size='heading-sm'
              color='gold-dark'
              weight='bold'
            >
              {t('overview')}
            </Typography>
            <Typography as='h2' size='heading-xl' color='europe-dark'>
              {t('categories.KA-2.title')}
            </Typography>
          </div>
          <Typography
            as='span'
            size='body-lg'
            color='europe-dark'
            className='text-center'
          >
            {t.rich('categories.KA-2.description')}
          </Typography>
          <div className='mx-auto flex flex-col gap-8 desktop:flex-row desktop:gap-16'>
            <div
              className='mx-auto h-[153px] w-[325px] bg-cover bg-no-repeat desktop:h-[478px] desktop:w-[275px]'
              style={{ backgroundImage: `url(${ka_2_bg.src})` }}
            />
            <div className='flex flex-col gap-8 desktop:py-4'>
              <div className='flex flex-col gap-6'>
                <Typography as='h3' size='heading-lg' color='europe-dark'>
                  {t('categories.KA-2.priority-topics.title')}
                </Typography>
                <ul>
                  <Typography as='span' size='body-lg' color='europe-dark'>
                    {t.rich('categories.KA-2.priority-topics.description')}
                  </Typography>
                </ul>
              </div>
              <div className='flex flex-col gap-6'>
                <Typography as='h3' size='heading-lg' color='europe-dark'>
                  {t('categories.KA-2.eligible.title')}
                </Typography>
                <ul>
                  <Typography as='span' size='body-lg' color='europe-dark'>
                    {t.rich('categories.KA-2.eligible.description')}
                  </Typography>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='become-partner'>
        <BecomePartner />
      </section>
    </div>
  );
}
