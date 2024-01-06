import { useTranslations } from 'next-intl';
import Link from 'next/link';
import clsx from 'clsx';
import { typographyClasses } from '@/components/typography/typography';
import { Route } from 'next';

type MenuProps = {
  itemClassNames?: string;
};

export const Menu = ({ itemClassNames }: MenuProps) => {
  const t = useTranslations('pages');

  const fullClassName = clsx(
    typographyClasses({ size: 'body-lg', color: 'basics-white' }),
    itemClassNames
  );

  return (
    <>
      <Link className={fullClassName} href={`/` as Route}>
        {t('home')}
      </Link>
      <Link className={fullClassName} href={`/services`}>
        {t('services.main')}
      </Link>
      <Link className={fullClassName} href={`/about-us`}>
        {t('about-us')}
      </Link>
      <Link className={fullClassName} href={`/destinations`}>
        {t('destinations')}
      </Link>
      <Link className={fullClassName} href={`/accommodations`}>
        {t('accommodations')}
      </Link>
      <Link className={fullClassName} href={`/faq`}>
        {t('faq')}
      </Link>
    </>
  );
};
