type DestinationCardProps = {
  imgSrc: string;
  title: string;
  caption: string;
};
export const AnimatedCard = ({
  imgSrc,
  title,
  caption,
}: DestinationCardProps) => {
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
        <div className='flex h-[230px] w-[200px] flex-col justify-between border border-basics-white p-2.5'>
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
