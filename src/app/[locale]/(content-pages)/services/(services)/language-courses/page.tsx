import { LanguagePageProps } from '@/i18n';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Services } from '@/types/services';
import { JSX } from 'react';
import { CubeFocus } from '@phosphor-icons/react/dist/ssr/CubeFocus';
import { Lifebuoy } from '@phosphor-icons/react/dist/ssr/Lifebuoy';
import { MagnifyingGlassPlus } from '@phosphor-icons/react/dist/ssr/MagnifyingGlassPlus';
import Link from 'next/link';
import { tagButtonTypes } from '@/components/button/button';
import { ServiceItem } from '@/components/service-item/service-item';
import english_courses_bg from '../../../../../../../public/english_courses_bg.png';
import business_english_courses_bg from '../../../../../../../public/business_english_courses_bg.png';
import spanish_courses_bg from '../../../../../../../public/spanish_courses_bg.png';
import business_spanish_courses_bg from '../../../../../../../public/business_spanish_courses_bg.png';
import clsx from 'clsx';
import { Typography } from '@/components/typography/typography';

export default function Page({ params: { locale } }: LanguagePageProps) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('services-page.services.language-courses');

  const erasmusServices = Services['language-courses'];

  const sections = {
    'english-courses': english_courses_bg.src,
    'business-english-courses': business_english_courses_bg.src,
    'spanish-courses': spanish_courses_bg.src,
    'business-spanish-courses': business_spanish_courses_bg.src,
  };

  const courses: Record<string, JSX.Element> = {
    focus: <CubeFocus size={32} />,
    help: <Lifebuoy size={32} />,
    details: <MagnifyingGlassPlus size={32} />,
  };

  const aiTrainings = ['machine-learning', 'data-mining', 'ai-for-business'];

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
            <div className='flex flex-col gap-8 p-6 desktop:flex-[0_0_60%] desktop:gap-24 desktop:px-12 desktop:py-24'>
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
              className='hidden flex-[0_0_40%] bg-cover bg-no-repeat desktop:inline-block'
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
          <div className='flex flex-col justify-center gap-10 desktop:flex-row'>
            {aiTrainings.map((training) => (
              <div
                key={training}
                className='flex w-[246px] items-center justify-center border border-gold p-4 desktop:w-auto'
              >
                <Typography as='h3' size='heading-md' color='europe-dark'>
                  {t(`categories.ai-trainings.we-offer.${training}`)}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
