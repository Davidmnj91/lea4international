import React, { JSX } from 'react';
import { CompanyForm } from '@/components/company-form/company-form';
import { FamilyForm } from '@/components/family-form/family-form';
import { InstitutionForm } from '@/components/institution-form/institution-form';
import { PartnerForm } from '@/components/partner-form/partner-form';
import { LanguagePageProps } from '@/i18n';
import { unstable_setRequestLocale } from 'next-intl/server';

export const dynamicParams = false;

const roles: Record<string, JSX.Element> = {
  company: <CompanyForm />,
  'host-family': <FamilyForm />,
  institutions: <InstitutionForm />,
  partner: <PartnerForm />,
};

export async function generateStaticParams() {
  return Object.keys(roles).map((role) => ({
    role,
  }));
}

export default function Page({
  params: { locale, role },
}: LanguagePageProps<{ role: keyof typeof roles }>) {
  const coercedRole = roles[role] || <CompanyForm />;

  // Enable static rendering
  unstable_setRequestLocale(locale);

  return <>{coercedRole}</>;
}
