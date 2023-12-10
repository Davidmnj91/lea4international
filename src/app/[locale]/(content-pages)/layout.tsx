import { Language, languages } from '@/i18n';
import { notFound } from 'next/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useMessages } from 'next-intl';
import { Header } from '@/components/header/header';

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
  const messages = useMessages();

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
