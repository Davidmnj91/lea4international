// prettier-ignore
'use client';

import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import { useTranslations } from 'next-intl';
import { buttonTypes } from '@/components/button/button';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useCallback, useEffect, useState } from 'react';

export const CommitmentsCarousel = () => {
  const [carouselRef, carouselApi] = useEmblaCarousel();
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
      <div className='flex min-h-[425px] w-[440px]'>
        {slides.map(({ title, description }, index) => (
          <div
            key={index}
            className='flex min-w-0 flex-[0_0_100%] flex-col justify-between bg-basics-gray p-6'
          >
            <div>
              <span className='font-title text-desktop-h-sm text-gold-dark'>{`${(
                index + 1
              ).toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}/${slides.length}`}</span>
              <h3 className='font-title text-desktop-h-lg text-europe-dark'>
                {title}
              </h3>
              <p
                className='mt-9 font-body text-b-lg text-europe-dark'
                dangerouslySetInnerHTML={{ __html: description }}
              ></p>
            </div>
            <div className='flex gap-6'>
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
        ))}
      </div>
    </div>
  );
};
