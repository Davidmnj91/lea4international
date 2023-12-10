import { JSX } from 'react';
import { RichTranslation } from '@/types/types';

type ServiceItemProps = {
  icon: JSX.Element;
  title: RichTranslation;
  description: RichTranslation;
};
export const ServiceItem = ({ title, description, icon }: ServiceItemProps) => {
  return (
    <li className='flex flex-col items-center border border-gold desktop:flex-row'>
      <div className='flex h-full items-center p-4'>{icon}</div>
      <div className='border-t border-t-gold p-4 desktop:border-r desktop:border-t-0 desktop:border-r-gold'>
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
