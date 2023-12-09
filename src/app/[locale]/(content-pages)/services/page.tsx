import { LanguagePageProps } from '@/i18n';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { AnimatedCard } from '@/components/destination-card/animated-card';
import concierge_bg from '../../../../../public/concierge_bg.png';
import erasmus_bg from '../../../../../public/erasmus_bg.png';
import language_courses_bg from '../../../../../public/language_courses_bg.png';
import { Partners } from '@/components/partners/partners';
import Link from 'next/link';

export default function Page({ params: { locale } }: LanguagePageProps) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('services-page');

  return (
    <div>
      <div className='flex h-[410px] flex-col items-center gap-6 bg-europe px-2.5 py-14'>
        <h1 className='font-title text-desktop-h-2xl text-basics-white'>
          {t('title')}
        </h1>
        <span className='text-center font-body text-b-lg font-light text-basics-white'>
          {t.rich('message')}
        </span>
      </div>
      <div className='mt-[-160px] flex items-center justify-center gap-4'>
        <Link href={'services/erasmus'}>
          <AnimatedCard
            imgSrc={erasmus_bg.src}
            title={t('services.erasmus.title')}
            caption={t('services.see-more')}
          />
        </Link>
        <Link href={'services/language-courses'}>
          <AnimatedCard
            imgSrc={language_courses_bg.src}
            title={t('services.language-courses.title')}
            caption={t('services.see-more')}
          />
        </Link>
        <Link href={'services/concierge'}>
          <AnimatedCard
            imgSrc={concierge_bg.src}
            title={t('services.concierge.title')}
            caption={t('services.see-more')}
          />
        </Link>
      </div>
      <Partners />
    </div>
  );
}
