import { useTranslations } from 'next-intl';

type DestinationCardProps = {
  imgSrc: string;
  city: string;
  country: string;
};
export const DestinationCard = ({
  imgSrc,
  city,
  country,
}: DestinationCardProps) => {
  const t = useTranslations('destinations');

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        height: '510px',
        width: '328px',
      }}
    >
      <div
        style={{
          height: '100%',
          width: '100%',
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          position: 'absolute',
          top: 0,
        }}
      >
        <div className='absolute top-0 h-full w-full bg-[#0308227F]'></div>
      </div>
      <div className='z-10 flex h-[192px] w-[174px] flex-col justify-between border border-basics-white p-2.5'>
        <span className='text-start font-title text-desktop-h-lg font-bold text-basics-white'>
          {t(city)}
        </span>
        <span className='text-end font-title text-desktop-h-sm font-bold text-basics-white'>
          {t(country)}
        </span>
      </div>
    </div>
  );
};
