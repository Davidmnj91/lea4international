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

export const Footer = () => {
  const t = useTranslations('footer');

  return (
    <footer className='flex flex-col gap-11 bg-europe p-10'>
      <div className='flex w-full justify-between gap-11'>
        <div className='flex flex-col justify-between gap-12'>
          <h1 className='font-body text-b-xxl text-basics-white'>LOGO</h1>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center  gap-6 text-basics-white'>
              <Envelope size={32} />
              <span className='font-body text-b-md'>[mail]@[mail]</span>
            </div>
            <div className='flex items-center  gap-6 text-basics-white'>
              <Phone size={32} />
              <a href={`tel:${Contact.phone}`} className='font-body text-b-md'>
                {Contact.phone}
              </a>
            </div>
          </div>
          <div className='flex gap-4 text-basics-white'>
            <span className='font-body text-b-md'>{t('follow-us')}</span>
            <InstagramIcon size={24} />
            <FacebookIcon size={24} />
            <YoutubeIcon size={24} />
          </div>
        </div>
        <div className='flex flex-col items-end justify-between'>
          <LocaleSwitcher />
          <nav className='mt-4 flex flex-col justify-between gap-4'>
            <Menu itemClassNames='text-right' />
          </nav>
        </div>
      </div>
      <div className='flex w-full items-center justify-between gap-6'>
        <span className='h-1 w-[250px] flex-1 border-b border-b-gold-dark' />
        <h1 className='font-body text-b-xxl text-basics-white'>LOGO</h1>
        <span className='h-1 w-[250px] flex-1 border-b border-b-gold-dark' />
      </div>
      <div className='flex w-full justify-between'>
        <span className='font-body text-b-sm text-basics-white'>
          Copyright © 2024. Company name. All right reserved.
        </span>
        <span className='font-body text-b-sm text-basics-white'>
          Privacy Policy
        </span>
      </div>
    </footer>
  );
};
