'use client';

import { useTranslations } from 'next-intl';
import { CompanyForm } from '@/components/company-form/company-form';
import { tagButtonTypes } from '@/components/button/button';
import { FamilyForm } from '@/components/family-form/family-form';
import { InstitutionForm } from '@/components/institution-form/institution-form';
import { Envelope } from '@phosphor-icons/react/dist/ssr/Envelope';
import { Phone } from '@phosphor-icons/react/dist/ssr/Phone';
import React, { useState } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { Contact } from '@/types/contact';
import { PartnerForm } from '@/components/partner-form/partner-form';
import { Typography } from '@/components/typography/typography';

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
      <div className='my-14 flex flex-col items-center justify-center gap-6  desktop:my-24 desktop:gap-1.5'>
        <Typography as='h1' size='heading-2xl' color='europe-dark'>
          {t('title')}
        </Typography>
        <Typography
          as='p'
          size='body-lg'
          color='europe-dark'
          className='text-center desktop:text-left'
        >
          {t('message')}
        </Typography>
      </div>
      <div className='sticky top-0 flex flex-col justify-start gap-6 overflow-auto border-y border-y-basics-disabled bg-basics-white px-6 py-6 desktop:flex-row desktop:items-center desktop:justify-center desktop:px-12'>
        <Typography
          as='span'
          size='body-lg'
          color='europe-dark'
          className='sticky left-0'
        >
          {t('who-are-you')}
        </Typography>
        <div className='flex gap-6'>
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
          className='flex justify-center p-6 desktop:p-24'
        >
          {roles[activeRole]}
        </motion.section>
      </AnimatePresence>
      <div className='flex flex-col items-center justify-center gap-3 pb-14 pt-8 desktop:pb-24'>
        <div className='flex items-center justify-center gap-6'>
          <Envelope size={32} />
          <Typography
            as='a'
            size='body-lg'
            color='europe-dark'
            href={`mailto:${Contact.mail}`}
            className='font-body text-b-lg text-europe-dark'
          >
            [mail]@[mail]
          </Typography>
        </div>
        <div className='flex items-center justify-center gap-6'>
          <Phone size={32} />
          <Typography
            as='a'
            size='body-lg'
            color='europe-dark'
            href={`tel:${Contact.phone}`}
            className='font-body text-b-lg text-europe-dark'
          >
            {Contact.phone}
          </Typography>
        </div>
      </div>
    </div>
  );
}
