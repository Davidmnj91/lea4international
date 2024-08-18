'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useTranslations } from 'next-intl';
import { buttonTypes } from '@/components/button/button';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useCallback, useEffect, useState } from 'react';
import { Typography } from '@/components/typography/typography';
import { EmblaCarouselType } from 'embla-carousel';

export const CommitmentsCarousel = () => {
  const [carouselRef, carouselApi] = useEmblaCarousel({ loop: true });
  const t = useTranslations();

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(
    () => carouselApi && carouselApi.scrollPrev(),
    [carouselApi]
  );
  const scrollNext = useCallback(
    () => carouselApi && carouselApi.scrollNext(),
    [carouselApi]
  );

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    onSelect(carouselApi);
    carouselApi.on('reInit', onSelect);
    carouselApi.on('select', onSelect);
  }, [carouselApi, onSelect]);

  const slides = [
    {
      title: t('commitments-carousel.standards.title'),
      description: t.raw('commitments-carousel.standards.description'),
    },
    {
      title: t('commitments-carousel.team.title'),
      description: t.raw('commitments-carousel.team.description'),
    },
    {
      title: t('commitments-carousel.approach.title'),
      description: t.raw('commitments-carousel.approach.description'),
    },
  ];

  return (
    <div className='overflow-hidden' ref={carouselRef}>
      <div className='flex w-full desktop:min-h-[337px] desktop:w-[440px]'>
        {slides.map(({ title, description }, index) => (
          <div
            key={index}
            className='flex min-w-0 flex-[0_0_100%] flex-col justify-between bg-basics-gray p-6'
          >
            <div>
              <Typography as='span' size='heading-sm' color='gold-dark'>
                {`${(index + 1).toLocaleString('en-US', {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })}/${slides.length}`}
              </Typography>
              <Typography as='h3' size='heading-lg' color='europe-dark'>
                {title}
              </Typography>
              <Typography
                as='p'
                size='body-lg'
                color='europe-dark'
                className='mt-9'
                dangerouslySetInnerHTML={{ __html: description }}
              ></Typography>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center gap-6 bg-basics-gray p-6 desktop:justify-start'>
        <button
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
          className={buttonTypes({
            intent: 'secondary-light',
            type: 'icon',
          })}
        >
          <CaretLeft size={32} />
        </button>
        <button
          onClick={scrollNext}
          disabled={nextBtnDisabled}
          className={buttonTypes({
            intent: 'secondary-light',
            type: 'icon',
          })}
        >
          <CaretRight size={32} />
        </button>
      </div>
    </div>
  );
};
