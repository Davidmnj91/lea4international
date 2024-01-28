import { useTranslations } from 'next-intl';
import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { CheckCircle, WarningCircle, X } from '@phosphor-icons/react';
import { Typography } from '@/components/typography/typography';
import { buttonTypes } from '@/components/button/button';

type FormResultProps = {
  state: 'success' | 'error';
  open: boolean;
  onClose: () => void;
};
export const FormResultPopup = ({ state, open, onClose }: FormResultProps) => {
  const t = useTranslations('forms.feedback');

  if (!open) return null;

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={onClose}>
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
                <button onClick={onClose} className='self-end text-europe'>
                  <X size={32} />
                </button>
                <div className='flex flex-col items-center justify-center gap-4 pb-16 pt-4 text-center'>
                  {state === 'success' ? (
                    <CheckCircle size={38} className='text-status-success' />
                  ) : (
                    <WarningCircle size={38} className='text-status-error' />
                  )}
                  <Typography as='h3' size='heading-lg' color='europe-dark'>
                    {t(`${state}.title`)}
                  </Typography>
                  <Typography size='body-md' color='europe'>
                    {t(`${state}.description`)}
                  </Typography>
                  <span className='h-1 w-full flex-grow border-b border-b-europe-light' />
                  <Typography size='body-md' color='europe'>
                    {t.rich(`${state}.sub-description`)}
                  </Typography>
                  <button
                    className={buttonTypes({ intent: 'secondary-light' })}
                    onClick={onClose}
                  >
                    {t('close')}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
