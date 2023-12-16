import Link from 'next/link';
import { CaretLeft } from '@phosphor-icons/react/dist/ssr/CaretLeft';
import { useTranslations } from 'next-intl';
import { AnimatedCard } from '@/components/destination-card/animated-card';
import { headers } from 'next/headers';
import { servicesCardConfig } from '@/types/services';

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
        {Object.entries(servicesCardConfig)
          .filter(([service, _]) => pathname !== service)
          .map(([service, imgSrc]) => (
            <Link key={service} href={service}>
              <AnimatedCard
                imgSrc={imgSrc}
                title={t(`${service}.title`)}
                caption={t('see-more')}
                containerClasses='w-[328px] h-[506px]'
                labelClasses='w-[174px] h-[192px]'
              />
            </Link>
          ))}
      </div>
    </>
  );
}
