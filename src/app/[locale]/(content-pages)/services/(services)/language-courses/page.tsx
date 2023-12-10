import { LanguagePageProps } from '@/i18n';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Services } from '@/types/services';
import { JSX } from 'react';
import { CubeFocus } from '@phosphor-icons/react/dist/ssr/CubeFocus';
import { Lifebuoy } from '@phosphor-icons/react/dist/ssr/Lifebuoy';
import { MagnifyingGlassPlus } from '@phosphor-icons/react/dist/ssr/MagnifyingGlassPlus';
import Link from 'next/link';
import { buttonTypes } from '@/components/button/button';
import { ServiceItem } from '@/components/service-item/service-item';
import english_courses_bg from '../../../../../../../public/english_courses_bg.png';
import business_english_courses_bg from '../../../../../../../public/business_english_courses_bg.png';
import spanish_courses_bg from '../../../../../../../public/spanish_courses_bg.png';
import business_spanish_courses_bg from '../../../../../../../public/business_spanish_courses_bg.png';
import clsx from 'clsx';

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
      <div className='flex flex-col items-center justify-center gap-32 px-12 py-24'>
        <div className='flex flex-col items-center justify-center'>
          <span className='font-title text-desktop-h-sm font-bold text-gold-dark'>
            {t('overview')}
          </span>
          <h2 className='font-title text-desktop-h-xl text-europe-dark'>
            {t('sub-title')}
          </h2>
        </div>
        <p className='text-center font-body text-b-lg text-europe-dark'>
          {t('description')}
        </p>
      </div>
      {Object.entries(sections).map(([section, imgSrc], index) => (
        <section key={section} id={section}>
          <div className={clsx('flex', index % 2 !== 0 && 'flex-row-reverse')}>
            <div className='flex flex-[0_0_60%] flex-col gap-24 px-12 py-24'>
              <h2 className='font-title text-desktop-h-xl text-europe-dark'>
                {t(`categories.${section}.title`)}
              </h2>
              <p className='font-body text-b-lg text-europe-dark'>
                {t.rich(`categories.${section}.description`)}
              </p>
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
              className='flex-[0_0_40%]'
              style={{
                backgroundImage: `url(${imgSrc})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            />
          </div>
        </section>
      ))}
      <section id='ai-trainings'>
        <div className='flex flex-col items-center justify-center gap-32 px-12 py-24'>
          <div className='flex flex-col items-center justify-center'>
            <span className='font-title text-desktop-h-sm font-bold text-gold-dark'>
              {t('overview')}
            </span>
            <h2 className='font-title text-desktop-h-xl text-europe-dark'>
              {t(`categories.ai-trainings.title`)}
            </h2>
          </div>
          <p className='text-center font-body text-b-lg text-europe-dark'>
            {t.rich(`categories.ai-trainings.description`)}
          </p>
          <div className='flex justify-center gap-10'>
            {aiTrainings.map((training) => (
              <div
                key={training}
                className='flex items-center border border-gold p-4'
              >
                <h3 className='font-title text-desktop-h-md text-europe-dark'>
                  {t(`categories.ai-trainings.we-offer.${training}`)}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
