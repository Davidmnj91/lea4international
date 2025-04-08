import { LanguagePageProps } from '@/i18n/config';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Typography } from '@/components/typography/typography';
import React, { Suspense } from 'react';
import { unstable_cache } from 'next/cache';
import { VideoBlog } from '@/components/video-blog/video-blog';
import { getVideos } from '@/services/youtube.service';

const getData = unstable_cache(
  async () => await getVideos(),
  ['youtube-videos'],
  { revalidate: 7200 } // Re-fetch videos each 2 hour, do not exceed google cuota
);

export default async function Page({ params }: LanguagePageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  const videos = await getData();

  const t = await getTranslations('blog-page');

  return (
    <div>
      <div className='flex flex-col items-center justify-center gap-12 py-14 desktop:gap-24 desktop:py-24'>
        <Typography
          as='h1'
          size='heading-2xl'
          color='europe-dark'
          className='text-center desktop:text-left'
        >
          {t('title')}
        </Typography>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <section id='videos'>
          <VideoBlog videos={videos} />
        </section>
      </Suspense>
    </div>
  );
}
