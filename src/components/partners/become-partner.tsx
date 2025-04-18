import { BigButton } from '@/components/button/big-button';
import { useTranslations } from 'next-intl';
import { Typography } from '@/components/typography/typography';
import { defaultTranslationVales } from '@/i18n/translation-values';

export const BecomePartner = () => {
  const t = useTranslations('become-partner');

  return (
    <div className='flex justify-center bg-europe py-14 desktop:bg-transparent'>
      <div className='flex flex-col gap-9 bg-europe p-6 desktop:p-14'>
        <Typography
          as='h2'
          size='heading-2xl'
          color='basics-white'
          className='text-center desktop:text-left'
        >
          {t('title')}
        </Typography>
        <Typography as='p' size='body-lg' color='basics-white'>
          {t.rich('description', defaultTranslationVales)}
        </Typography>
        <BigButton
          subject={t('button.title')}
          caption={t('button.caption')}
          href={'/contact/partner'}
        />
      </div>
    </div>
  );
};
