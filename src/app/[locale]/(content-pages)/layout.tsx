import { Language, languages } from '@/i18n';
import { notFound } from 'next/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/header/header';
import React from 'react';

type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: Language }>;
};
export default async function RootLayout(props: RootLayoutProps) {
  const params = await props.params;

  const { locale } = params;

  const { children } = props;

  // Validate that the incoming `locale` parameter is valid
  if (!languages.includes(locale)) notFound();

  unstable_setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
