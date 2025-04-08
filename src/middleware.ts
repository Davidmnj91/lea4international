import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    '/((?!api|public|_next/static|_next/image|assets|favicon.ico|sw.js|sitemap|robots).*)',
  ],
};
