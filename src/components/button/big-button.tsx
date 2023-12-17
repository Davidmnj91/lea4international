import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  JSXElementConstructor,
  ReactElement,
} from 'react';
import { RichTranslation } from '@/types/types';
import { ReactNodeArray } from 'prop-types';
import { Typography } from '@/components/typography/typography';

type BigButtonProps = {
  title:
    | RichTranslation
    | string
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactNodeArray;
  caption: RichTranslation;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
export const BigButton = ({
  title,
  caption,
  ...buttonProps
}: BigButtonProps) => {
  return (
    <button
      className='group flex h-[158px] flex-col justify-between border border-basics-white p-2.5 hover:border-star-dark desktop:w-[310px]'
      {...buttonProps}
    >
      <Typography
        as='h4'
        size='heading-lg'
        color='basics-white'
        weight='bold'
        className='text-left'
      >
        {title}
      </Typography>
      <Typography
        as='span'
        size='heading-sm'
        color='basics-white'
        className='self-end group-hover:text-star-dark'
      >
        {caption}
      </Typography>
    </button>
  );
};
