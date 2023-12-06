import { Language, languages } from '@/i18n';
import { notFound } from 'next/navigation';
import { Menu } from '@/components/menu/menu';
import { unstable_setRequestLocale } from 'next-intl/server';

export async function generateStaticParams() {
  return languages.map((locale) => ({ locale }));
}

type RootLayoutProps = {
  children: React.ReactNode;
  params: { locale: Language };
};
export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  // Validate that the incoming `locale` parameter is valid
  if (!languages.includes(locale as any)) notFound();

  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <head>
        <title>Lucia Web</title>
      </head>
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
