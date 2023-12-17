import { BigButton } from '@/components/button/big-button';
import { useTranslations } from 'next-intl';

export const BecomePartner = () => {
  const t = useTranslations('become-partner');

  return (
    <div className='flex justify-center bg-europe py-14 desktop:bg-transparent'>
      <div className='flex flex-col gap-9 bg-europe p-6 desktop:p-14'>
        <h2 className='text-center font-title text-desktop-h-2xl text-basics-white desktop:text-left'>
          {t('title')}
        </h2>
        <p className='font-body text-b-lg text-basics-white'>
          {t.rich('description')}
        </p>
        <BigButton
          title={t.rich('button.title')}
          caption={t('button.caption')}
        />
      </div>
    </div>
  );
};
