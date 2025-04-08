import { LanguagePageProps } from '@/i18n/config';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import lucia_bg from '../../../../../public/images/partners/lucia_bg.webp';
import my_abroad_ally_owner from '../../../../../public/images/partners/my_abroad_ally_owner.webp';
import my_abroad_ally_logo from '../../../../../public/images/partners/my_abroad_ally_logo.webp';
import Image from 'next/image';
import { tagButtonTypes } from '@/components/button/button';
import { Eye } from '@phosphor-icons/react/dist/ssr/Eye';
import { Gear } from '@phosphor-icons/react/dist/ssr/Gear';
import { HandHeart } from '@phosphor-icons/react/dist/ssr/HandHeart';
import { Leaf } from '@phosphor-icons/react/dist/ssr/Leaf';
import { PuzzlePiece } from '@phosphor-icons/react/dist/ssr/PuzzlePiece';
import { SealCheck } from '@phosphor-icons/react/dist/ssr/SealCheck';
import { Users } from '@phosphor-icons/react/dist/ssr/Users';
import { UsersFour } from '@phosphor-icons/react/dist/ssr/UsersFour';
import React, { use } from 'react';
import { Partners } from '@/components/partners/partners';
import clsx from 'clsx';
import { Typography } from '@/components/typography/typography';
import { defaultTranslationVales } from '@/i18n/translation-values';

export default function Page({ params }: LanguagePageProps) {
  const { locale } = use(params);

  setRequestLocale(locale);

  const t = useTranslations('about-us-page');

  const values = {
    inclusion: <PuzzlePiece size={54} weight='thin' />,
    diversity: <UsersFour size={54} weight='thin' />,
    respect: <HandHeart size={54} weight='thin' />,
    quality: <SealCheck size={54} weight='thin' />,
    honesty: <Eye size={54} weight='thin' />,
    innovation: <Gear size={54} weight='thin' />,
    sustainability: <Leaf size={54} weight='thin' />,
    collaboration: <Users size={54} weight='thin' />,
  };

  return (
    <div>
      <div className='flex items-center justify-center py-14 desktop:py-24'>
        <Typography
          as='h1'
          size='heading-2xl'
          color='europe-dark'
          className='text-center desktop:text-left'
        >
          {t('title')}
        </Typography>
      </div>
      <div className='flex flex-col items-center justify-center gap-14 p-6 desktop:flex-row desktop:p-24'>
        <div
          className='relative flex h-[272px] w-full flex-col items-end bg-contain bg-center bg-no-repeat desktop:h-[346px] desktop:w-[422px] desktop:bg-cover'
          style={{ backgroundImage: `url(${lucia_bg.src}` }}
        >
          <span
            className={clsx(
              tagButtonTypes({ intent: 'selected' }),
              'absolute left-1/2 ml-10 mt-5 flex-grow-0 translate-x-1/2 desktop:left-auto desktop:right-12 desktop:ml-auto'
            )}
          >
            {t('role.director')}
          </span>
        </div>
        <svg
          className='hidden desktop:inline-block'
          width='2'
          height='569'
          viewBox='0 0 2 569'
          fill='none'
        >
          <path d='M1 0.234375L1.00002 528.234' stroke='#45586A' />
        </svg>
        <svg
          className='desktop:hidden'
          width='175'
          height='2'
          viewBox='0 0 175 2'
          fill='none'
        >
          <path d='M175 1L-2.29478e-06 0.999985' stroke='#45586A' />
        </svg>
        <div className='flex flex-col items-center gap-8 desktop:flex-[0_0_647px] desktop:items-start desktop:justify-center'>
          <Typography as='p' size='body-lg' color='europe-dark'>
            {t.rich('description', defaultTranslationVales)}
          </Typography>
        </div>
      </div>
      <div className='flex flex-col items-center gap-14 bg-europe py-14'>
        <Typography as='h2' size='heading-2xl' color='basics-white'>
          {t('values.title')}
        </Typography>
        <div className='grid grid-cols-2 gap-6 desktop:grid-cols-4'>
          {Object.entries(values).map(([value, icon]) => (
            <div
              key={value}
              className='flex h-[140px] w-[140px] flex-col items-center justify-center gap-2.5 rounded-full border border-dashed border-basics-white desktop:h-[200px] desktop:w-[200px]'
            >
              <Typography as='span' size='heading-md' color='basics-white'>
                {t(`values.${value}`)}
              </Typography>
              <div className='text-gold'>{icon}</div>
            </div>
          ))}
        </div>
        <div className='flex items-center justify-center py-20'>
          <Typography
            as='h3'
            size='heading-lg'
            color='basics-white'
            className='flex flex-col items-center text-center desktop:w-[850px] desktop:flex-row'
          >
            <Typography as='span' size='heading-4xl' color='gold-dark'>
              &ldquo;
            </Typography>
            <span className='w-[297px] capitalize desktop:w-[706px]'>
              {t.rich('quote', defaultTranslationVales)}
            </span>
            <Typography as='span' size='heading-4xl' color='gold-dark'>
              &rdquo;
            </Typography>
          </Typography>
        </div>
      </div>
      <div className='py-14'>
        <Partners />
        <div className='flex flex-col items-center justify-center gap-12 px-12 py-4 desktop:flex-row desktop:py-24'>
          <div className='flex flex-col items-end gap-8'>
            <div
              className='flex h-[346px] w-[236px] flex-col'
              style={{ backgroundImage: `url(${my_abroad_ally_owner.src})` }}
            />
          </div>
          <svg
            className='hidden desktop:inline-block'
            width='2'
            height='343'
            viewBox='0 0 2 343 '
            fill='none'
          >
            <path d='M1 0.234375L1.00002 528.234' stroke='#45586A' />
          </svg>
          <svg
            className='desktop:hidden'
            width='175'
            height='2'
            viewBox='0 0 175 2'
            fill='none'
          >
            <path d='M175 1L-2.29478e-06 0.999985' stroke='#45586A' />
          </svg>
          <Image
            src={my_abroad_ally_logo.src}
            alt='my_abroad_ally'
            width='200'
            height='200'
          />
        </div>
      </div>
    </div>
  );
}
