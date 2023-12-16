import clsx from 'clsx';

type DestinationCardProps = {
  imgSrc: string;
  title: string;
  caption: string;
  containerClasses: string;
  labelClasses: string;
};
export const AnimatedCard = ({
  imgSrc,
  title,
  caption,
  containerClasses,
  labelClasses,
}: DestinationCardProps) => {
  return (
    <div
      className={clsx(
        'h-[${size.height}] w-[${size.width}] group overflow-hidden',
        containerClasses
      )}
    >
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
        <div
          className={clsx(
            'h-[${labelSize.height}px] w-[${labelSize.width}px] flex flex-col justify-between border border-basics-white p-2.5',
            labelClasses
          )}
        >
          <span className='text-start font-title text-desktop-h-md font-bold text-basics-white'>
            {title}
          </span>
          <span className='text-end font-title text-desktop-h-sm font-bold text-basics-white'>
            {caption}
          </span>
        </div>
      </div>
    </div>
  );
};
