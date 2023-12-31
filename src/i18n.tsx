import { getRequestConfig } from 'next-intl/server';
import { ReactNode } from 'react';
import { RichTranslationValues } from 'use-intl';

export type Language = 'en' | 'es';

export type LanguagePageProps<T = {}> = {
  params: {
    locale: Language;
  } & T;
};

export const defaultTranslationVales: RichTranslationValues = {
  br: (chunks: ReactNode) => (
    <>
      <br />
      {chunks}
    </>
  ),
  li: (chunks: ReactNode) => (
    <li className='flex'>
      <span className='mr-2'>&#8226;</span>
      <span>{chunks}</span>
    </li>
  ),
  b: (chunks: ReactNode) => <strong>{chunks}</strong>,
};

export const defaultLanguage: Language = 'en';
export const languages: Language[] = ['en', 'es'];
export default getRequestConfig(async ({ locale }: { locale: string }) => ({
  messages: (await import(`./i18n/${locale}.json`)).default,
  defaultTranslationValues: defaultTranslationVales,
}));
