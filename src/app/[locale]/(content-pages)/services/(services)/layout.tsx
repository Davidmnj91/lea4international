import Link from 'next/link';
import { CaretLeftIcon } from '@phosphor-icons/react/dist/ssr';
import { useTranslations } from 'next-intl';
import { headers } from 'next/headers';
import { ServicesCategories } from '@/types/services';
import { OtherServices } from '@/components/services/services';
import React, { use } from 'react';
import { Typography } from '@/components/typography/typography';

type RootServicesLayoutProps = {
  children: React.ReactNode;
};

export default function RootServicesLayout({
  children,
}: RootServicesLayoutProps) {
  const t = useTranslations('services-page.services');

  const heads = use(headers());
  const pathname = heads.get('next-url')?.split('/').pop();

  return (
    <>
      <div className='border-basics-disabled desktop:px-12 flex border-b px-6 py-2.5'>
        <Link href={'/services'} className='flex items-center gap-4'>
          <CaretLeftIcon size={32} weight='thin' />
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
