import { LanguagePageProps } from '@/i18n';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { ContactForm } from '@/components/contact-form/contact-form';
import { buttonTypes } from '@/components/button/button';
import Link from 'next/link';
import { FamilyForm } from '@/components/family-form/family-form';
import { InstitutionForm } from '@/components/institution-form/institution-form';

const roles = {
  company: <ContactForm />,
  'host-family': <FamilyForm />,
  institutions: <InstitutionForm />,
};
export default function Page({ params: { locale } }: LanguagePageProps) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('contact-page');

  return (
    <div>
      <div className='justify -center my-24 flex flex-col items-center gap-1.5'>
        <h1 className='font-title text-desktop-h-2xl text-europe-dark'>
          {t('title')}
        </h1>
        <p className='font-body text-b-lg text-europe-dark'>{t('message')}</p>
      </div>
      <div className='sticky top-0 flex items-center justify-center gap-6 border-y border-y-basics-disabled bg-basics-white px-12 py-6'>
        <span className='font-body text-b-lg text-europe-dark'>
          {t('who-are-you')}
        </span>
        {Object.keys(roles).map((role) => (
          <Link
            href={`#${role}`}
            scroll={true}
            key={role}
            className={buttonTypes({ intent: 'secondary-light' })}
          >
            {t(`roles.${role}`)}
          </Link>
        ))}
      </div>
      {Object.entries(roles).map(([role, form]) => (
        <section key={role} id={role} className='flex justify-center p-24'>
          {form}
        </section>
      ))}
    </div>
  );
}
