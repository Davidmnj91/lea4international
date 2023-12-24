import React from 'react';
import { RichTranslation } from '@/types/types';
import { Typography } from '@/components/typography/typography';
import Link, { LinkProps } from 'next/link';

type BigButtonProps = {
  subject: RichTranslation;
  caption: RichTranslation;
} & LinkProps;
export const BigButton = ({
  subject,
  caption,
  href,
  ...linkProps
}: BigButtonProps) => {
  return (
    <Link
      href={href}
      className='group flex h-[158px] flex-col justify-between border border-basics-white p-2.5 hover:border-star-dark desktop:w-[310px]'
      {...linkProps}
    >
      <Typography
        as='h4'
        size='heading-lg'
        color='basics-white'
        weight='bold'
        className='text-left'
        dangerouslySetInnerHTML={{ __html: subject }}
      />
      <Typography
        as='span'
        size='heading-sm'
        color='basics-white'
        className='self-end group-hover:text-star-dark'
      >
        {caption}
      </Typography>
    </Link>
  );
};
