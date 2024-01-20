'use client';

import { youtube_v3 } from 'googleapis';
import React, { Fragment, useState } from 'react';
import { buttonTypes } from '@/components/button/button';
import { CaretLeft } from '@phosphor-icons/react/dist/ssr/CaretLeft';
import { CaretRight } from '@phosphor-icons/react/dist/ssr/CaretRight';
import { Contact } from '@/types/contact';
import { useTranslations } from 'next-intl';
import { usePagination } from '@/hooks/usePagination';
import { Dialog, Transition } from '@headlessui/react';
import ReactPlayer from 'react-player';

const VIDEOS_PER_PAGE = 4;

type VideoBlogProps = {
  videos: youtube_v3.Schema$SearchListResponse;
};
export const VideoBlog = ({ videos }: VideoBlogProps) => {
  const t = useTranslations('blog-page');
  const [selectedVideo, setSelectedVideo] =
    useState<youtube_v3.Schema$SearchResult>();
  const [isOpen, setIsOpen] = useState(false);

  const {
    currentItems,
    currentPage,
    totalPages,
    goToPage,
    canGoNextPage,
    canGoPrevPage,
    paginationLinks,
  } = usePagination(videos.items ?? [], VIDEOS_PER_PAGE, 5);

  const selectVideo = (item: youtube_v3.Schema$SearchResult) => {
    setSelectedVideo(item);
    setIsOpen(true);
  };

  return (
    <div className='flex flex-col gap-6 px-6 py-12 desktop:gap-9 desktop:px-12 desktop:py-24'>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-10'
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black/25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${selectedVideo?.id?.videoId}`}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <div className='grid grid-cols-1 gap-6 desktop:grid-cols-2 desktop:gap-9'>
        {currentItems().map((item) => (
          <>
            <a
              key={`${item.id?.videoId}-mobile`}
              href={`https://www.youtube.com/watch?v=${item?.id?.videoId}`}
              target={'_blank'}
              className='flex h-[348px] items-center justify-center bg-cover bg-center bg-no-repeat desktop:hidden'
              style={{
                backgroundImage: `url(${
                  item.snippet?.thumbnails?.high?.url || ''
                })`,
              }}
            />
            <button
              key={`${item.id?.videoId}-desktop`}
              onClick={() => selectVideo(item)}
              className='hidden h-[348px] items-center justify-center bg-cover bg-center bg-no-repeat desktop:flex'
              style={{
                backgroundImage: `url(${
                  item.snippet?.thumbnails?.high?.url || ''
                })`,
              }}
            />
          </>
        ))}
      </div>
      <div className='flex flex-col items-center gap-6 desktop:flex-row desktop:justify-between desktop:gap-0'>
        {totalPages() > 1 && (
          <nav className='flex gap-2.5'>
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={!canGoPrevPage()}
              className={buttonTypes({
                type: 'icon',
                intent: 'secondary-light',
              })}
            >
              <CaretLeft size={22} />
            </button>
            {paginationLinks().map((i) => (
              <button
                key={i}
                onClick={() => goToPage(i)}
                disabled={currentPage === i}
                className={buttonTypes({
                  type: 'icon',
                  intent: 'secondary-light',
                })}
              >
                {i}
              </button>
            ))}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={!canGoNextPage()}
              className={buttonTypes({
                type: 'icon',
                intent: 'secondary-light',
              })}
            >
              <CaretRight size={22} />
            </button>
          </nav>
        )}
        <a
          href={Contact.youtube}
          target={'_blank'}
          className={buttonTypes({ intent: 'primary' })}
        >
          {t('visit-chanel')}
        </a>
      </div>
    </div>
  );
};
