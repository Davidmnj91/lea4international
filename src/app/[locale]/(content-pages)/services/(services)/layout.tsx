import Link from 'next/link';
import { CaretLeft } from '@phosphor-icons/react/dist/ssr/CaretLeft';
import { useTranslations } from 'next-intl';
import { headers } from 'next/headers';
import { ServicesCategories } from '@/types/services';
import { OtherServices } from '@/components/services/services';
import React from 'react';
import { Typography } from '@/components/typography/typography';

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
          <Typography as='span' size='body-lg' color='europe-dark'>
            {t('back-to-services')}
          </Typography>
        </Link>
      </div>
      {children}
      <section id='other-services'>
        <OtherServices
          services={Object.entries(ServicesCategories)
            .filter(([_, service]) => pathname !== service)
            .map(([_, service]) => service)}
        />
      </section>
    </>
  );
}
