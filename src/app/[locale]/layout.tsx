import { Language, languages } from '@/i18n';
import { notFound } from 'next/navigation';
import { Menu } from '@/components/menu/menu';
import { unstable_setRequestLocale } from 'next-intl/server';
import { cormorant, ubuntu } from '@/app/fonts';
import LocaleSwitcher from '@/components/locale-switcher/locale-switcher';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { ContactUs } from '@/components/contact-us/contact-us';

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
    <html lang={locale} className={`${cormorant.variable} ${ubuntu.variable}`}>
      <head>
        <title>Lucia Web</title>
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <header className='flex h-[80px] items-center justify-between bg-transparent px-[40px]'>
            <h1 className='font-body text-b-xxl text-basics-white'>LOGO</h1>
            <Menu />
            <LocaleSwitcher />
          </header>
          {children}
          <ContactUs />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
