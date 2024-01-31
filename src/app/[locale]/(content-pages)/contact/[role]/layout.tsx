import { useTranslations } from 'next-intl';
import { Typography } from '@/components/typography/typography';
import { tagButtonTypes } from '@/components/button/button';
import React from 'react';
import { Envelope } from '@phosphor-icons/react/dist/ssr/Envelope';
import { Contact } from '@/types/contact';
import { Phone } from '@phosphor-icons/react/dist/ssr/Phone';
import { headers } from 'next/headers';
import Link from 'next/link';

type RootContactLayoutProps = {
  children: React.ReactNode;
};

const roles = ['individual', 'host-family', 'institutions', 'partner'];

export default function RootDestinationsLayout({
  children,
}: RootContactLayoutProps) {
  const t = useTranslations('contact-page');

  const heads = headers();
  const pathname = heads.get('next-url')?.split('/').pop();

  return (
    <div>
      <div className='my-14 flex flex-col items-center justify-center gap-6 desktop:my-24 desktop:gap-1.5'>
        <Typography as='h1' size='heading-2xl' color='europe-dark'>
          {t('title')}
        </Typography>
        <Typography
          as='p'
          size='body-lg'
          color='europe-dark'
          className='text-center desktop:text-left'
        >
          {t('message')}
        </Typography>
      </div>
      <div className='sticky top-[80px] z-20 flex flex-col items-center gap-6 overflow-auto border-y border-y-basics-disabled bg-basics-white px-6 py-6 desktop:flex-row desktop:overflow-hidden desktop:px-16'>
        <Typography
          as='span'
          size='body-lg'
          color='europe-dark'
          className='sticky left-0'
        >
          {t('who-are-you')}
        </Typography>
        <div className='flex gap-6'>
          {roles.map((role) => (
            <Link
              href={`/contact/${role}`}
              key={role}
              className={tagButtonTypes({
                intent: role === pathname ? 'selected' : 'enabled',
              })}
            >
              {t(`roles.${role}`)}
            </Link>
          ))}
        </div>
      </div>
      <div className='flex justify-center p-6 desktop:px-24 desktop:py-12'>
        {children}
      </div>
      <div className='flex flex-col items-center justify-center gap-3 pb-14 pt-8 desktop:pb-24'>
        <div className='flex items-center justify-center gap-6'>
          <Envelope size={32} weight='thin' />
          <Typography
            as='a'
            size='body-lg'
            color='europe-dark'
            href={`mailto:${Contact.mail}`}
          >
            {Contact.mail}
          </Typography>
        </div>
        <div className='flex items-center justify-center gap-6'>
          <Phone size={32} weight='thin' />
          <Typography
            as='a'
            size='body-lg'
            color='europe-dark'
            href={`tel:${Contact.phone}`}
          >
            {Contact.phone}
          </Typography>
        </div>
      </div>
    </div>
  );
}
