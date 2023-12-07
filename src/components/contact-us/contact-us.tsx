import clsx from 'clsx';
import { buttonTypes } from '@/components/button/button';
import { useTranslations } from 'next-intl';

export const ContactUs = () => {
  const t = useTranslations('contact-us');

  return (
    <button
      className={clsx(
        'fixed bottom-10 right-10',
        buttonTypes({ intent: 'primary' })
      )}
    >
      {t('text')}
    </button>
  );
};
