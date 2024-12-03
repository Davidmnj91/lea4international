import { getRequestConfig } from 'next-intl/server';
import { ReactNode } from 'react';
import { RichTranslationValues } from 'use-intl';
import Link from 'next/link';

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
    <li className='flex gap-2'>
      <span>&#8226;</span>
      <span>{chunks}</span>
    </li>
  ),
  b: (chunks: ReactNode) => <strong>{chunks}</strong>,
  link: (chunks: ReactNode) => (
    <a className='underline' href={`${chunks}`} target='_blank'>
      {chunks}
    </a>
  ),
  email: (chunks: ReactNode) => (
    <a aria-label='mail' className='underline' href={`mailto:${chunks}`}>
      {chunks}
    </a>
  ),
  policy: (chunks: ReactNode) => (
    <Link
      aria-label='privacy policy'
      className='font-bold underline'
      href={'/privacy-policy'}
      target={'_blank'}
    >
      {chunks}
    </Link>
  ),
  contact: (chunks: ReactNode) => (
    <Link
      aria-label='contact'
      className='font-bold underline'
      href={'/contact/individual'}
      target={'_blank'}
    >
      {chunks}
    </Link>
  ),
};

export const defaultLanguage: Language = 'en';
export const languages: Language[] = ['en', 'es'];
export default getRequestConfig(async ({ locale }: { locale: string }) => ({
  messages: (await import(`./i18n/${locale}.json`)).default,
  defaultTranslationValues: defaultTranslationVales,
}));
