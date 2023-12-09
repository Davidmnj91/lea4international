import { Language, languages } from '@/i18n';
import { notFound } from 'next/navigation';
import { Menu } from '@/components/menu/menu';
import { unstable_setRequestLocale } from 'next-intl/server';
import LocaleSwitcher from '@/components/locale-switcher/locale-switcher';
import { useMessages } from 'next-intl';

export async function generateStaticParams() {
  return languages.map((locale) => ({ locale }));
}

type RootLayoutProps = {
  children: React.ReactNode;
  params: { locale: Language };
};
export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  // Validate that the incoming `locale` parameter is valid
  if (!languages.includes(locale as any)) notFound();

  unstable_setRequestLocale(locale);
  const messages = useMessages();

  return (
    <>
      <header className='sticky top-0 z-50 flex h-[80px] items-center justify-between bg-europe px-[40px]'>
        <h1 className='font-body text-b-xxl text-basics-white'>LOGO</h1>
        <nav className='flex items-center gap-[70px]'>
          <Menu />
        </nav>
        <LocaleSwitcher />
      </header>
      <main>{children}</main>
    </>
  );
}
