import { JSX } from 'react';
import { RichTranslation } from '@/types/types';
import {
  Typography,
  typographyClasses,
} from '@/components/typography/typography';
import { cx } from 'class-variance-authority';

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
        <Typography as='h3' size='heading-md' color='europe-dark'>
          {title}
        </Typography>
        <ul
          className={cx(
            'mt-2.5',
            typographyClasses({ size: 'body-lg', color: 'europe-dark' })
          )}
        >
          {description}
        </ul>
      </div>
    </li>
  );
};
