import { LanguagePageProps } from '@/i18n';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Typography } from '@/components/typography/typography';
import React, { Suspense } from 'react';
import { unstable_cache } from 'next/cache';
import { VideoBlog } from '@/components/video-blog/video-blog';
import { getVideos } from '@/services/youtube.service';

const getData = unstable_cache(
  async () => {
    /*    return {
      kind: 'youtube#searchListResponse',
      etag: '5esR_3_59R4wNAXo10fmgGEjyyE',
      nextPageToken: 'CAoQAA',
      regionCode: 'ES',
      pageInfo: {
        totalResults: 288,
        resultsPerPage: 10,
      },
      items: [
        {
          kind: 'youtube#searchResult',
          etag: 'dAf-Kf0tVYW-19PibNo0-NIDV-M',
          id: {
            kind: 'youtube#video',
            videoId: 'bQsOXFXW3R4',
          },
          snippet: {
            publishedAt: '2024-01-18T14:24:34Z',
            channelId: 'UCMQZSMxrlgjZEAlJJdds89w',
            title:
              'Te das cuenta que te haces viejo! #viejo #viejos #abuelos #parodia',
            description: '',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/bQsOXFXW3R4/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/bQsOXFXW3R4/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/bQsOXFXW3R4/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'Polifacetico',
            liveBroadcastContent: 'none',
            publishTime: '2024-01-18T14:24:34Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: 'cJHDNAXQ4Udo6VHyLGk2ew0L5Zw',
          id: {
            kind: 'youtube#video',
            videoId: 'zB6suKq5nng',
          },
          snippet: {
            publishedAt: '2024-01-15T14:51:35Z',
            channelId: 'UCMQZSMxrlgjZEAlJJdds89w',
            title:
              'Los chupetes siempre desaparecen! #chupete #padresdefamilia #padres #humor',
            description: '',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/zB6suKq5nng/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/zB6suKq5nng/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/zB6suKq5nng/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'Polifacetico',
            liveBroadcastContent: 'none',
            publishTime: '2024-01-15T14:51:35Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: '36pj8y07u3HJLZJ8YURP-gdOVVc',
          id: {
            kind: 'youtube#video',
            videoId: 'r-dJ9nzVioQ',
          },
          snippet: {
            publishedAt: '2024-01-08T19:00:07Z',
            channelId: 'UCMQZSMxrlgjZEAlJJdds89w',
            title:
              'NO LO CONOZCO REMIX |  (BadPoli x ChrisCortez x AngelBalvin)',
            description:
              'Parodia No Me Conoce Remix Contacto: hola@polifacetico.es.',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/r-dJ9nzVioQ/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/r-dJ9nzVioQ/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/r-dJ9nzVioQ/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'Polifacetico',
            liveBroadcastContent: 'none',
            publishTime: '2024-01-08T19:00:07Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: '-AMKLpyAGzfNO8azpcd3WcOtV_A',
          id: {
            kind: 'youtube#video',
            videoId: 'xGdYaedy2Kc',
          },
          snippet: {
            publishedAt: '2023-12-08T13:28:02Z',
            channelId: 'UCMQZSMxrlgjZEAlJJdds89w',
            title:
              'El que no come de ná! #comidasaludable #comida #polifacetico #comedia',
            description: '',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/xGdYaedy2Kc/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/xGdYaedy2Kc/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/xGdYaedy2Kc/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'Polifacetico',
            liveBroadcastContent: 'none',
            publishTime: '2023-12-08T13:28:02Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: '6wMD96LuH4T7-nFefLp_aqwU8uI',
          id: {
            kind: 'youtube#video',
            videoId: 'J-noc6ToC7k',
          },
          snippet: {
            publishedAt: '2023-11-22T14:27:47Z',
            channelId: 'UCMQZSMxrlgjZEAlJJdds89w',
            title:
              'TU AMIGO EL PODRIO! 💩Con @Galesote #digestion #vater #enelbaño #amigos',
            description: '',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/J-noc6ToC7k/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/J-noc6ToC7k/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/J-noc6ToC7k/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'Polifacetico',
            liveBroadcastContent: 'none',
            publishTime: '2023-11-22T14:27:47Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: '7uIkZ9YNpY6TtRIiFzPaOzR6Qh4',
          id: {
            kind: 'youtube#video',
            videoId: 'aFePTcOAHus',
          },
          snippet: {
            publishedAt: '2023-11-19T20:07:54Z',
            channelId: 'UCMQZSMxrlgjZEAlJJdds89w',
            title: 'Parodia IA Bad Bunny &amp; El Pacto Anuel AA',
            description:
              'Regístrate y Gana 10€: https://registrate.igraal.com/Polifacetico-10euros Me haces MUY FELIZ si le das ❤️, te suscribes y ...',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/aFePTcOAHus/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/aFePTcOAHus/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/aFePTcOAHus/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'Polifacetico',
            liveBroadcastContent: 'none',
            publishTime: '2023-11-19T20:07:54Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: 'Q6T1O2VPNXUuVp7VjIaRqjkiWfI',
          id: {
            kind: 'youtube#video',
            videoId: 'UuNs9VeOVqo',
          },
          snippet: {
            publishedAt: '2023-11-16T15:36:11Z',
            channelId: 'UCMQZSMxrlgjZEAlJJdds89w',
            title:
              'CUANDO LA EMBARAZADA TE COGE TIRRIA… #embarazos #comedia #embarazada #polifacetico',
            description: '',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/UuNs9VeOVqo/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/UuNs9VeOVqo/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/UuNs9VeOVqo/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'Polifacetico',
            liveBroadcastContent: 'none',
            publishTime: '2023-11-16T15:36:11Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: 'm-P_Z9v2q7f7HNpctqb-UjeSYT4',
          id: {
            kind: 'youtube#video',
            videoId: 'YN4aXtiuxyY',
          },
          snippet: {
            publishedAt: '2023-10-24T13:19:04Z',
            channelId: 'UCMQZSMxrlgjZEAlJJdds89w',
            title:
              'CUANDO JUGABAS AL FÚTBOL DE PEQUEÑO! 👦🏻🥅⚽️ #futbol #fútbol',
            description: '',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/YN4aXtiuxyY/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/YN4aXtiuxyY/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/YN4aXtiuxyY/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'Polifacetico',
            liveBroadcastContent: 'none',
            publishTime: '2023-10-24T13:19:04Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: '-cbl90AeyZDx6GoasR0cKQ02tuE',
          id: {
            kind: 'youtube#video',
            videoId: 'IVdq6CAyNQY',
          },
          snippet: {
            publishedAt: '2023-10-06T13:23:25Z',
            channelId: 'UCMQZSMxrlgjZEAlJJdds89w',
            title: 'EL TÍPICO DEL VAPER… #vaper #vapeadores #kikorivera #mambo',
            description: '',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/IVdq6CAyNQY/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/IVdq6CAyNQY/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/IVdq6CAyNQY/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'Polifacetico',
            liveBroadcastContent: 'none',
            publishTime: '2023-10-06T13:23:25Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: 'tHJFuWnOLgaITG7heTG4zx24piM',
          id: {
            kind: 'youtube#video',
            videoId: 'gGdYjSgIyhE',
          },
          snippet: {
            publishedAt: '2023-09-19T12:28:33Z',
            channelId: 'UCMQZSMxrlgjZEAlJJdds89w',
            title:
              'IMITANDO A MI NOVIA EMBARAZADA! 🤰😆 #embarazo #padres #comedia',
            description: '',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/gGdYjSgIyhE/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/gGdYjSgIyhE/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/gGdYjSgIyhE/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'Polifacetico',
            liveBroadcastContent: 'none',
            publishTime: '2023-09-19T12:28:33Z',
          },
        },
      ],
    };*/

    const response = await getVideos();

    return response;
  },
  ['youtube-videos'],
  { revalidate: 7200 } // Re-fetch videos each 2 hour, do not exceed google cuota
);

export default async function Page({ params: { locale } }: LanguagePageProps) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
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
        <Typography
          as='p'
          size='body-lg'
          color='europe-dark'
          className='text-center desktop:text-left'
        >
          {t('description')}
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
