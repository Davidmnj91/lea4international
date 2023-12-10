import clsx from 'clsx';
import { buttonTypes } from '@/components/button/button';
import { useTranslations } from 'next-intl';
import { ChatCenteredText } from '@phosphor-icons/react/dist/ssr/ChatCenteredText';

export const ContactUs = () => {
  const t = useTranslations('contact-us');

  return (
    <>
      {/*Mobile version*/}
      <button
        className={clsx(
          'fixed bottom-10 right-10 z-20 desktop:hidden',
          buttonTypes({ intent: 'primary', type: 'icon' })
        )}
      >
        <ChatCenteredText size={32} />
      </button>
      {/*Desktop version*/}
      <button
        className={clsx(
          'fixed bottom-10 right-10 z-50 hidden desktop:block',
          buttonTypes({ intent: 'primary' })
        )}
      >
        {t('text')}
      </button>
    </>
  );
};
