import { useTranslations } from 'next-intl';
import { Typography } from '@/components/typography/typography';

export const Partners = () => {
  const t = useTranslations('our-partners');

  return (
    <div className='flex flex-col items-center justify-center gap-14 px-2.5'>
      <Typography as='h2' size='heading-2xl' color='europe-dark'>
        {t('title')}
      </Typography>
      <div className='flex w-full flex-wrap justify-center gap-14'>
        {Array.from(Array(5).keys()).map((index) => (
          <Typography key={index} as='span' size='body-xl' color='europe'>
            {t('partners.name')}
          </Typography>
        ))}
      </div>
    </div>
  );
};
