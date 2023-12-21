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

const MobileFooter = () => {
  const t = useTranslations('footer');

  return (
    <footer className='flex flex-col items-center justify-center gap-11 bg-europe px-4 py-10'>
      <Typography as='h1' size='body-2xl' color='basics-white'>
        LOGO
      </Typography>
      <div className='flex flex-col items-center justify-center gap-4'>
        <LocaleSwitcher />
        <Menu />
      </div>
      <div className='flex w-full flex-col items-center justify-center gap-2'>
        <div className='flex items-center gap-6 text-basics-white'>
          <Envelope size={32} />
          <Typography as='span' size='body-md' color='basics-white'>
            [mail]@[mail]
          </Typography>
        </div>
        <div className='flex items-center gap-6 text-basics-white'>
          <Phone size={32} />
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
        <InstagramIcon size={24} />
        <FacebookIcon size={24} />
        <YoutubeIcon size={24} />
      </div>
      <div className='flex w-full items-center justify-between gap-6'>
        <span className='h-1 w-[250px] flex-1 border-b border-b-gold-dark' />
        <Typography as='h1' size='body-2xl' color='basics-white'>
          LOGO
        </Typography>
        <span className='h-1 w-[250px] flex-1 border-b border-b-gold-dark' />
      </div>
      <div className='flex flex-col items-center justify-center gap-6'>
        <Typography as='span' size='body-sm' color='basics-white'>
          Copyright © 2024. Company name. All right reserved.
        </Typography>
        <Typography as='span' size='body-sm' color='basics-white'>
          Privacy Policy
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
          <Typography as='h1' size='body-2xl' color='basics-white'>
            LOGO
          </Typography>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center  gap-6 text-basics-white'>
              <Envelope size={32} />
              <Typography as='span' size='body-md' color='basics-white'>
                [mail]@[mail]
              </Typography>
            </div>
            <div className='flex items-center  gap-6 text-basics-white'>
              <Phone size={32} />
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
        <Typography as='h1' size='body-2xl' color='basics-white'>
          LOGO
        </Typography>
        <span className='h-1 w-[250px] flex-1 border-b border-b-gold-dark' />
      </div>
      <div className='flex w-full justify-between'>
        <Typography as='span' size='body-sm' color='basics-white'>
          Copyright © 2024. Company name. All right reserved.
        </Typography>
        <Typography as='span' size='body-sm' color='basics-white'>
          Privacy Policy
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
