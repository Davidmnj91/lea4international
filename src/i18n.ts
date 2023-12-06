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
}));
