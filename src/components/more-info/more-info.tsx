import React from 'react';
import { useTranslations } from 'next-intl';
import { BigButton } from '@/components/button/big-button';
import { Typography } from '@/components/typography/typography';
import clsx from 'clsx';

export enum InformationCategories {
  MORE_INFO = 'more-info',
  REQUEST_QUOTE = 'request-quote',
  HOST_FAMILIY = 'host-family',
}

const informationLinks = {
  [InformationCategories.MORE_INFO]: 'contact/general',
  [InformationCategories.REQUEST_QUOTE]: 'contact/institutions',
  [InformationCategories.HOST_FAMILIY]: 'contact/host-family',
};

type MoreInfoProps = {
  informationCategories?: InformationCategories[];
  className?: string;
};

export const MoreInfo = ({
  informationCategories = Object.values(
    InformationCategories
  ) as InformationCategories[],
  className,
}: MoreInfoProps) => {
  const t = useTranslations('more-info');

  return (
    <div
      className={clsx(
        'flex w-full flex-col gap-9 bg-europe px-6 py-14 desktop:m-auto desktop:w-[1100px] desktop:p-14',
        className
      )}
    >
      <Typography
        as='h3'
        color='basics-white'
        size='heading-2xl'
        className='text-center desktop:text-left'
        dangerouslySetInnerHTML={{
          __html: t.raw('title'),
        }}
      />
      <Typography
        as='p'
        size='body-lg'
        color='basics-white'
        weight='light'
        dangerouslySetInnerHTML={{
          __html: t.raw('questions'),
        }}
      />
      <div className='flex w-full flex-col justify-between gap-[30px] desktop:flex-row'>
        {Object.entries(informationCategories).map(([title, href]) => (
          <BigButton
            key={title}
            subject={t.raw(href) as string}
            caption={t('contact-us')}
            href={informationLinks[href]}
          />
        ))}
      </div>
    </div>
  );
};
