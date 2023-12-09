import { Language, languages } from '@/i18n';
import { notFound } from 'next/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';
import { cormorant, ubuntu } from '@/app/fonts';
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
          {children}
          <ContactUs />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
