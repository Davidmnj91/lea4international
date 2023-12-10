import { JSX } from 'react';
import { RichTranslation } from '@/types/types';

type ServiceItemProps = {
  icon: JSX.Element;
  title: RichTranslation;
  description: RichTranslation;
};
export const ServiceItem = ({ title, description, icon }: ServiceItemProps) => {
  return (
    <li className='flex items-center border border-gold'>
      <div className='flex h-full items-center border-r border-r-gold p-4'>
        {icon}
      </div>
      <div className='p-4'>
        <h3 className='font-title text-desktop-h-md text-europe-dark'>
          {title}
        </h3>
        <ul className='mt-2.5 font-body text-b-lg text-europe-dark'>
          {description}
        </ul>
      </div>
    </li>
  );
};
