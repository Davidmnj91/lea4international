import { useTranslations } from 'next-intl';
import Link from 'next/link';

export const Menu = () => {
  const t = useTranslations('pages');

  return (
    <nav style={{ display: 'flex', gap: '1em' }}>
      <Link href={`/`}>{t('home')}</Link>
      <Link href={`/services`}>{t('services')}</Link>
      <Link href={`/destinations`}>{t('destinations')}</Link>
      <Link href={`/about`}>{t('about')}</Link>
      <Link href={`/contact`}>{t('contact')}</Link>
    </nav>
  );
};
