import { useTranslations } from 'next-intl';
import { Typography } from '@/components/typography/typography';
import Image from 'next/image';
import erasmus_plus_logo from '../../../public/images/partners/erasmus_plus_logo.webp';
import impronta_logo from '../../../public/images/partners/impronta_logo.webp';
import nixedonia_logo from '../../../public/images/partners/nixedonia_logo.webp';
import my_abroad_ally_logo from '../../../public/images/partners/my_abroad_ally_logo.webp';

export const Partners = () => {
  const t = useTranslations('our-partners');

  return (
    <div className='flex flex-col items-center justify-center gap-14 px-2.5'>
      <Typography as='h2' size='heading-2xl' color='europe-dark'>
        {t('title')}
      </Typography>
      <div className='flex w-full flex-wrap items-center justify-center gap-14'>
        <Image
          src={erasmus_plus_logo.src}
          alt={'Erasmus+'}
          width={176}
          height={176}
          style={{ width: '176px', height: 'auto' }}
        />
        <Image
          src={impronta_logo.src}
          alt={'Impronta'}
          height={60}
          width={144}
          style={{ width: '144px', height: 'auto' }}
        />
        <Image
          src={nixedonia_logo.src}
          alt={'Nixedonia'}
          height={50}
          width={203}
          style={{ width: '203px', height: 'auto' }}
        />
        <Image
          src={my_abroad_ally_logo.src}
          alt={'My Abroad Ally'}
          height={118}
          width={118}
          style={{ width: '118px', height: 'auto' }}
        />
      </div>
    </div>
  );
};
