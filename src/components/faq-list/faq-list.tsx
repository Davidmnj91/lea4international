//prettier-ignore
'use client';

import { useTranslations } from 'next-intl';
import { Disclosure } from '@headlessui/react';
import { Minus, Plus } from '@phosphor-icons/react';

type FaqProps = {
  faqKey: string;
};
export const FaqList = ({ faqKey }: FaqProps) => {
  const t = useTranslations('faqs');

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className='flex w-full justify-between'>
            <span className='text-left font-title text-desktop-h-md font-bold text-europe-dark'>
              {t(`${faqKey}.title`)}
            </span>
            {open ? <Minus size={32} /> : <Plus size={32} />}
          </Disclosure.Button>
          <Disclosure.Panel className='mt-4 font-body text-b-lg font-light text-europe'>
            {t(`${faqKey}.description`)}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
