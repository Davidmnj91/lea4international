import React from 'react';
import { RichTranslation } from '@/types/types';

type BigButtonProps = {
  title: RichTranslation;
  caption: RichTranslation;
};
export const BigButton = ({ title, caption }: BigButtonProps) => {
  return (
    <button className='group flex h-[158px] flex-col justify-between border border-basics-white p-2.5 hover:border-star-dark desktop:w-[310px]'>
      <h4 className='text-left font-title text-desktop-h-lg font-bold text-basics-white'>
        {title}
      </h4>
      <span className='self-end font-title text-desktop-h-sm text-basics-white group-hover:text-star-dark'>
        {caption}
      </span>
    </button>
  );
};
