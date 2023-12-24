import { JSX } from 'react';
import { RichTranslation } from '@/types/types';
import { Typography } from '@/components/typography/typography';

type ServiceItemProps = {
  icon: JSX.Element;
  title: RichTranslation;
  description: RichTranslation;
};
export const ServiceItem = ({ title, description, icon }: ServiceItemProps) => {
  return (
    <li className='flex flex-col items-center border border-gold desktop:flex-row'>
      <div className='flex h-full items-center p-4'>{icon}</div>
      <div className='flex w-full flex-col gap-1 border-t border-t-gold p-4 desktop:border-l desktop:border-t-0 desktop:border-l-gold'>
        <Typography
          as='h3'
          size='heading-md'
          color='europe-dark'
          className='font-bold desktop:font-normal'
        >
          {title}
        </Typography>
        <Typography as='span' size='body-lg' color='europe-dark'>
          {description}
        </Typography>
      </div>
    </li>
  );
};
