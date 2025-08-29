import { Language, languages } from '@/i18n/config';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/header/header';
import React from 'react';

type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;
  // Validate that the incoming `locale` parameter is valid
  if (!languages.includes(locale as Language)) notFound();

  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
