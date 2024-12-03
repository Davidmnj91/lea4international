'use client';

import { useTranslations } from 'next-intl';
import { Fragment, useEffect, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Typography } from '@/components/typography/typography';
import { buttonTypes } from '@/components/button/button';
import { GoogleAnalytics } from '@next/third-parties/google';

const COOKIE_CONSENT = 'COOKIE_CONSENT';

export const CookieBanner = () => {
  const t = useTranslations('cookie-banner');
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [allowCookies, setAllowCookies] = useState<boolean>(false);
  const acceptCookiesButtonRef = useRef(null);

  useEffect(() => {
    if (!window.localStorage.getItem(COOKIE_CONSENT)) {
      setShowBanner(true);
      return;
    }

    if (window.localStorage.getItem(COOKIE_CONSENT) === 'true') {
      setAllowCookies(true);
    }
  }, []);

  const onAllowClick = () => {
    window.localStorage.setItem(COOKIE_CONSENT, 'true');
    setAllowCookies(true);
    setShowBanner(false);
  };

  const onRejectClick = () => {
    window.localStorage.setItem(COOKIE_CONSENT, 'false');
    setAllowCookies(false);
    setShowBanner(false);
  };

  return (
    <>
      {allowCookies && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
      )}
      <Transition appear show={showBanner} as={Fragment}>
        <Dialog
          aria-label='cookie banner'
          as='div'
          className='relative z-50'
          onClose={() => {}}
          initialFocus={acceptCookiesButtonRef}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black/25' />
          </Transition.Child>

          <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
            <Transition.Child
              as={Fragment}
              enter='transform transition ease-in-out duration-300'
              enterFrom='translate-x-full'
              enterTo='translate-x-0'
              leave='transform transition ease-in-out duration-300'
              leaveFrom='translate-x-0'
              leaveTo='translate-x-full'
            >
              <Dialog.Panel className='absolute bottom-0 w-[375px] transform overflow-hidden shadow-xl transition-all desktop:w-full'>
                <div className='flex flex-col items-center gap-5 bg-europe-light px-6 py-10 desktop:flex-row desktop:justify-around desktop:gap-24 desktop:py-5'>
                  <Typography size='body-sm' color='basics-white'>
                    {t.rich('message')}
                  </Typography>
                  <div className='flex w-full gap-8 desktop:w-auto'>
                    <button
                      className={buttonTypes({ intent: 'primary' })}
                      ref={acceptCookiesButtonRef}
                      onClick={onAllowClick}
                    >
                      {t('accept')}
                    </button>
                    <button
                      className={buttonTypes({ intent: 'secondary-light' })}
                      onClick={onRejectClick}
                    >
                      {t('reject')}
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
