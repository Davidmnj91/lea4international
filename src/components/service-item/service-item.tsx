import { JSX } from 'react';
import { RichTranslation } from '@/types/types';
import { Typography } from '@/components/typography/typography';
import clsx from 'clsx';

type ServiceItemProps = {
  icon: JSX.Element;
  title?: RichTranslation;
  description?: RichTranslation;
  mobileDirection?: 'VERTICAL' | 'HORIZONTAL';
};
export const ServiceItem = ({
  title,
  description,
  icon,
  mobileDirection = 'VERTICAL',
}: ServiceItemProps) => {
  return (
    <div
      className={clsx(
        'flex items-center border border-gold desktop:flex-row',
        mobileDirection === 'VERTICAL' ? 'flex-col' : 'flex-row'
      )}
    >
      <div className='flex h-full items-center p-4'>{icon}</div>
      <div
        className={clsx(
          'flex w-full flex-col gap-1 p-4 desktop:border-l desktop:border-t-0 desktop:border-l-gold',
          mobileDirection === 'VERTICAL'
            ? 'border-t border-t-gold'
            : 'border-l border-l-gold'
        )}
      >
        {title && (
          <Typography
            as='h3'
            size='heading-md'
            color='europe-dark'
            className='font-bold desktop:font-normal'
          >
            {title}
          </Typography>
        )}
        {description && (
          <Typography as='ul' size='body-lg' color='europe-dark'>
            {description}
          </Typography>
        )}
      </div>
    </div>
  );
};
