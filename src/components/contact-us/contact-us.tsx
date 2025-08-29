import clsx from 'clsx';
import { buttonTypes } from '@/components/button/button';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ChatCircleTextIcon } from '@phosphor-icons/react/dist/ssr';

export const ContactUs = () => {
  const t = useTranslations('contact-us');

  return (
    <>
      {/*Mobile version*/}
      <Link
        href={'/contact/individual'}
        className={clsx(
          'desktop:hidden fixed right-6 bottom-10 z-20',
          buttonTypes({ intent: 'primary', type: 'icon' })
        )}
      >
        <ChatCircleTextIcon size={24} />
      </Link>
      {/*Desktop version*/}
      <Link
        href={'/contact/individual'}
        className={clsx(
          'desktop:flex fixed right-10 bottom-10 z-20 hidden',
          buttonTypes({ intent: 'primary' })
        )}
      >
        {t('text')}
      </Link>
    </>
  );
};
