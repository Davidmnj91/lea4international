import Link from 'next/link';
import { Language, languages } from '@/i18n/settings';
import { dir } from 'i18next';
import { useTranslation } from '@/i18n';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

type RootLayoutProps = {
  children: React.ReactNode;
  params: { lang: Language };
};
export default async function RootLayout({
  children,
  params: { lang },
}: RootLayoutProps) {
  // Validate that the incoming `locale` parameter is valid
  if (!languages.includes(lang as any)) notFound();

  const { t } = await useTranslation(lang);

  return (
    <html lang={lang} dir={dir(lang)}>
      <head>
        <title>Lucia Web</title>
      </head>
      <body>
        <nav style={{ display: 'flex', gap: '1em' }}>
          <Link href={`/${lang}`}>{t('pages.home')}</Link>
          <Link href={`/${lang}/services`}>{t('pages.services')}</Link>
          <Link href={`/${lang}/destinations`}>{t('pages.destinations')}</Link>
          <Link href={`/${lang}/about`}>{t('pages.about')}</Link>
          <Link href={`/${lang}/contact`}>{t('pages.contact')}</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
