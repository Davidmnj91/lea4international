import { useTranslations } from 'next-intl';

export default function RootLayout() {
  const t = useTranslations('pages');
  return <h1>{t('home')}</h1>;
}
