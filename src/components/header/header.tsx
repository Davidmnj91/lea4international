'use client';

import LocaleSwitcher from '@/components/locale-switcher/locale-switcher';
import React, { Fragment, useCallback } from 'react';
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from '@headlessui/react';
import { ArrowDown, CaretRight, List, X } from '@phosphor-icons/react';
import { Menu } from '@/components/menu/menu';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { typographyClasses } from '@/components/typography/typography';
import clsx from 'clsx';
import { FullLogo } from '@/components/logo/fullLogo';
import { usePathname } from 'next/navigation';

export const MobileMenu = ({
  onStateChange,
}: {
  onStateChange?: (open: boolean) => void;
}) => {
  const language = useLocale();
  const t = useTranslations('pages');

  const pathname = usePathname();

  const isActive = (path: string) => `/${language}/${path}` === pathname;

  const fullClassName = (path: string) =>
    typographyClasses({
      size: 'body-lg',
      color: isActive(path) ? 'gold' : 'basics-white',
      weight: 'light',
    });

  const triggerCallBack = useCallback(
    (open: boolean) => {
      if (onStateChange) {
        onStateChange(open);
      }
    },
    [onStateChange]
  );

  return (
    <Popover>
      {({ open, close }) => {
        triggerCallBack(open);
        return (
          <>
            <PopoverButton className='group text-basics-white hover:text-basics-gray focus:outline-none'>
              {open ? <X size={32} /> : <List size={32} />}
            </PopoverButton>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-300'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-300'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <PopoverPanel className='absolute left-0 top-[80px] z-50 flex h-[calc(100dvh-80px)] w-full transform flex-col'>
                <nav className='flex h-full flex-col gap-3.5 overflow-y-auto bg-europe p-6'>
                  <LocaleSwitcher />
                  <Link
                    className={`flex items-center gap-2 ${fullClassName(
                      'services'
                    )}`}
                    href={`/services`}
                    onClick={() => close()}
                  >
                    {t('services.main')}
                    <ArrowDown size={16} />
                  </Link>
                  <div className='ml-6 flex flex-col gap-3.5'>
                    <Link
                      className={fullClassName('services/erasmus')}
                      href={`/services/erasmus`}
                      onClick={() => close()}
                    >
                      {t('services.erasmus')}
                    </Link>
                    <Link
                      className={fullClassName('services/language-courses')}
                      href={`/services/language-courses`}
                      onClick={() => close()}
                    >
                      {t('services.language-courses')}
                    </Link>
                    <Link
                      className={fullClassName('services/student-exchange')}
                      href={`/services/student-exchange`}
                      onClick={() => close()}
                    >
                      {t('services.student-exchange')}
                    </Link>
                    <Link
                      className={fullClassName('services/concierge')}
                      href={`/services/concierge`}
                      onClick={() => close()}
                    >
                      {t('services.concierge')}
                    </Link>
                  </div>
                  <Link
                    className={fullClassName('about-us')}
                    href={`/about-us`}
                    onClick={() => close()}
                  >
                    {t('about-us')}
                  </Link>
                  <Link
                    className={fullClassName('destinations')}
                    href={`/destinations`}
                    onClick={() => close()}
                  >
                    {t('destinations')}
                  </Link>
                  <Link
                    className={fullClassName('accommodations')}
                    href={`/accommodations`}
                    onClick={() => close()}
                  >
                    {t('accommodations')}
                  </Link>
                  <Link
                    className={fullClassName('faq')}
                    href={`/faq`}
                    onClick={() => close()}
                  >
                    {t('faq')}
                  </Link>
                  <Link
                    className={fullClassName('blog')}
                    href={`/blog`}
                    onClick={() => close()}
                  >
                    {t('blog')}
                  </Link>
                </nav>
                <Link
                  href={'/contact/individual'}
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
              </PopoverPanel>
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
      <Link href='/'>
        <FullLogo width={129} height={50} />
      </Link>
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
