'use client';

import { useTranslations } from 'next-intl';
import main_bg from '../../../public/images/main_bg.webp';
import who_we_are_bg from '../../../public/images/home/who_we_are_bg.webp';
import our_beliefs_bg from '../../../public/images/home/our_beliefs_bg.webp';
import our_commitment_bg from '../../../public/images/home/our_commitment_bg.webp';
import { buttonTypes, tagButtonTypes } from '@/components/button/button';
import clsx from 'clsx';
import { CommitmentsCarousel } from '@/components/commitments-carousel/commitments-carousel';
import { FaqList } from '@/components/faq-list/faq-list';
import { FAQCategories, Faqs } from '@/types/faq';
import { Subset } from '@/types/types';
import { Partners } from '@/components/partners/partners';
import { Menu } from '@/components/menu/menu';
import LocaleSwitcher from '@/components/locale-switcher/locale-switcher';
import React, { Fragment, useCallback, useRef, useState } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { MoreInfo } from '@/components/more-info/more-info';
import { Typography } from '@/components/typography/typography';
import { MobileMenu } from '@/components/header/header';
import { TopDestinations } from '@/components/top-destinations/top-destinations';
import { Destinations } from '@/types/destinations';
import Link from 'next/link';
import { Contact } from '@/types/contact';
import { FullLogo } from '@/components/logo/fullLogo';

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
  const [menuOpen, setMenuOpen] = useState(false);

  const headerVariants: Variants = {
    transparent: {
      backgroundColor: '#2E3B4800',
      transition: { duration: 0.3, easings: ['easeIn'] },
    },
    opaque: {
      backgroundColor: '#2E3B48',
      transition: { duration: 0.3, easings: ['easeOut'] },
    },
  };

  const handleMenuOpen = useCallback(
    (open: boolean) => {
      if (menuOpen !== open && ref.current) {
        setMenuOpen(open);
        document.body.style.overflow = open ? 'hidden' : 'auto';
      }
    },
    [menuOpen]
  );

  return (
    <>
      <motion.header
        variants={headerVariants}
        animate={inView && !menuOpen ? 'transparent' : 'opaque'}
        className='sticky top-0 z-50 flex h-[80px] items-center justify-between px-6 py-2.5 desktop:p-10'
      >
        <FullLogo width={129} height={50} />
        <div className='desktop:hidden'>
          <MobileMenu onStateChange={handleMenuOpen} />
        </div>
        <nav className='hidden items-center gap-[70px] desktop:flex'>
          <Menu />
          <LocaleSwitcher />
        </nav>
      </motion.header>
      <main>
        <div
          ref={ref}
          style={{
            position: 'absolute',
            height: '100vh',
            width: '100%',
            zIndex: '-1',
            backgroundImage: `url(${main_bg.src}), linear-gradient(#0308227F,#0308227F)`,
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
              size='body-md'
              color='basics-white'
              className='max-w-[336px] text-center desktop:max-w-[840px]'
            >
              {t.rich('slogan')}
            </Typography>
          </div>
          <Link
            href={'/contact/general'}
            className={clsx('mt-[60px]', buttonTypes({ intent: 'primary' }))}
          >
            {t('request-more-info')}
          </Link>
        </div>
        <section id='who-we-are'>
          <div
            className='w-full bg-cover bg-center desktop:mt-14'
            style={{
              backgroundImage: `url(${who_we_are_bg.src})`,
            }}
          >
            <div className='flex w-full flex-col justify-center desktop:flex-row'>
              <div className='flex flex-col justify-between gap-8 bg-star-light px-6 py-9 desktop:mt-[-28px] desktop:h-[550px] desktop:max-w-[416px] desktop:gap-0'>
                <div>
                  <Typography
                    as='span'
                    size='heading-sm'
                    color='gold-dark'
                    weight='bold'
                  >
                    {Contact.companyName}
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
                  <Link
                    href={'/services'}
                    className={clsx(tagButtonTypes(), 'mt-8')}
                  >
                    {t('see-more')}
                  </Link>
                </div>
              </div>
              <div className='flex flex-col justify-between gap-8 bg-basics-white px-6 py-9 desktop:h-[550px] desktop:max-w-[416px] desktop:gap-0'>
                <div>
                  <Typography
                    as='span'
                    size='heading-sm'
                    color='gold-dark'
                    weight='bold'
                  >
                    {Contact.companyName}
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
              <div
                className='h-[130px] w-full bg-cover bg-center desktop:hidden'
                style={{
                  backgroundImage: `url(${who_we_are_bg.src})`,
                }}
              />
            </div>
          </div>
          <div className='w-full desktop:mt-[176px]'>
            <div
              className='w-full bg-europe bg-no-repeat'
              style={{
                backgroundImage: `url(${our_beliefs_bg.src})`,
              }}
            >
              <div className='flex w-full flex-col justify-center desktop:flex-row desktop:gap-20'>
                <div className='flex flex-col justify-between gap-8 bg-basics-white p-6 desktop:mt-[-128px] desktop:h-[478px] desktop:max-w-[490px] desktop:gap-0'>
                  <div>
                    <Typography
                      as='span'
                      size='heading-sm'
                      color='gold-dark'
                      weight='bold'
                    >
                      {Contact.companyName}
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
                <div
                  className='h-[130px] w-full bg-cover bg-center desktop:hidden'
                  style={{
                    backgroundImage: `url(${our_beliefs_bg.src})`,
                  }}
                />
                <div className='flex flex-col justify-between gap-8 bg-basics-white p-6 desktop:h-[542px] desktop:max-w-[490px] desktop:gap-0'>
                  <div>
                    <Typography
                      as='span'
                      size='heading-sm'
                      color='gold-dark'
                      weight='bold'
                    >
                      {Contact.companyName}
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
                  className='flex w-[242px] flex-col items-center text-center desktop:w-[816px] desktop:flex-row'
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
          <div className='mx-0 mt-14 desktop:mx-12 desktop:my-14'>
            <div className='flex flex-col-reverse gap-6 desktop:flex-row desktop:justify-center desktop:gap-20'>
              <CommitmentsCarousel />
              <div>
                <Typography
                  as='h3'
                  size='heading-2xl'
                  color='europe-dark'
                  className='mx-2.5 border-b-2 border-b-europe-light text-center desktop:mx-0 desktop:text-left'
                >
                  {t('our-commitment.title')}
                </Typography>
              </div>
            </div>
          </div>
          <div
            className='h-[172px] w-full bg-cover bg-center bg-no-repeat desktop:mt-[-280px] desktop:h-[496px]'
            style={{
              backgroundImage: `url(${our_commitment_bg.src})`,
            }}
          />
        </section>
        <section id='top-destinations'>
          <TopDestinations
            destinations={[
              Destinations.PRAGUE,
              Destinations.MADRID,
              Destinations.MALAGA,
            ]}
          />
        </section>
        <section id='faq'>
          <div className='flex flex-col items-center justify-center px-2.5 pt-16 desktop:mt-14'>
            <Typography
              as='h3'
              size='heading-2xl'
              color='europe-dark'
              className='text-center desktop:text-left'
            >
              {t('faq.title')}
            </Typography>
            <div className='my-14 flex items-center justify-center'>
              <span className='w-[76px] border-b border-b-europe desktop:w-[250px]' />
              <Link
                href={'/faq'}
                className={clsx(
                  'mx-4',
                  buttonTypes({ intent: 'secondary-light' })
                )}
              >
                {t('faq.see-more')}
              </Link>
              <span className='w-[76px] border-b border-b-europe desktop:w-[250px]' />
            </div>
            <div
              className='max-w-[1440px] desktop:my-14'
              itemScope
              itemType='https://schema.org/FAQPage'
            >
              {Object.entries(FaqsHome)
                .flatMap(([category, faqs]) =>
                  faqs.map((faq) => `${category}.${faq}`)
                )
                .map((faq) => (
                  <div
                    key={faq}
                    className='border-b-2 border-t-0 border-basics-disabled px-3.5 py-6 first-of-type:border-t-2 desktop:px-12'
                    itemProp='mainEntity'
                    itemType='https://schema.org/Question'
                  >
                    <FaqList faqKey={faq} />
                  </div>
                ))}
            </div>
          </div>
        </section>
        <section id='more-info'>
          <div className='flex items-center justify-center desktop:my-14'>
            <MoreInfo />
          </div>
        </section>
        <section id='our-partners'>
          <div className='py-16'>
            <Partners />
          </div>
        </section>
      </main>
    </>
  );
}
