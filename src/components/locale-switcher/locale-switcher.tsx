'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Menu, Transition } from '@headlessui/react';
import React, { Fragment, startTransition } from 'react';
import { CaretDown, CheckCircle } from '@phosphor-icons/react';
import { EnglandFlag, SpainFlag } from '@/components/icons/flags-icons';
import { usePathname, useRouter } from '@/navigation';
import { Language } from '@/i18n';

export default function LocaleSwitcher() {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations('locale-switcher');

  const languageOptions = [
    { language: 'en' as Language, icon: <EnglandFlag size={16} /> },
    { language: 'es' as Language, icon: <SpainFlag size={16} /> },
  ];

  const changeLanguage = (language: Language) => {
    startTransition(() => {
      router.replace(pathname, { locale: language });
    });
  };

  return (
    <div className='flex'>
      <Menu as='div' className='relative inline-flex'>
        <Menu.Button className='flex items-center justify-center'>
          {locale === 'en' ? (
            <EnglandFlag size={34} />
          ) : (
            <SpainFlag size={34} />
          )}
          <CaretDown className='ml-2 text-basics-white' size={24} />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform  opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute right-0 mt-12 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none'>
            <div className='p-2'>
              {languageOptions.map(({ language, icon }) => (
                <Menu.Item key={language}>
                  <button
                    className='group flex w-full items-center gap-2 rounded-md bg-basics-white px-2 py-2 text-b-sm text-europe-dark hover:bg-basics-gray'
                    onClick={() => changeLanguage(language)}
                  >
                    {icon}
                    <span className='text-b-sm'>{t(language)}</span>
                    {locale === language && (
                      <CheckCircle
                        size={16}
                        className='text-europe-dark'
                        aria-hidden='true'
                      />
                    )}
                  </button>
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
