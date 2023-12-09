import { Language, languages } from '@/i18n';
import { notFound } from 'next/navigation';
import { Menu } from '@/components/menu/menu';
import { unstable_setRequestLocale } from 'next-intl/server';
import { cormorant, ubuntu } from '@/app/fonts';
import LocaleSwitcher from '@/components/locale-switcher/locale-switcher';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { ContactUs } from '@/components/contact-us/contact-us';
import { Footer } from '@/components/footer/footer';

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
    <html
      style={{ scrollBehavior: 'smooth' }}
      lang={locale}
      className={`${cormorant.variable} ${ubuntu.variable}`}
    >
      <head>
        <title>Lucia Web</title>
      </head>
      <body className='relative mx-auto max-w-[1440px] bg-basics-white'>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <header className='flex h-[80px] items-center justify-between bg-europe px-[40px]'>
            <h1 className='font-body text-b-xxl text-basics-white'>LOGO</h1>
            <nav className='flex items-center gap-[70px]'>
              <Menu />
            </nav>
            <LocaleSwitcher />
          </header>
          <main>{children}</main>
          <ContactUs />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
