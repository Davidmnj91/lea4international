'use client';

import { useTranslations } from 'next-intl';
import LocaleSwitcher from '@/components/locale-switcher/locale-switcher';
import { Envelope, Phone } from '@phosphor-icons/react';
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from '@/components/icons/social-icons';
import { Menu } from '@/components/menu/menu';
import { Contact } from '@/types/contact';
import { Typography } from '@/components/typography/typography';
import { FullLogo, Logo } from '@/components/logo/fullLogo';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import erasmus_quality_standards from '../../../public/images/erasmus_quality_standards.webp';

const MobileFooter = () => {
  const t = useTranslations('footer');

  return (
    <footer className='flex flex-col items-center justify-center gap-11 bg-europe px-4 py-10'>
      <FullLogo width={129} height={50} />
      <div className='flex flex-col items-center justify-center gap-4'>
        <LocaleSwitcher />
        <Menu />
      </div>
      <Image
        src={erasmus_quality_standards.src}
        alt='eramus_quality_standards'
        width={72}
        height={72}
      />
      <div className='flex w-full flex-col items-center justify-center gap-2'>
        <div className='flex items-center gap-6 text-basics-white'>
          <Envelope size={32} weight='thin' />
          <Typography
            as='a'
            size='body-md'
            color='basics-white'
            href={`mailto:${Contact.mail}`}
          >
            {Contact.mail}
          </Typography>
        </div>
        <div className='flex items-center gap-6 text-basics-white'>
          <Phone size={32} weight='thin' />
          <Typography
            as='a'
            size='body-md'
            color='basics-white'
            href={`tel:${Contact.phone}`}
          >
            {Contact.phone}
          </Typography>
        </div>
      </div>
      <div className='flex gap-4 text-basics-white'>
        <Typography as='span' size='body-md' color='basics-white'>
          {t('follow-us')}
        </Typography>
        <Link href={Contact.instagram} target='_blank'>
          <InstagramIcon size={24} />
        </Link>
        <Link href={Contact.facebook} target='_blank'>
          <FacebookIcon size={24} />
        </Link>
        <Link href={Contact.youtube} target='_blank'>
          <YoutubeIcon size={24} />
        </Link>
      </div>
      <div className='flex w-full items-center justify-between gap-6'>
        <span className='h-1 w-[250px] flex-1 border-b border-b-gold-dark' />
        <Logo width={60} height={46} />
        <span className='h-1 w-[250px] flex-1 border-b border-b-gold-dark' />
      </div>
      <div className='flex flex-col items-center justify-center gap-6'>
        <Typography as='span' size='body-sm' color='basics-white'>
          {t('copyright')}
        </Typography>
        <Typography as='span' size='body-sm' color='basics-white'>
          {t('privacy-policy')}
        </Typography>
      </div>
    </footer>
  );
};

const DesktopFooter = () => {
  const t = useTranslations('footer');

  return (
    <footer className='flex flex-col gap-11 bg-europe p-10'>
      <div className='flex w-full justify-between gap-11'>
        <div className='flex flex-col justify-between gap-12'>
          <FullLogo width={129} height={50} />
          <div className='flex flex-col gap-2'>
            <div className='flex items-center  gap-6 text-basics-white'>
              <Envelope size={32} weight='thin' />
              <Typography
                as='a'
                size='body-md'
                color='basics-white'
                href={`mailto:${Contact.mail}`}
              >
                {Contact.mail}
              </Typography>
            </div>
            <div className='flex items-center  gap-6 text-basics-white'>
              <Phone size={32} weight='thin' />
              <Typography
                as='a'
                size='body-md'
                color='basics-white'
                href={`tel:${Contact.phone}`}
              >
                {Contact.phone}
              </Typography>
            </div>
          </div>
          <div className='flex gap-4 text-basics-white'>
            <Typography as='span' size='body-md' color='basics-white'>
              {t('follow-us')}
            </Typography>
            <Link href={Contact.instagram} target='_blank'>
              <InstagramIcon size={24} />
            </Link>
            <Link href={Contact.facebook} target='_blank'>
              <FacebookIcon size={24} />
            </Link>
            <Link href={Contact.youtube} target='_blank'>
              <YoutubeIcon size={24} />
            </Link>
          </div>
        </div>
        <div className='flex flex-col items-end justify-between gap-4'>
          <LocaleSwitcher />
          <nav className=' flex flex-col justify-between gap-4'>
            <Menu itemClassNames='text-right' />
          </nav>
          <Image
            src={erasmus_quality_standards.src}
            alt='eramus_quality_standards'
            width={72}
            height={72}
          />
        </div>
      </div>
      <div className='flex w-full items-center justify-between gap-6'>
        <span className='h-1 w-[250px] flex-1 border-b border-b-gold-dark' />
        <Logo width={60} height={46} />
        <span className='h-1 w-[250px] flex-1 border-b border-b-gold-dark' />
      </div>
      <div className='flex w-full justify-between'>
        <Typography as='span' size='body-sm' color='basics-white'>
          {t('copyright')}
        </Typography>
        <Typography as='span' size='body-sm' color='basics-white'>
          {t('privacy-policy')}
        </Typography>
      </div>
    </footer>
  );
};

export const Footer = () => (
  <>
    <div className='desktop:hidden'>
      <MobileFooter />
    </div>
    <div className='hidden desktop:block'>
      <DesktopFooter />
    </div>
  </>
);
