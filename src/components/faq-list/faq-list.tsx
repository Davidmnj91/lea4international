'use client';

import { useTranslations } from 'next-intl';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@phosphor-icons/react';
import { Typography } from '@/components/typography/typography';
import { defaultTranslationVales } from '@/i18n/translation-values';

type FaqProps = {
  faqKey: string;
};
export const FaqList = ({ faqKey }: FaqProps) => {
  const t = useTranslations('faqs');

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <DisclosureButton className='flex w-full justify-between gap-8'>
            <Typography
              as='span'
              size='heading-lg'
              color='europe-dark'
              className='grow-0 text-left'
            >
              {t(`${faqKey}.title`)}
            </Typography>
            <div>{open ? <MinusIcon size={32} /> : <PlusIcon size={32} />}</div>
          </DisclosureButton>
          <DisclosurePanel className='mt-4'>
            <Typography as='p' size='body-lg' color='europe' weight='light'>
              {t.rich(`${faqKey}.description`, defaultTranslationVales)}
            </Typography>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};
