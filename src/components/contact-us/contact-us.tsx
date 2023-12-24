import clsx from 'clsx';
import { buttonTypes } from '@/components/button/button';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ChatCircleText } from '@phosphor-icons/react/dist/ssr/ChatCircleText';

export const ContactUs = () => {
  const t = useTranslations('contact-us');

  return (
    <>
      {/*Mobile version*/}
      <Link
        href={'/contact/company'}
        className={clsx(
          'fixed bottom-10 right-6 z-20 desktop:hidden',
          buttonTypes({ intent: 'primary', type: 'icon' })
        )}
      >
        <ChatCircleText size={24} />
      </Link>
      {/*Desktop version*/}
      <Link
        href={'/contact/company'}
        className={clsx(
          'fixed bottom-10 right-10 z-50 hidden desktop:flex',
          buttonTypes({ intent: 'primary' })
        )}
      >
        {t('text')}
      </Link>
    </>
  );
};
