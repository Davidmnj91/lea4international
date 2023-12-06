import { defaultLanguage, languages } from '@/i18n';

import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: languages,

  // Used when no locale matches
  defaultLocale: defaultLanguage,
});

export const config = {
  // matcher: '/:lng*'
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)'],
};
