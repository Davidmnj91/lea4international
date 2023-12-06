import { LanguagePageProps } from '@/i18n/settings';
import { useTranslation } from '@/i18n';

export default async function Page({ params: { lang } }: LanguagePageProps) {
  const { t } = await useTranslation(lang);

  return <h1>{t('pages.destinations')}</h1>;
}
