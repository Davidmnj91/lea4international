import { LanguagePageProps } from '@/i18n';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Services } from '@/types/services';
import React, { JSX } from 'react';
import { CubeFocus } from '@phosphor-icons/react/dist/ssr/CubeFocus';
import { Lifebuoy } from '@phosphor-icons/react/dist/ssr/Lifebuoy';
import { MagnifyingGlassPlus } from '@phosphor-icons/react/dist/ssr/MagnifyingGlassPlus';
import { Robot } from '@phosphor-icons/react/dist/ssr/Robot';
import { HardDrives } from '@phosphor-icons/react/dist/ssr/HardDrives';
import { Chats } from '@phosphor-icons/react/dist/ssr/Chats';
import { ChartLine } from '@phosphor-icons/react/dist/ssr/ChartLine';
import { UserFocus } from '@phosphor-icons/react/dist/ssr/UserFocus';
import { Kanban } from '@phosphor-icons/react/dist/ssr/Kanban';
import { Detective } from '@phosphor-icons/react/dist/ssr/Detective';
import { Person } from '@phosphor-icons/react/dist/ssr/Person';
import { GlobeSimple } from '@phosphor-icons/react/dist/ssr/GlobeSimple';
import Link from 'next/link';
import { tagButtonTypes } from '@/components/button/button';
import { ServiceItem } from '@/components/service-item/service-item';
import english_courses_bg from '../../../../../../../public/images/services/language-courses/english_courses_bg.webp';
import business_english_courses_bg from '../../../../../../../public/images/services/language-courses/business_english_courses_bg.webp';
import spanish_courses_bg from '../../../../../../../public/images/services/language-courses/spanish_courses_bg.webp';
import business_spanish_courses_bg from '../../../../../../../public/images/services/language-courses/business_spanish_courses_bg.webp';
import machine_learning_bg from '../../../../../../../public/images/services/language-courses/machine_learning_bg.webp';
import data_mining_bg from '../../../../../../../public/images/services/language-courses/data_mining_bg.webp';
import business_ia_bg from '../../../../../../../public/images/services/language-courses/business_ia_bg.webp';
import business_development_bg from '../../../../../../../public/images/services/language-courses/business_development_bg.webp';
import clsx from 'clsx';
import { Typography } from '@/components/typography/typography';
import {
  InformationCategories,
  MoreInfo,
} from '@/components/more-info/more-info';
import Image from 'next/image';

export default function Page({ params: { locale } }: LanguagePageProps) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('services-page.services.language-courses');

  const languageCoursesServices = Services['language-courses'];

  const sections = {
    'english-courses': english_courses_bg.src,
    'business-english-courses': business_english_courses_bg.src,
    'spanish-courses': spanish_courses_bg.src,
    'business-spanish-courses': business_spanish_courses_bg.src,
  };

  const iaSections = {
    'machine-learning': machine_learning_bg.src,
    'data-mining': data_mining_bg.src,
  };

  const courses: Record<string, JSX.Element> = {
    focus: <CubeFocus size={32} />,
    help: <Lifebuoy size={32} />,
    details: <MagnifyingGlassPlus size={32} />,
  };

  const iaResources: Record<string, JSX.Element> = {
    automation: <Robot size={32} />,
    'data-analysis': <HardDrives size={32} />,
    'customer-service': <Chats size={32} />,
    'predictive-analytics': <ChartLine size={32} />,
    personalization: <UserFocus size={32} />,
    'supply-chain': <Kanban size={32} />,
    'fraud-detection': <Detective size={32} />,
    'human-resources': <Person size={32} />,
    'decision-support': <Lifebuoy size={32} />,
    nlp: <GlobeSimple size={32} />,
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
        {languageCoursesServices.map((service) => (
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
      <div className='flex flex-col items-center justify-center gap-8 p-6 desktop:gap-32 desktop:px-12 desktop:py-24'>
        <div className='flex flex-col items-center justify-center'>
          <Typography
            as='span'
            size='heading-sm'
            color='gold-dark'
            weight='bold'
          >
            {t('overview')}
          </Typography>
          <Typography as='h2' size='heading-xl' color='europe-dark'>
            {t('sub-title')}
          </Typography>
        </div>
        <Typography
          as='p'
          size='body-lg'
          color='europe-dark'
          className='text-center'
        >
          {t('description')}
        </Typography>
      </div>
      {Object.entries(sections).map(([section, imgSrc], index) => (
        <section key={section} id={section}>
          <div className={clsx('flex', index % 2 !== 0 && 'flex-row-reverse')}>
            <div className='flex flex-auto flex-col gap-8 p-6 desktop:flex-[0_0_60%] desktop:gap-14 desktop:px-12 desktop:py-24'>
              <Typography as='h2' size='heading-xl' color='europe-dark'>
                {t(`categories.${section}.title`)}
              </Typography>
              <Typography as='p' size='body-lg' color='europe-dark'>
                {t.rich(`categories.${section}.description`)}
              </Typography>
              <div className='flex flex-col gap-4'>
                {Object.entries(courses).map(([title, icon]) => (
                  <ServiceItem
                    key={title}
                    icon={icon}
                    title={t.rich(
                      `categories.${section}.we-offer.${title}.title`
                    )}
                    description={t.rich(
                      `categories.${section}.we-offer.${title}.description`
                    )}
                  />
                ))}
              </div>
            </div>
            <div
              className='hidden bg-cover bg-no-repeat desktop:inline-block desktop:flex-[0_0_40%]'
              style={{
                backgroundImage: `url(${imgSrc})`,
              }}
            />
          </div>
        </section>
      ))}
      <section id='ai-trainings'>
        <div className='flex flex-col items-center justify-center gap-8 p-6 desktop:gap-32 desktop:px-12 desktop:py-24'>
          <div className='flex flex-col items-center justify-center'>
            <Typography
              as='span'
              size='heading-sm'
              color='gold-dark'
              weight='bold'
            >
              {t('overview')}
            </Typography>
            <Typography as='h2' size='heading-xl' color='europe-dark'>
              {t(`categories.ai-trainings.title`)}
            </Typography>
          </div>
          <Typography
            as='p'
            size='body-lg'
            color='europe-dark'
            className='text-center'
          >
            {t.rich(`categories.ai-trainings.description`)}
          </Typography>
        </div>
      </section>
      {Object.entries(iaSections).map(([section, imgSrc], index) => (
        <section key={section} id={section}>
          <div className={clsx('flex', index % 2 !== 0 && 'flex-row-reverse')}>
            <div className='flex flex-auto flex-col gap-8 p-6 desktop:flex-[0_0_60%] desktop:gap-14 desktop:px-12 desktop:py-24'>
              <Typography as='h2' size='heading-xl' color='europe-dark'>
                {t(`categories.${section}.title`)}
              </Typography>
              <Typography as='p' size='body-lg' color='europe-dark'>
                {t.rich(`categories.${section}.description`)}
              </Typography>
            </div>
            <div
              className='hidden bg-cover bg-no-repeat desktop:inline-block desktop:flex-[0_0_40%]'
              style={{
                backgroundImage: `url(${imgSrc})`,
              }}
            />
          </div>
        </section>
      ))}
      <section id='business-ia'>
        <div className='flex'>
          <div className='flex flex-auto flex-col gap-8 p-6 desktop:flex-[0_0_60%] desktop:gap-14 desktop:px-12 desktop:py-24'>
            <Typography as='h2' size='heading-xl' color='europe-dark'>
              {t('categories.business-ia.title')}
            </Typography>
            <Typography as='p' size='body-lg' color='europe-dark'>
              {t.rich('categories.business-ia.description')}
            </Typography>
            <div className='flex flex-col gap-4'>
              {Object.entries(iaResources).map(([title, icon]) => (
                <ServiceItem
                  key={title}
                  icon={icon}
                  description={t.rich(
                    `categories.business-ia.we-offer.${title}`
                  )}
                  mobileDirection='HORIZONTAL'
                />
              ))}
            </div>
            <Typography as='p' size='body-lg' color='europe-dark'>
              {t.rich('categories.business-ia.sub-description')}
            </Typography>
          </div>
          <div
            className='hidden bg-cover bg-no-repeat desktop:inline-block desktop:flex-[0_0_40%]'
            style={{
              backgroundImage: `url(${business_ia_bg.src})`,
            }}
          />
        </div>
      </section>
      <section id='business-development'>
        <div className='flex flex-col items-center justify-center gap-8 p-6 desktop:gap-32 desktop:px-12 desktop:py-24'>
          <div className='flex flex-col items-center justify-center'>
            <Typography
              as='span'
              size='heading-sm'
              color='gold-dark'
              weight='bold'
            >
              {t('overview')}
            </Typography>
            <Typography as='h2' size='heading-xl' color='europe-dark'>
              {t(`categories.business-development.title`)}
            </Typography>
          </div>
          <Typography
            as='p'
            size='body-lg'
            color='europe-dark'
            className='text-center'
          >
            {t.rich(`categories.business-development.description`)}
          </Typography>
        </div>
        <Image
          src={business_development_bg.src}
          alt='BusinessDevelopment'
          height={401}
          width={1440}
          style={{ width: '100%' }}
        />
      </section>
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
