import { getRequestConfig } from 'next-intl/server';

export type Language = 'en' | 'es';

export type LanguagePageProps<T = {}> = {
  params: {
    locale: Language;
  } & T;
};

export const defaultLanguage: Language = 'en';
export const languages: Language[] = ['en', 'es'];
export default getRequestConfig(async ({ locale }: { locale: string }) => ({
  messages: (await import(`./i18n/${locale}.json`)).default,
  defaultTranslationValues: {
    br: (chunks) => (
      <>
        <br />
        {chunks}
      </>
    ),
    li: (chunks) => (
      <li>
        <span className='mr-2'>&#8226;</span>
        <span>{chunks}</span>
      </li>
    ),
  },
}));
