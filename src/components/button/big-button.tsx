import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  JSXElementConstructor,
  ReactElement,
} from 'react';
import { RichTranslation } from '@/types/types';
import { ReactNodeArray } from 'prop-types';

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
      <h4 className='text-left font-title text-desktop-h-lg font-bold text-basics-white'>
        {title}
      </h4>
      <span className='self-end font-title text-desktop-h-sm text-basics-white group-hover:text-star-dark'>
        {caption}
      </span>
    </button>
  );
};
