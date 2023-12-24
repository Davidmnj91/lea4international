'use client';

import LocaleSwitcher from '@/components/locale-switcher/locale-switcher';
import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ArrowDown, CaretRight, List, X } from '@phosphor-icons/react';
import { Menu } from '@/components/menu/menu';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import {
  Typography,
  typographyClasses,
} from '@/components/typography/typography';
import clsx from 'clsx';

export const MobileMenu = ({
  onStateChange,
}: {
  onStateChange?: (open: boolean) => void;
}) => {
  const t = useTranslations('pages');

  const fullClassName = typographyClasses({
    size: 'body-lg',
    color: 'basics-white',
    weight: 'light',
  });

  const triggerCallBack = (open: boolean) => {
    if (onStateChange) {
      onStateChange(open);
    }
  };

  return (
    <Popover>
      {({ open, close }) => {
        triggerCallBack(open);
        return (
          <>
            <Popover.Button className='group text-basics-white hover:text-basics-gray focus:outline-none'>
              {open ? <X size={32} /> : <List size={32} />}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-300'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-300'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute left-0 top-[80px] z-50 flex h-[calc(100vh-80px)] w-full transform flex-col'>
                <nav className='flex h-full flex-col gap-3.5 bg-europe p-6'>
                  <LocaleSwitcher />
                  <Link
                    className={fullClassName}
                    href={`/`}
                    onClick={() => close()}
                  >
                    {t('home')}
                  </Link>
                  <Link
                    className={`flex items-center gap-2 ${fullClassName}`}
                    href={`/services`}
                    onClick={() => close()}
                  >
                    {t('services.main')}
                    <ArrowDown size={16} />
                  </Link>
                  <div className='ml-6 flex flex-col gap-3.5'>
                    <Link
                      className={fullClassName}
                      href={`/services/erasmus`}
                      onClick={() => close()}
                    >
                      {t('services.erasmus')}
                    </Link>
                    <Link
                      className={fullClassName}
                      href={`/services/language-courses`}
                      onClick={() => close()}
                    >
                      {t('services.language-courses')}
                    </Link>
                    <Link
                      className={fullClassName}
                      href={`/services/student-exchange`}
                      onClick={() => close()}
                    >
                      {t('services.student-exchange')}
                    </Link>
                    <Link
                      className={fullClassName}
                      href={`/services/concierge`}
                      onClick={() => close()}
                    >
                      {t('services.concierge')}
                    </Link>
                  </div>
                  <Link
                    className={fullClassName}
                    href={`/about-us`}
                    onClick={() => close()}
                  >
                    {t('about-us')}
                  </Link>
                  <Link
                    className={fullClassName}
                    href={`/destinations`}
                    onClick={() => close()}
                  >
                    {t('destinations')}
                  </Link>
                  <Link
                    className={fullClassName}
                    href={`/accommodations`}
                    onClick={() => close()}
                  >
                    {t('accommodations')}
                  </Link>
                  <Link
                    className={fullClassName}
                    href={`/faq`}
                    onClick={() => close()}
                  >
                    {t('faq')}
                  </Link>
                </nav>
                <Link
                  href={'/contact/company'}
                  className={clsx(
                    typographyClasses({
                      size: 'body-sm',
                      color: 'europe-dark',
                    }),
                    'flex items-center gap-3 bg-star px-9 py-5'
                  )}
                  onClick={() => close()}
                >
                  <span>Contact us</span>
                  <CaretRight size={16} />
                </Link>
              </Popover.Panel>
            </Transition>
          </>
        );
      }}
    </Popover>
  );
};
export const Header = () => {
  return (
    <header className='sticky top-0 z-50 flex h-[80px] items-center justify-between bg-europe px-6 py-2.5 desktop:p-10'>
      <Typography as='h1' size='body-2xl' color='basics-white'>
        LOGO
      </Typography>
      <div className='desktop:hidden'>
        <MobileMenu />
      </div>
      <nav className='hidden items-center gap-[70px] desktop:flex'>
        <Menu />
        <LocaleSwitcher />
      </nav>
    </header>
  );
};
