'use client';

import { ReactNode } from 'react';
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';
import { defaultTranslationVales } from '@/i18n';

type Props = {
  messages: AbstractIntlMessages;
  locale: string;
  children: ReactNode;
  now: Date;
  timeZone: string;
};

export default function IntlClientProvider({
  messages,
  locale,
  children,
  now,
  timeZone,
}: Props) {
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      defaultTranslationValues={defaultTranslationVales}
      now={now}
      timeZone={timeZone}
    >
      {children}
    </NextIntlClientProvider>
  );
}
