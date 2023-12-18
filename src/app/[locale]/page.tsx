'use client';

import { useTranslations } from 'next-intl';
import hero_bg from '../../../public/hero_bg.png';
import who_we_are_bg from '../../../public/who_we_are_bg.png';
import our_beliefs_bg from '../../../public/our_beliefs_bg.png';
import our_commitment_bg from '../../../public/our_commitment_bg.png';
import praga_bg from '../../../public/praga_bg.png';
import madrid_bg from '../../../public/madrid_bg.png';
import malaga_bg from '../../../public/malaga_bg.png';
import { buttonTypes } from '@/components/button/button';
import clsx from 'clsx';
import { CommitmentsCarousel } from '@/components/commitments-carousel/commitments-carousel';
import { AnimatedCard } from '@/components/destination-card/animated-card';
import { FaqList } from '@/components/faq-list/faq-list';
import { FAQCategories, Faqs } from '@/types/faq';
import { Subset } from '@/types/types';
import { Partners } from '@/components/partners/partners';
import { Menu } from '@/components/menu/menu';
import LocaleSwitcher from '@/components/locale-switcher/locale-switcher';
import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { MoreInfo } from '@/components/more-info/more-info';
import { Typography } from '@/components/typography/typography';

const FaqsHome: Subset<typeof Faqs> = {
  [FAQCategories.erasmus]: [
    'what-is-erasmus-plus',
    'how-to-erasmus-plus',
    'why-erasmus-plus',
  ],
  [FAQCategories.languageCourses]: ['language-courses-offer'],
  [FAQCategories.concierge]: ['what-included'],
};

export default function HomePage() {
  const t = useTranslations('home-page');

  const ref = useRef(null);
  const inView = useInView(ref);

  const headerVariants: Variants = {
    transparent: {
      backgroundColor: '#2E3B4800',
      transition: { duration: 0.5, easings: ['easeIn'] },
    },
    opaque: {
      backgroundColor: '#2E3B48',
      transition: { duration: 0.5, easings: ['easeOut'] },
    },
  };

  return (
    <>
      <motion.header
        variants={headerVariants}
        animate={inView ? 'transparent' : 'opaque'}
        className='sticky top-0 z-50 flex h-[80px] items-center justify-between bg-europe px-[40px]'
      >
        <Typography as='h1' size='heading-2xl' color='basics-white'>
          LOGO
        </Typography>
        <nav className='flex items-center gap-[70px]'>
          <Menu />
        </nav>
        <LocaleSwitcher />
      </motion.header>
      <main>
        <div
          ref={ref}
          style={{
            position: 'absolute',
            height: '100vh',
            width: '100%',
            zIndex: '-1',
            backgroundImage: `url(${hero_bg.src}), linear-gradient(#0308227F,#0308227F)`,
            backgroundBlendMode: 'overlay',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className='m-auto mt-[-80px] flex h-screen w-full flex-col items-center justify-center'>
          <div>
            <Typography
              as='h1'
              size='heading-4xl'
              color='basics-disabled'
              className='text-center'
            >
              {t('language')}
            </Typography>
            <Typography
              as='h1'
              size='heading-4xl'
              color='basics-disabled'
              className='text-center'
            >
              {t('education')}
            </Typography>
            <Typography
              as='h1'
              size='heading-4xl'
              color='basics-disabled'
              className='text-center'
            >
              {t('travel')}
            </Typography>
          </div>
          <div className='mt-[36px]'>
            <Typography
              as='h2'
              size='body-xl'
              color='basics-white'
              className='max-w-[840px] text-center'
            >
              {t('slogan')}
            </Typography>
          </div>
          <button
            className={clsx('mt-[60px]', buttonTypes({ intent: 'primary' }))}
          >
            {t('request-more-info')}
          </button>
        </div>
        <section id='who-we-are'>
          <div
            style={{
              marginTop: '56px',
              width: '100%',
              backgroundImage: `url(${who_we_are_bg.src})`,
            }}
          >
            <div className='flex w-full justify-center'>
              <div className='mt-[-28px] flex h-[550px] max-w-[416px] flex-col justify-between bg-star-light px-6 py-9'>
                <div>
                  <Typography
                    as='span'
                    size='heading-sm'
                    color='gold-dark'
                    weight='bold'
                  >
                    Company Name
                  </Typography>
                  <Typography as='h1' size='heading-xl' color='europe-dark'>
                    {t('who-we-are.title')}
                  </Typography>
                </div>
                <div>
                  <Typography
                    as='p'
                    size='body-lg'
                    color='europe-dark'
                    dangerouslySetInnerHTML={{
                      __html: t.raw('who-we-are.description'),
                    }}
                  />
                  <button
                    className={clsx(
                      'mt-8',
                      buttonTypes({ intent: 'secondary-light' })
                    )}
                  >
                    {t('see-more')}
                  </button>
                </div>
              </div>
              <div className='flex h-[550px] max-w-[416px] flex-col justify-between bg-basics-white px-6 py-9'>
                <div>
                  <Typography
                    as='span'
                    size='heading-sm'
                    color='gold-dark'
                    weight='bold'
                  >
                    Company Name
                  </Typography>
                  <Typography as='h1' size='heading-xl' color='europe-dark'>
                    {t('our-focus.title')}
                  </Typography>
                </div>
                <Typography
                  as='p'
                  size='body-lg'
                  color='europe-dark'
                  dangerouslySetInnerHTML={{
                    __html: t.raw('our-focus.description'),
                  }}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: '176px',
              width: '100%',
            }}
          >
            <div
              className='bg-europe'
              style={{
                width: '100%',
                backgroundImage: `url(${our_beliefs_bg.src})`,
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className='flex w-full justify-center gap-20'>
                <div className='mt-[-128px] flex  h-[478px] max-w-[490px] flex-col justify-between bg-basics-white p-6'>
                  <div>
                    <Typography
                      as='span'
                      size='heading-sm'
                      color='gold-dark'
                      weight='bold'
                    >
                      Company Name
                    </Typography>
                    <Typography as='h1' size='heading-xl' color='europe-dark'>
                      {t('our-beliefs.title')}
                    </Typography>
                  </div>
                  <Typography
                    as='p'
                    size='body-lg'
                    color='europe-dark'
                    dangerouslySetInnerHTML={{
                      __html: t.raw('our-beliefs.description'),
                    }}
                  />
                </div>
                <div className='flex h-[542px] max-w-[490px] flex-col justify-between bg-basics-white p-6'>
                  <div>
                    <Typography
                      as='span'
                      size='heading-sm'
                      color='gold-dark'
                      weight='bold'
                    >
                      Company Name
                    </Typography>
                    <Typography as='h1' size='heading-xl' color='europe-dark'>
                      {t('coming-challenges.title')}
                    </Typography>
                  </div>
                  <Typography
                    as='p'
                    size='body-lg'
                    color='europe-dark'
                    dangerouslySetInnerHTML={{
                      __html: t.raw('coming-challenges.description'),
                    }}
                  />
                </div>
              </div>
              <div className='relative flex items-center justify-center py-20'>
                <Typography
                  as='h3'
                  size='heading-lg'
                  color='basics-white'
                  className='flex w-[816px] items-center text-center'
                >
                  <Typography as='span' size='heading-4xl' color='gold-dark'>
                    &ldquo;
                  </Typography>
                  {t('help-you')}
                  <Typography as='span' size='heading-4xl' color='gold-dark'>
                    &rdquo;
                  </Typography>
                </Typography>
              </div>
            </div>
          </div>
        </section>
        <section id='our-commitment'>
          <div className='mx-12 my-14'>
            <div className='flex justify-between'>
              <CommitmentsCarousel />
              <div>
                <Typography
                  as='h3'
                  size='heading-2xl'
                  color='europe-dark'
                  className='border-b-2 border-b-europe-light'
                >
                  {t('our-commitment.title')}
                </Typography>
              </div>
            </div>
          </div>
          <div
            style={{
              width: '100%',
              height: '496px',
              backgroundImage: `url(${our_commitment_bg.src})`,
              backgroundRepeat: 'no-repeat',
              marginTop: '-280px',
            }}
          />
        </section>
        <section id='top-destinations'>
          <div className='mt-14 flex h-[410px] flex-col items-center justify-start bg-europe pt-14'>
            <Typography as='h3' size='heading-2xl' color='basics-white'>
              {t('top-destinations.title')}
            </Typography>
            <div className='mt-6 flex items-center justify-center'>
              <span className='h-1 w-[250px] border-b border-b-europe-light' />
              <button
                className={clsx(
                  'mx-4',
                  buttonTypes({ intent: 'secondary-dark' })
                )}
              >
                {t('top-destinations.see-all')}
              </button>
              <span className='h-1 w-[250px] border-b border-b-europe-light' />
            </div>
          </div>
          <div className='mt mt-[-152px] flex justify-center gap-4'>
            <AnimatedCard
              imgSrc={praga_bg.src}
              title={t('top-destinations.destinations.prague')}
              caption={t('top-destinations.destinations.czech')}
              containerClasses='w-[328px] h-[506px]'
              labelClasses='w-[174px] h-[192px]'
            />
            <AnimatedCard
              imgSrc={madrid_bg.src}
              title={t('top-destinations.destinations.madrid')}
              caption={t('top-destinations.destinations.spain')}
              containerClasses='w-[328px] h-[506px]'
              labelClasses='w-[174px] h-[192px]'
            />
            <AnimatedCard
              imgSrc={malaga_bg.src}
              title={t('top-destinations.destinations.malaga')}
              caption={t('top-destinations.destinations.spain')}
              containerClasses='w-[328px] h-[506px]'
              labelClasses='w-[174px] h-[192px]'
            />
          </div>
        </section>
        <section id='faq'>
          <div className='mt-14 flex flex-col items-center justify-center pt-16'>
            <Typography as='h3' size='heading-2xl' color='europe-dark'>
              {t('faq.title')}
            </Typography>
            <div className='mt-14 flex items-center justify-center'>
              <span className='h-1 w-[250px] border-b border-b-europe' />
              <button
                className={clsx(
                  'mx-4',
                  buttonTypes({ intent: 'secondary-light' })
                )}
              >
                {t('faq.see-more')}
              </button>
              <span className='h-1 w-[250px] border-b border-b-europe' />
            </div>
            <div className='my-14 w-full'>
              {Object.entries(FaqsHome)
                .flatMap(([category, faqs]) =>
                  faqs.map((faq) => `${category}.${faq}`)
                )
                .map((faq) => (
                  <div
                    key={faq}
                    className='border-b-2 border-t-0 border-basics-disabled px-12 py-6 first-of-type:border-t-2'
                  >
                    <FaqList faqKey={faq} />
                  </div>
                ))}
            </div>
          </div>
        </section>
        <section id='more-info'>
          <div className='my-14 flex items-center justify-center'>
            <MoreInfo />
          </div>
        </section>
        <section id='our-partners'>
          <Partners />
        </section>
      </main>
    </>
  );
}
