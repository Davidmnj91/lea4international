import Link from 'next/link';
import { CaretLeft } from '@phosphor-icons/react/dist/ssr/CaretLeft';
import { useTranslations } from 'next-intl';
import { AnimatedCard } from '@/components/destination-card/animated-card';
import language_courses_bg from '../../../../../../public/language_courses_bg.png';
import concierge_bg from '../../../../../../public/concierge_bg.png';
import erasmus_bg from '../../../../../../public/erasmus_bg.png';
import student_exchange_bg from '../../../../../../public/student_exchange_bg.png';
import { headers } from 'next/headers';

type RootServicesLayoutProps = {
  children: React.ReactNode;
};

export default function RootServicesLayout({
  children,
}: RootServicesLayoutProps) {
  const t = useTranslations('services-page.services');

  const heads = headers();
  const pathname = heads.get('next-url')?.split('/').pop();

  return (
    <>
      <div className='flex border-b border-basics-disabled px-12 py-2.5'>
        <Link href={'/services'} className='flex items-center gap-4'>
          <CaretLeft size={32} />
          <span className='font-body text-b-lg text-europe-dark'>
            {t('back-to-services')}
          </span>
        </Link>
      </div>
      {children}
      <div className='flex h-[410px] flex-col items-center gap-6 bg-europe px-2.5 py-8 text-center desktop:py-14 desktop:text-left'>
        <h3 className='font-title text-desktop-h-2xl text-basics-white'>
          {t('other-services.title')}
        </h3>
        <p className='text-center font-body text-b-lg font-light text-basics-white'>
          {t.rich('other-services.description')}
        </p>
      </div>
      <div className='mt-[-80px] flex items-center gap-4 overflow-auto p-6 desktop:mt-[-160px] desktop:justify-center desktop:overflow-hidden'>
        {pathname !== 'erasmus' && (
          <Link href={'erasmus'}>
            <AnimatedCard
              imgSrc={erasmus_bg.src}
              title={t('erasmus.title')}
              caption={t('see-more')}
            />
          </Link>
        )}
        {pathname !== 'language-courses' && (
          <Link href={'language-courses'}>
            <AnimatedCard
              imgSrc={language_courses_bg.src}
              title={t('language-courses.title')}
              caption={t('see-more')}
            />
          </Link>
        )}
        {pathname !== 'student-exchange' && (
          <Link href={'student-exchange'}>
            <AnimatedCard
              imgSrc={student_exchange_bg.src}
              title={t('student-exchange.title')}
              caption={t('see-more')}
            />
          </Link>
        )}
        {pathname !== 'concierge' && (
          <Link href={'concierge'}>
            <AnimatedCard
              imgSrc={concierge_bg.src}
              title={t('concierge.title')}
              caption={t('see-more')}
            />
          </Link>
        )}
      </div>
    </>
  );
}
