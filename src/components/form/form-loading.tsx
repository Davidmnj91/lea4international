'use client';

import { useTranslations } from 'next-intl';
import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { SpinnerGap } from '@phosphor-icons/react';
import { Typography } from '@/components/typography/typography';
import { useFormStatus } from 'react-dom';

export const FormLoadingPopup = () => {
  const { pending } = useFormStatus();

  const t = useTranslations('forms.loading');

  return (
    <Transition appear show={pending} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={() => {}}>
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

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='flex w-[354px] transform flex-col gap-4 overflow-hidden rounded-2xl bg-white px-6 py-4 text-left align-middle shadow-xl transition-all'>
                <div className='flex flex-col items-center justify-center gap-4 py-8 text-center'>
                  <SpinnerGap size={48} className='animate-spin' />
                  <Typography as='h3' size='heading-lg' color='europe-dark'>
                    {t('title')}
                  </Typography>
                  <Typography size='body-md' color='europe'>
                    {t('description')}
                  </Typography>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
