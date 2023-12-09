import { useTranslations } from 'next-intl';

export const Partners = () => {
  const t = useTranslations('our-partners');

  return (
    <div className='my-14 flex flex-col items-center justify-center gap-14'>
      <h2 className='font-title text-desktop-h-2xl text-europe-dark'>
        {t('title')}
      </h2>
      <div className='flex justify-center gap-14'>
        {Array.from(Array(5).keys()).map((index) => (
          <span key={index} className='font-body text-b-xl text-europe'>
            {t('partners.name')}
          </span>
        ))}
      </div>
    </div>
  );
};
