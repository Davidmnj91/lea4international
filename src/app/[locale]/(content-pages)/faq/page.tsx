import { LanguagePageProps } from '@/i18n';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { tagButtonTypes } from '@/components/button/button';
import { FaqList } from '@/components/faq-list/faq-list';
import Link from 'next/link';
import { FAQCategories, Faqs } from '@/types/faq';

export default function Page({ params: { locale } }: LanguagePageProps) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('faq-page');

  return (
    <div>
      <div className='my-24 flex items-center justify-center'>
        <h1 className='font-title text-desktop-h-2xl text-europe-dark'>
          {t('title')}
        </h1>
      </div>
      <div className='sticky top-20 flex items-center justify-center gap-6 border-y border-y-basics-disabled bg-basics-white px-12 py-6'>
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
          <div className='border-b border-b-basics-disabled px-12 pb-6 pt-12'>
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
    </div>
  );
}
