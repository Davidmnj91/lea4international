import { LanguagePageProps } from '@/i18n';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { ContactForm } from '@/components/contact-form/contact-form';

export default function Page({ params: { locale } }: LanguagePageProps) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('pages');

  return (
    <div>
      <h1>{t('contact')}</h1>
      <ContactForm />
    </div>
  );
}
