import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { CaretLeft } from '@phosphor-icons/react/dist/ssr/CaretLeft';
import { BigButton } from '@/components/button/big-button';

type RootDestinationsLayoutProps = {
  children: React.ReactNode;
};

export default function RootDestinationsLayout({
  children,
}: RootDestinationsLayoutProps) {
  const t = useTranslations('destinations-page');

  return (
    <>
      <div className='flex border-b border-basics-disabled px-12 py-2.5'>
        <Link href={'/destinations'} className='flex items-center gap-4'>
          <CaretLeft size={32} />
          <span className='font-body text-b-lg text-europe-dark'>
            {t('back-to-destinations')}
          </span>
        </Link>
      </div>
      {children}
      <div className='flex justify-center desktop:py-14'>
        <div className='flex flex-col gap-6 bg-europe px-6 py-14 desktop:gap-9 desktop:p-14'>
          <h3 className='font-title text-desktop-h-2xl text-basics-white'>
            {t('inspired.title')}
          </h3>
          <p className='font-body text-b-lg text-basics-white'>
            {t.rich('inspired.description')}
          </p>
          <div className='flex flex-col gap-6 desktop:flex-row desktop:gap-8'>
            <BigButton title={t('inspired.join')} caption={t('contact-us')} />
            <BigButton
              title={t('inspired.accommodations')}
              caption={t('see-more')}
            />
          </div>
        </div>
      </div>
    </>
  );
}
