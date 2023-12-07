import { useTranslations } from 'next-intl';
import Link from 'next/link';

export const Menu = () => {
  const t = useTranslations('pages');

  return (
    <nav className='flex items-center gap-[70px]'>
      <Link className='font-body text-b-lg text-basics-white' href={`/`}>
        {t('home')}
      </Link>
      <Link
        className='font-body text-b-lg text-basics-white'
        href={`/services`}
      >
        {t('services')}
      </Link>
      <Link
        className='font-body text-b-lg text-basics-white'
        href={`/destinations`}
      >
        {t('destinations')}
      </Link>
      <Link className='font-body text-b-lg text-basics-white' href={`/about`}>
        {t('about')}
      </Link>
      <Link className='font-body text-b-lg text-basics-white' href={`/contact`}>
        {t('contact')}
      </Link>
    </nav>
  );
};
