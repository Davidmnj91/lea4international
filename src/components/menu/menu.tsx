import { useTranslations } from 'next-intl';
import Link from 'next/link';
import clsx from 'clsx';

type MenuProps = {
  itemClassNames?: string;
};

export const Menu = ({ itemClassNames }: MenuProps) => {
  const t = useTranslations('pages');

  const fullClassName = clsx(
    'font-body text-b-lg text-basics-white',
    itemClassNames
  );

  return (
    <>
      <Link className={fullClassName} href={`/`}>
        {t('home')}
      </Link>
      <Link className={fullClassName} href={`/services`}>
        {t('services')}
      </Link>
      <Link className={fullClassName} href={`/destinations`}>
        {t('destinations')}
      </Link>
      <Link className={fullClassName} href={`/faq`}>
        {t('faq')}
      </Link>
      <Link className={fullClassName} href={`/contact`}>
        {t('contact')}
      </Link>
    </>
  );
};
