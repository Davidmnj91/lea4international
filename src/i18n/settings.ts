export type Language = 'en' | 'es';

export type LanguagePageProps<T = {}> = {
  params: {
    lang: Language;
  } & T;
};

export const fallbackLanguage: Language = 'en';
export const languages: Language[] = ['en', 'es'];
export const languageCookie = 'locale';
export const defaultNS = 'translation';

export function getOptions(lng = fallbackLanguage, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLanguage,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
