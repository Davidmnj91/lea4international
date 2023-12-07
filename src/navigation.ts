import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { languages } from '@/i18n';

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales: languages,
    pathnames: {},
  });
