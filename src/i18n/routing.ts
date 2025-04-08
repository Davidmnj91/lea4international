import { defineRouting } from 'next-intl/routing';
import { defaultLanguage, languages } from '@/i18n/config';

export const routing = defineRouting({
  locales: languages,
  defaultLocale: defaultLanguage,
});
