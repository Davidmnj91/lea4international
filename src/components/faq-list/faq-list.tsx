'use client';

import { useTranslations } from 'next-intl';
import { Disclosure } from '@headlessui/react';
import { Minus, Plus } from '@phosphor-icons/react';
import { Typography } from '@/components/typography/typography';

type FaqProps = {
  faqKey: string;
};
export const FaqList = ({ faqKey }: FaqProps) => {
  const t = useTranslations('faqs');

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className='flex w-full justify-between gap-8'>
            <Typography
              as='span'
              size='heading-lg'
              color='europe-dark'
              className='flex-grow-0 text-left'
              itemProp='name'
            >
              {t(`${faqKey}.title`)}
            </Typography>
            <div>{open ? <Minus size={32} /> : <Plus size={32} />}</div>
          </Disclosure.Button>
          <Disclosure.Panel
            className='mt-4'
            itemScope
            itemProp='acceptedAnswer'
            itemType='https://schema.org/Answer'
          >
            <Typography
              as='p'
              size='body-lg'
              color='europe'
              weight='light'
              itemProp='text'
            >
              {t.rich(`${faqKey}.description`)}
            </Typography>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
