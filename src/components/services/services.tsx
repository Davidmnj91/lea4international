import { useTranslations } from 'next-intl';
import { servicesCardConfig, ServicesCategories } from '@/types/services';
import Link from 'next/link';
import { AnimatedCard } from '@/components/destination-card/animated-card';

type OtherServicesProps = {
  services: Array<ServicesCategories>;
};
export const OtherServices = ({ services }: OtherServicesProps) => {
  const t = useTranslations('services-page.services');

  return (
    <>
      <div className='flex h-[410px] flex-col items-center gap-6 bg-europe px-2.5 py-8 text-center desktop:py-14 desktop:text-left'>
        <h3 className='font-title text-desktop-h-2xl text-basics-white'>
          {t('other-services.title')}
        </h3>
        <p className='text-center font-body text-b-lg font-light text-basics-white'>
          {t.rich('other-services.description')}
        </p>
      </div>
      <div className='mt-[-80px] flex items-center gap-4 overflow-auto p-6 desktop:mt-[-160px] desktop:justify-center desktop:overflow-hidden'>
        {Object.entries(servicesCardConfig)
          .filter(([service, _]) =>
            services.includes(service as ServicesCategories)
          )
          .map(([service, imgSrc]) => (
            <Link key={service} href={service}>
              <AnimatedCard
                imgSrc={imgSrc}
                title={t(`${service}.title`)}
                caption={t('see-more')}
                containerClasses='w-[328px] h-[506px]'
                labelClasses='w-[174px] h-[192px]'
              />
            </Link>
          ))}
      </div>
    </>
  );
};
