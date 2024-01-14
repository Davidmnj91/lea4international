import { LanguagePageProps } from '@/i18n';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { tagButtonTypes } from '@/components/button/button';
import { FaqList } from '@/components/faq-list/faq-list';
import Link from 'next/link';
import { FAQCategories, Faqs } from '@/types/faq';
import { MoreInfo } from '@/components/more-info/more-info';
import React from 'react';
import { Typography } from '@/components/typography/typography';

export default function Page({ params: { locale } }: LanguagePageProps) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('faq-page');

  return (
    <div itemScope itemType='https://schema.org/FAQPage'>
      <div>
        <div className='flex items-center justify-center py-14 desktop:py-24'>
          <Typography
            as='h1'
            size='heading-2xl'
            color='europe-dark'
            className='text-center desktop:text-left'
          >
            {t('title')}
          </Typography>
        </div>
        <div className='sticky top-20 flex items-center gap-6 overflow-auto border-y border-y-basics-disabled bg-basics-white px-6 py-6 desktop:justify-center desktop:overflow-hidden desktop:px-12'>
          {Object.values(FAQCategories).map((category) => (
            <Link
              href={`#${category}`}
              scroll={true}
              key={category}
              className={tagButtonTypes()}
            >
              {t(`categories.${category}`)}
            </Link>
          ))}
        </div>
        {Object.entries(Faqs).map(([category, items]) => (
          <section key={category} id={category}>
            <div className='border-b border-b-basics-disabled px-6 pb-2 pt-6 desktop:px-12 desktop:pb-6 desktop:pt-12'>
              <Typography
                as='h2'
                size='heading-xl'
                color='europe-dark'
                weight='bold'
              >
                {t(`categories.${category}`)}
              </Typography>
            </div>
            {items.map((faq) => (
              <div
                key={faq}
                className='border-b-2 border-t-0 border-basics-disabled px-12 py-6 first-of-type:border-t-2'
                itemScope
                itemProp='mainEntity'
                itemType='https://schema.org/Question'
              >
                <FaqList key={faq} faqKey={`${category}.${faq}`} />
              </div>
            ))}
          </section>
        ))}
      </div>
      <section id='more-info'>
        <div className='py-14'>
          <MoreInfo />
        </div>
      </section>
    </div>
  );
}
