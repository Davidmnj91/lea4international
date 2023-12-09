'use client';

import { useTranslations } from 'next-intl';
import { CompanyForm } from '@/components/company-form/company-form';
import { tagButtonTypes } from '@/components/button/button';
import { FamilyForm } from '@/components/family-form/family-form';
import { InstitutionForm } from '@/components/institution-form/institution-form';
import { Envelope } from '@phosphor-icons/react/dist/ssr/Envelope';
import { NavigationArrow } from '@phosphor-icons/react/dist/ssr/NavigationArrow';
import { Phone } from '@phosphor-icons/react/dist/ssr/Phone';
import { useState } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { Contact } from '@/types/contact';
import { PartnerForm } from '@/components/partner-form/partner-form';

const roles = {
  company: <CompanyForm />,
  'host-family': <FamilyForm />,
  institutions: <InstitutionForm />,
  partner: <PartnerForm />,
};

const tabContentVariants: Variants = {
  initial: {
    y: 10,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -10,
    opacity: 0,
  },
};
export default function Page() {
  const [activeRole, setActiveRole] = useState<keyof typeof roles>('company');

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
          <button
            onClick={() => setActiveRole(role as keyof typeof roles)}
            key={role}
            className={tagButtonTypes({
              intent: role === activeRole ? 'selected' : 'enabled',
            })}
          >
            {t(`roles.${role}`)}
          </button>
        ))}
      </div>
      <AnimatePresence mode='wait'>
        <motion.section
          key={activeRole || 'empty'}
          variants={tabContentVariants}
          initial='initial'
          animate='enter'
          exit='exit'
          transition={{
            duration: 0.3,
          }}
          className='flex justify-center p-24'
        >
          {roles[activeRole]}
        </motion.section>
      </AnimatePresence>
      <div className='flex flex-col items-center justify-center gap-3 pb-24 pt-8'>
        <div className='flex items-center justify-center gap-6'>
          <NavigationArrow size={32} />
          <a
            href='https://maps.app.goo.gl/R1eMyu6Mp7up3DSb8'
            target='_blank'
            className='font-body text-b-lg text-europe-dark'
          >
            Street X, Prague, Czech Republic
          </a>
        </div>
        <div className='flex items-center justify-center gap-6'>
          <Envelope size={32} />
          <a
            href={`mailto:${Contact.mail}`}
            className='font-body text-b-lg text-europe-dark'
          >
            [mail]@[mail]
          </a>
        </div>
        <div className='flex items-center justify-center gap-6'>
          <Phone size={32} />
          <a
            href={`tel:${Contact.phone}`}
            className='font-body text-b-lg text-europe-dark'
          >
            {Contact.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
