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
    <div className='group h-[510px] w-[328px] overflow-hidden'>
      <div
        className='flex h-full w-full transform items-center justify-center transition duration-500 group-hover:scale-[1.15]'
        style={{
          backgroundImage: `url(${imgSrc}), linear-gradient(#0308227F,#0308227F)`,
          backgroundBlendMode: 'overlay',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='flex h-[192px] w-[174px] flex-col justify-between border border-basics-white p-2.5'>
          <span className='text-start font-title text-desktop-h-lg font-bold text-basics-white'>
            {t(city)}
          </span>
          <span className='text-end font-title text-desktop-h-sm font-bold text-basics-white'>
            {t(country)}
          </span>
        </div>
      </div>
    </div>
  );
};
