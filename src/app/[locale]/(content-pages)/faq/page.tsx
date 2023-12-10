import { LanguagePageProps } from '@/i18n';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { tagButtonTypes } from '@/components/button/button';
import { FaqList } from '@/components/faq-list/faq-list';
import Link from 'next/link';
import { FAQCategories, Faqs } from '@/types/faq';
import { MoreInfo } from '@/components/more-info/more-info';
import React from 'react';

export default function Page({ params: { locale } }: LanguagePageProps) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('faq-page');

  return (
    <div>
      <div className='flex items-center justify-center py-14 desktop:py-24'>
        <h1 className='text-center font-title text-desktop-h-2xl text-europe-dark desktop:text-left'>
          {t('title')}
        </h1>
      </div>
      <section id='faq' className='relative'>
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
            <div className='border-b border-b-basics-disabled px-6 pb-6 pt-12 desktop:px-12'>
              <h2 className='font-title text-desktop-h-xl text-europe-dark'>
                {t(`categories.${category}`)}
              </h2>
            </div>
            {items.map((faq) => (
              <div
                key={faq}
                className='border-b-2 border-t-0 border-basics-disabled px-12 py-6 first-of-type:border-t-2'
              >
                <FaqList key={faq} faqKey={`${category}.${faq}`} />
              </div>
            ))}
          </section>
        ))}
      </section>
      <section id='more-info'>
        <MoreInfo />
      </section>
    </div>
  );
}
