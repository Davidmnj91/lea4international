import { LanguagePageProps } from '@/i18n';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import lucia_bg from '../../../../../public/lucia_bg.png';
import partner_1_bg from '../../../../../public/partner_1_bg.png';
import my_abroad_ally from '../../../../../public/my_abroad_ally.png';
import Image from 'next/image';
import { tagButtonTypes } from '@/components/button/button';
import { Eye } from '@phosphor-icons/react/dist/ssr/Eye';
import { Gear } from '@phosphor-icons/react/dist/ssr/Gear';
import { HandHeart } from '@phosphor-icons/react/dist/ssr/HandHeart';
import { Leaf } from '@phosphor-icons/react/dist/ssr/Leaf';
import { PuzzlePiece } from '@phosphor-icons/react/dist/ssr/PuzzlePiece';
import { SealCheck } from '@phosphor-icons/react/dist/ssr/SealCheck';
import { Users } from '@phosphor-icons/react/dist/ssr/Users';
import { UsersFour } from '@phosphor-icons/react/dist/ssr/UsersFour';
import React from 'react';
import { Partners } from '@/components/partners/partners';
import clsx from 'clsx';

export default function Page({ params: { locale } }: LanguagePageProps) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('about-us-page');

  const values = {
    inclusion: <PuzzlePiece size={54} />,
    diversity: <UsersFour size={54} />,
    respect: <HandHeart size={54} />,
    quality: <SealCheck size={54} />,
    honesty: <Eye size={54} />,
    innovation: <Gear size={54} />,
    sustainability: <Leaf size={54} />,
    collaboration: <Users size={54} />,
  };

  return (
    <div>
      <div className='flex items-center justify-center py-24'>
        <h1 className='text-center font-title text-desktop-h-2xl text-europe-dark desktop:text-left'>
          {t('title')}
        </h1>
      </div>
      <div className='mx-24 my-24 flex items-center justify-center gap-14'>
        <div
          className='flex h-[346px] w-[422px] flex-col items-end'
          style={{ backgroundImage: `url(${lucia_bg.src}` }}
        >
          <span
            className={clsx(
              tagButtonTypes({ intent: 'selected' }),
              'mr-5 mt-5'
            )}
          >
            {t('role.director')}
          </span>
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='2'
          height='569'
          viewBox='0 0 2 569'
          fill='none'
        >
          <path d='M1 0.234375L1.00002 528.234' stroke='#45586A' />
        </svg>
        <div className='justify-center-center flex flex-[0_0_647px] flex-col gap-8'>
          <p className='font-body text-b-lg text-europe-dark '>
            {t.rich('description')}
          </p>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='142'
              height='33'
              viewBox='0 0 142 33'
              fill='none'
            >
              <path
                d='M127.342 25.7693C126.349 25.7693 125.853 25.2454 125.853 24.1975C125.853 22.5706 126.639 20.8472 128.21 19.0273C128.514 18.6413 128.872 18.1863 129.286 17.6624C129.727 17.1109 130.223 16.518 130.775 15.8838C130.83 15.8838 130.582 15.7873 130.03 15.5943C129.672 15.484 129.493 15.291 129.493 15.0152C129.493 14.6843 129.727 14.5189 130.196 14.5189C130.637 14.5189 131.368 14.3948 132.388 14.1466C132.553 14.0363 132.719 13.926 132.884 13.8157C133.077 13.7054 133.27 13.5951 133.463 13.4848C133.767 13.2918 134.07 13.1953 134.373 13.1953C134.539 13.1953 134.704 13.2367 134.87 13.3194C135.063 13.3745 135.269 13.4573 135.49 13.5676C135.793 13.733 136.055 13.8847 136.276 14.0225C136.524 14.1328 136.717 14.2156 136.855 14.2707L141.239 14.2294C141.708 14.2294 141.942 14.3397 141.942 14.5602C141.942 14.7808 141.708 14.9187 141.239 14.9739C140.66 15.0566 140.136 15.098 139.668 15.098C139.695 15.2082 139.709 15.3185 139.709 15.4288C139.737 15.5116 139.75 15.5805 139.75 15.6357C139.75 16.518 139.226 17.6486 138.179 19.0273C137.324 20.1579 136.359 21.1368 135.283 21.964C132.857 23.8115 130.678 24.9972 128.748 25.5211C128.224 25.6865 127.755 25.7693 127.342 25.7693ZM127.755 24.7766C127.811 24.7766 127.866 24.7766 127.921 24.7766C128.004 24.749 128.1 24.7214 128.21 24.6939C130.03 24.17 132.085 23.0394 134.373 21.3022C134.787 20.9989 135.187 20.6404 135.573 20.2268C135.986 19.8132 136.386 19.372 136.772 18.9032C137.682 17.7451 138.137 16.8076 138.137 16.0906C138.137 15.7597 138.041 15.4978 137.848 15.3048H135.986C135.38 15.3048 134.856 15.3599 134.415 15.4702C134.001 15.5529 133.643 15.6632 133.339 15.8011C132.54 16.4077 131.354 17.621 129.782 19.4409C129.231 20.1027 128.693 20.861 128.169 21.7158C127.48 22.8464 127.135 23.6047 127.135 23.9907V24.0734C127.135 24.5422 127.342 24.7766 127.755 24.7766Z'
                fill='#EBBD00'
              />
              <path
                d='M120.184 25.6031C119.77 25.6031 119.233 25.479 118.571 25.2309C117.578 24.8448 117.082 24.2933 117.082 23.5764C117.082 23.3007 117.192 22.9008 117.413 22.3769C117.633 21.9081 117.909 21.3567 118.24 20.7224C118.598 20.0882 119.026 19.3713 119.522 18.5716L121.177 15.8831C121.232 15.7453 121.259 15.6212 121.259 15.5109C121.259 15.373 121.259 15.2489 121.259 15.1386C121.259 14.8077 121.177 14.6009 121.011 14.5182C120.405 14.2424 120.101 13.9943 120.101 13.7737C120.101 13.6634 120.253 13.5669 120.556 13.4841C120.915 13.4014 121.314 13.3325 121.756 13.2773C122.224 13.2222 122.748 13.1808 123.327 13.1533C124.293 11.94 125.244 10.7818 126.181 9.67887C127.146 8.49317 127.891 7.76244 128.415 7.4867C129.215 6.99036 130.014 6.74219 130.814 6.74219C131.034 6.74219 131.145 6.76976 131.145 6.82491C131.145 6.93521 131.09 7.00415 130.979 7.03172C129.931 7.72108 128.994 8.46559 128.167 9.26525L125.52 12.2847C125.354 12.4777 125.271 12.6569 125.271 12.8224C125.271 13.043 125.437 13.1808 125.768 13.236C125.906 13.236 126.043 13.236 126.181 13.236C126.319 13.2084 126.471 13.1946 126.636 13.1946C126.94 13.1946 127.284 13.2084 127.67 13.236C128.056 13.236 128.456 13.2498 128.87 13.2773C129.118 13.3049 129.242 13.3738 129.242 13.4841C129.242 13.7323 128.787 13.884 127.877 13.9391C127.271 13.9391 126.237 14.0218 124.775 14.1873C124.417 14.2424 123.989 14.4355 123.493 14.7664C122.555 15.9796 121.756 17.2067 121.094 18.4476C120.432 19.6884 119.881 20.9293 119.439 22.1701C119.136 23.0249 118.984 23.5902 118.984 23.8659C118.984 24.3347 119.219 24.5691 119.688 24.5691C120.074 24.5691 120.473 24.4726 120.887 24.2795C121.053 24.2244 121.287 24.1003 121.59 23.9073C121.756 23.797 121.949 23.6867 122.169 23.5764C122.39 23.4385 122.638 23.2731 122.914 23.0801C123.962 22.4459 124.541 22.1287 124.651 22.1287C124.927 22.1287 125.065 22.239 125.065 22.4596C125.065 22.6527 124.954 22.8319 124.734 22.9973L123.203 24.1555C122.817 24.4312 122.404 24.6794 121.962 24.9C121.549 25.1206 121.121 25.3274 120.68 25.5204C120.515 25.5756 120.349 25.6031 120.184 25.6031Z'
                fill='#EBBD00'
              />
              <path
                d='M105.288 25.7693C104.295 25.7693 103.799 25.2454 103.799 24.1975C103.799 22.5706 104.584 20.8472 106.156 19.0273C106.46 18.6413 106.818 18.1863 107.232 17.6624C107.673 17.1109 108.169 16.518 108.721 15.8838C108.776 15.8838 108.528 15.7873 107.976 15.5943C107.618 15.484 107.438 15.291 107.438 15.0152C107.438 14.6843 107.673 14.5189 108.142 14.5189C108.583 14.5189 109.313 14.3948 110.334 14.1466C110.499 14.0363 110.665 13.926 110.83 13.8157C111.023 13.7054 111.216 13.5951 111.409 13.4848C111.712 13.2918 112.016 13.1953 112.319 13.1953C112.485 13.1953 112.65 13.2367 112.815 13.3194C113.008 13.3745 113.215 13.4573 113.436 13.5676C113.739 13.733 114.001 13.8847 114.222 14.0225C114.47 14.1328 114.663 14.2156 114.801 14.2707L119.185 14.2294C119.654 14.2294 119.888 14.3397 119.888 14.5602C119.888 14.7808 119.654 14.9187 119.185 14.9739C118.606 15.0566 118.082 15.098 117.613 15.098C117.641 15.2082 117.655 15.3185 117.655 15.4288C117.682 15.5116 117.696 15.5805 117.696 15.6357C117.696 16.518 117.172 17.6486 116.124 19.0273C115.27 20.1579 114.304 21.1368 113.229 21.964C110.803 23.8115 108.624 24.9972 106.694 25.5211C106.17 25.6865 105.701 25.7693 105.288 25.7693ZM105.701 24.7766C105.756 24.7766 105.812 24.7766 105.867 24.7766C105.949 24.749 106.046 24.7214 106.156 24.6939C107.976 24.17 110.03 23.0394 112.319 21.3022C112.733 20.9989 113.133 20.6404 113.519 20.2268C113.932 19.8132 114.332 19.372 114.718 18.9032C115.628 17.7451 116.083 16.8076 116.083 16.0906C116.083 15.7597 115.987 15.4978 115.793 15.3048H113.932C113.326 15.3048 112.802 15.3599 112.36 15.4702C111.947 15.5529 111.588 15.6632 111.285 15.8011C110.485 16.4077 109.3 17.621 107.728 19.4409C107.176 20.1027 106.639 20.861 106.115 21.7158C105.425 22.8464 105.081 23.6047 105.081 23.9907V24.0734C105.081 24.5422 105.288 24.7766 105.701 24.7766Z'
                fill='#EBBD00'
              />
              <path
                d='M77.9468 31.6831C76.4854 31.6831 75.7546 31.2832 75.7546 30.4836C75.7546 30.263 75.7684 30.1251 75.796 30.07C75.9614 29.4633 77.2161 28.5396 79.5599 27.2987C81.8762 26.0854 84.1235 25.2169 86.3019 24.6929C88.2872 24.2242 90.1899 23.8106 92.0098 23.4521C93.8297 23.066 95.5807 22.7489 97.2627 22.5008C99.0826 21.0393 100.186 19.5779 100.572 18.1164C100.654 17.8131 100.696 17.5374 100.696 17.2892C100.696 16.2138 99.9512 15.4555 98.4622 15.0143C98.021 14.8764 96.4906 14.6283 93.8711 14.2698C91.4445 13.9389 89.7625 13.5666 88.8249 13.153C87.6117 12.6015 87.005 11.8157 87.005 10.7954C87.005 10.4094 87.0877 9.96817 87.2532 9.47183C87.8874 7.51404 89.9831 5.50111 93.5402 3.43302C97.4557 1.14434 101.206 0 104.791 0C107.41 0 108.72 0.744511 108.72 2.23353C108.72 3.00562 108.348 3.97072 107.603 5.12885C107.3 5.59762 107.052 5.832 106.859 5.832C106.776 5.832 106.735 5.77685 106.735 5.66655C106.735 5.52868 106.817 5.32187 106.983 5.04613C107.396 4.38434 107.603 3.79149 107.603 3.26757C107.603 1.944 106.404 1.28221 104.005 1.28221C102.488 1.28221 101.013 1.46145 99.579 1.81992C98.1727 2.15081 96.7802 2.63336 95.4015 3.26757C92.4786 4.67387 90.4518 6.52136 89.3213 8.81004C89.0731 9.30638 88.949 9.73379 88.949 10.0923C88.949 11.3883 90.7552 12.312 94.3674 12.8635C97.3179 13.2771 99.3032 13.6494 100.323 13.9803C102.254 14.5869 103.177 15.4279 103.095 16.5033C103.177 18.3508 102.157 20.2259 100.034 22.1285L100.323 22.0872C100.434 22.0596 100.572 22.0458 100.737 22.0458C100.903 22.0458 101.096 22.0458 101.316 22.0458H101.523C101.771 22.0458 101.895 22.1285 101.895 22.294C101.895 22.5697 101.633 22.7214 101.109 22.7489C100.971 22.7765 100.82 22.7903 100.654 22.7903C100.489 22.7903 100.323 22.8041 100.158 22.8317L99.0826 22.9557C97.4006 24.2793 95.498 25.5064 93.3747 26.6369C91.2515 27.7675 88.8663 28.8015 86.2191 29.7391C82.4966 31.0351 79.7391 31.6831 77.9468 31.6831ZM77.6986 30.6904C78.9671 30.6904 81.6556 29.9321 85.7642 28.4155C89.6522 27.0643 92.9749 25.4512 95.7323 23.5762C94.5742 23.8795 93.2231 24.238 91.6789 24.6516C90.1347 25.0376 88.3562 25.4788 86.3432 25.9751C85.3781 26.1957 84.3992 26.4853 83.4066 26.8437C82.4139 27.2298 81.3936 27.6572 80.3458 28.126C78.2226 29.1186 77.1609 29.8769 77.1609 30.4009V30.4422C77.1609 30.6077 77.3402 30.6904 77.6986 30.6904Z'
                fill='#EBBD00'
              />
              <path
                d='M55.3598 25.6859C54.7256 25.6859 54.4084 25.3136 54.4084 24.5691C54.4084 24.0452 54.6015 23.3696 54.9875 22.5424C55.9802 20.6949 57.6209 18.7922 59.9096 16.8344C62.6946 14.5182 64.9557 13.3601 66.6929 13.3601C67.7683 13.3601 68.5128 13.5669 68.9264 13.9805C69.5606 13.5117 70.2362 13.2773 70.9531 13.2773C71.091 13.2773 71.1599 13.3187 71.1599 13.4014C71.1599 13.4566 71.1324 13.5117 71.0772 13.5669C70.6912 14.0081 70.25 14.6009 69.7536 15.3454C69.2849 16.0899 68.7747 17.0137 68.2233 18.1167C66.9273 20.6535 66.2793 22.5148 66.2793 23.7005C66.2793 23.9762 66.293 24.1417 66.3206 24.1968V24.2382C66.3206 24.4036 66.2379 24.6105 66.0724 24.8586C65.907 25.0792 65.7416 25.1895 65.5761 25.1895C65.2452 25.1895 65.0798 24.638 65.0798 23.535C65.0798 21.66 65.5072 19.8676 66.362 18.158L62.8462 21.0947C61.5227 22.1977 60.3232 23.1076 59.2478 23.8246C58.1999 24.5139 57.29 25.0379 56.5179 25.3963C56.1319 25.5893 55.7458 25.6859 55.3598 25.6859ZM57.221 23.7832C57.3865 23.7832 57.5657 23.7281 57.7587 23.6178C58.1172 23.4799 58.7376 23.1214 59.62 22.5424C60.5024 21.9633 61.4537 21.2464 62.474 20.3916C63.7424 19.3437 64.7902 18.3924 65.6175 17.5376C66.4723 16.6552 67.0927 15.9934 67.4787 15.5522C67.3133 15.0835 66.9824 14.8491 66.4861 14.8491C65.521 14.8491 63.9768 15.6763 61.8536 17.3308C59.4546 19.261 57.8828 20.8465 57.1383 22.0874C56.8901 22.5286 56.7661 22.9422 56.7661 23.3282C56.7661 23.6316 56.9177 23.7832 57.221 23.7832Z'
                fill='#EBBD00'
              />
              <path
                d='M45.2603 25.7669C44.9846 25.7669 44.8467 25.6842 44.8467 25.5188C44.8467 25.436 44.888 25.3395 44.9708 25.2292C45.1914 24.8708 45.4395 24.4847 45.7153 24.0711C46.0186 23.6575 46.3219 23.2301 46.6252 22.7889C46.9286 22.3201 47.2594 21.8376 47.6179 21.3412C48.004 20.8173 48.39 20.2658 48.776 19.6868C49.2724 18.9974 49.5895 18.4046 49.7274 17.9082C49.7549 17.7979 49.7687 17.6876 49.7687 17.5773C49.7687 17.4395 49.7825 17.3154 49.8101 17.2051L49.9342 16.5019C49.9893 16.2537 50.527 15.9091 51.5473 15.4679C52.2918 15.1094 52.8708 14.9302 53.2845 14.9302C53.5051 14.9302 53.5878 15.0129 53.5326 15.1783C53.3396 15.8401 52.8984 16.6398 52.2091 17.5773L50.1823 20.3486C49.9342 20.707 49.6033 21.1344 49.1897 21.6308C48.8036 22.0995 48.3486 22.6786 47.8247 23.368C47.8799 23.3404 47.9902 23.299 48.1556 23.2439C48.3486 23.1612 48.5968 23.0646 48.9001 22.9543C49.2034 22.844 49.5757 22.72 50.0169 22.5821C50.4581 22.4166 50.982 22.2374 51.5886 22.0444C51.9747 21.9065 52.4572 21.7549 53.0363 21.5894C53.6154 21.3964 54.3047 21.2034 55.1044 21.0103C55.2698 21.0103 55.3526 21.0931 55.3526 21.2585V21.3412C55.3526 21.4515 55.2698 21.5343 55.1044 21.5894C51.2715 22.6097 48.3211 23.8919 46.253 25.436C45.9497 25.6566 45.6188 25.7669 45.2603 25.7669ZM53.9463 9.67724C53.8084 9.67724 53.6705 9.56694 53.5326 9.34634C53.3948 9.09817 53.3258 8.90515 53.3258 8.76728C53.3258 8.54668 53.4499 8.33988 53.6981 8.14685C53.9463 7.92626 54.222 7.74702 54.5253 7.60915C54.8562 7.47128 55.1044 7.40234 55.2698 7.40234C55.4353 7.40234 55.518 7.44371 55.518 7.52643C55.518 7.6643 55.4766 7.81596 55.3939 7.98141C55.3388 8.11928 55.2423 8.29851 55.1044 8.51911C54.9665 8.68456 54.8424 8.91894 54.7321 9.22226C54.6494 9.52558 54.3874 9.67724 53.9463 9.67724Z'
                fill='#EBBD00'
              />
              <path
                d='M37.0517 25.7284C35.2869 25.7284 34.4045 25.0114 34.4045 23.5776C34.4045 23.1915 34.4873 22.7503 34.6527 22.254C35.1491 20.7374 36.321 19.1794 38.1685 17.5801C39.8781 16.0084 41.7531 14.74 43.7936 13.7748C45.0069 13.1958 46.2064 12.9062 47.3921 12.9062C48.0263 12.9062 48.3434 13.0717 48.3434 13.4026C48.3434 13.6232 48.1504 13.9265 47.7644 14.3125C47.4059 14.6434 47.1577 14.7675 47.0199 14.6848C46.5235 14.4366 46.041 14.3125 45.5722 14.3125C45.0759 14.3125 44.5795 14.4366 44.0832 14.6848C42.3184 15.5948 40.7329 16.7529 39.3266 18.1592C37.9203 19.6206 36.9828 21.0407 36.514 22.4194C36.3761 22.8882 36.3072 23.2329 36.3072 23.4535C36.3072 24.2807 36.6519 24.6943 37.3412 24.6943C38.1409 24.6943 39.3128 24.3497 40.857 23.6603C42.4287 22.9434 44.3589 21.9093 46.6476 20.5582C46.7303 20.5306 46.7855 20.572 46.813 20.6823V20.8063C46.813 21.1097 46.7165 21.3578 46.5235 21.5508C46.1926 21.8266 45.7101 22.1437 45.0759 22.5022C44.4692 22.8606 43.7109 23.2743 42.801 23.743C40.5399 24.9011 38.8992 25.5491 37.8789 25.687C37.741 25.7146 37.6032 25.7284 37.4653 25.7284C37.3274 25.7284 37.1896 25.7284 37.0517 25.7284Z'
                fill='#EBBD00'
              />
              <path
                d='M27.9166 25.8088C27.3099 25.8088 27.0066 25.5468 27.0066 25.0229L27.0893 24.692C27.6408 23.8372 28.1923 22.8997 28.7438 21.8794C29.2953 20.8592 29.8744 19.7562 30.481 18.5705C30.2053 18.7635 29.9019 18.9703 29.571 19.1909C29.2677 19.4115 28.9368 19.6597 28.5784 19.9354C28.2199 20.2112 27.8338 20.5007 27.4202 20.804C27.0342 21.1073 26.6068 21.4107 26.138 21.714L22.9945 23.7821C22.057 24.3887 21.2573 24.8299 20.5956 25.1056C19.9338 25.3814 19.4099 25.5192 19.0238 25.5192C18.5275 25.5192 18.2793 25.1056 18.2793 24.2784C18.2793 23.589 18.5964 22.7204 19.2306 21.6726C19.4512 21.2866 19.6856 20.9143 19.9338 20.5558C20.1819 20.1698 20.4301 19.7975 20.6783 19.4391C20.9264 19.0806 21.1884 18.667 21.4641 18.1982C21.7675 17.7295 22.0846 17.2193 22.4155 16.6678C22.443 16.5575 22.4706 16.4472 22.4982 16.3369C22.5258 16.2267 22.5533 16.1026 22.5809 15.9647C22.6085 15.7441 22.6912 15.4408 22.8291 15.0547C22.8842 14.9169 23.2427 14.7514 23.9045 14.5584C24.2905 14.4205 24.649 14.2964 24.9799 14.1861C25.3108 14.0483 25.5865 13.9242 25.8071 13.8139C26.0001 13.7036 26.1656 13.6484 26.3035 13.6484C26.6068 13.6484 26.7584 13.7863 26.7584 14.0621C26.7584 14.0896 26.7309 14.1861 26.6757 14.3516C25.9312 15.234 25.1867 16.1301 24.4422 17.0401C23.6977 17.9501 22.9532 18.8876 22.2087 19.8527C20.8851 21.5347 20.2233 22.7618 20.2233 23.5339C20.2233 23.7545 20.3336 23.8648 20.5542 23.8648C20.9678 23.8648 21.864 23.4236 23.2427 22.5412C23.8218 22.1552 24.4008 21.7691 24.9799 21.3831C25.559 20.997 26.1242 20.611 26.6757 20.2249C27.9993 19.3426 29.2126 18.4602 30.3156 17.5778C31.4461 16.6954 32.4664 15.8268 33.3763 14.972C33.6796 14.7514 33.9554 14.6411 34.2036 14.6411C34.5896 14.6411 34.7826 14.7652 34.7826 15.0134C34.7826 15.1512 34.7275 15.2753 34.6172 15.3856C33.983 16.1577 33.4315 16.8609 32.9627 17.4951C32.5215 18.1017 32.163 18.667 31.8873 19.1909L29.7365 23.4925C30.4534 23.1892 31.3358 22.8307 32.3836 22.4171C33.4315 21.9759 34.6723 21.4796 36.1062 20.9281C36.1889 20.9005 36.2579 20.8867 36.313 20.8867C36.3957 20.8592 36.4509 20.8454 36.4784 20.8454C36.699 20.8454 36.8093 20.9281 36.8093 21.0935C36.8093 21.3141 36.6025 21.4934 36.1889 21.6312C35.0859 21.9346 34.0243 22.3482 33.0041 22.8721C32.5353 23.1203 32.0803 23.3684 31.6391 23.6166C31.1979 23.8648 30.743 24.1267 30.2742 24.4025C30.2466 24.4301 30.2053 24.4576 30.1501 24.4852C30.095 24.5128 30.0122 24.5541 29.9019 24.6093C29.7916 24.6644 29.6676 24.7472 29.5297 24.8575C29.4194 24.9678 29.2677 25.0918 29.0747 25.2297C28.5232 25.6158 28.1372 25.8088 27.9166 25.8088Z'
                fill='#EBBD00'
              />
              <path
                d='M30.6077 32.4707C25.6718 32.4707 20.7911 30.8852 15.9656 27.7141L10.175 23.9088C8.71353 25.2876 7.18315 25.9769 5.58383 25.9769C4.01209 25.9769 2.67472 25.2186 1.57174 23.702C0.523915 22.3233 0 20.9584 0 19.6072C0 18.1734 0.579064 17.4564 1.73719 17.4564C2.86774 17.4564 5.73549 19.0144 10.3404 22.1303C11.1952 21.1652 12.1466 19.7313 13.1944 17.8287C16.007 12.8101 18.4887 9.04621 20.6395 6.53693C23.3969 3.28314 26.0027 1.65625 28.4569 1.65625C29.8631 1.65625 31.0902 2.38697 32.138 3.84842C32.5792 4.48263 32.9239 5.13063 33.1721 5.79242C33.4478 6.42663 33.5857 7.08842 33.5857 7.77778V7.94323C33.5857 8.1914 33.5306 8.31548 33.4203 8.31548C33.1997 8.31548 33.0618 8.03974 33.0066 7.48825C32.9515 6.49557 32.4276 5.57182 31.4349 4.71702C30.3871 3.83463 29.2565 3.39344 28.0432 3.39344C25.8924 3.39344 23.2315 5.35123 20.0604 9.2668C18.8747 10.7007 17.7442 12.2311 16.6688 13.858C15.6209 15.4573 14.6145 17.1531 13.6494 18.9454C12.767 20.5723 11.9673 21.827 11.2504 22.7094L16.8756 26.4319C19.1091 27.9209 21.3702 29.0239 23.6589 29.7408C25.9752 30.4854 28.2914 30.8576 30.6077 30.8576C32.1518 30.8576 33.4478 30.5819 34.4957 30.0304C35.6814 29.3686 36.2742 28.4311 36.2742 27.2178C36.2742 26.4181 36.4397 26.0183 36.7706 26.0183C36.8533 26.0183 36.8946 26.1424 36.8946 26.3906C36.8946 28.045 36.288 29.4789 35.0747 30.6922C33.889 31.8779 32.4 32.4707 30.6077 32.4707ZM5.58383 24.8188C6.85226 24.8188 8.05175 24.3087 9.1823 23.2884C5.59762 20.9446 3.30894 19.7727 2.31626 19.7727C1.57174 19.7727 1.19949 20.2139 1.19949 21.0963C1.19949 21.9786 1.66826 22.8472 2.60579 23.702C3.48817 24.4465 4.48085 24.8188 5.58383 24.8188Z'
                fill='#EBBD00'
              />
            </svg>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center gap-14 bg-europe py-14'>
        <h2 className='font-title text-desktop-h-2xl text-basics-white'>
          {t('values.title')}
        </h2>
        <div className='grid grid-cols-4 gap-6'>
          {Object.entries(values).map(([value, icon]) => (
            <div
              key={value}
              className='flex h-[200px] w-[200px] flex-col items-center justify-center gap-2.5 rounded-full border border-dashed border-basics-white'
            >
              <span className='font-title text-desktop-h-md font-bold text-basics-white'>
                {t(`values.${value}`)}
              </span>
              <div className='text-gold'>{icon}</div>
            </div>
          ))}
        </div>
        <div className='flex items-center justify-center py-20'>
          <h3 className='flex w-[850px] items-center text-center font-title text-desktop-h-lg text-basics-white'>
            <span className='text-desktop-h-4xl text-gold-dark'>&ldquo;</span>
            <span className='w-[706px] capitalize'>{t.rich('quote')}</span>
            <span className='text-desktop-h-4xl text-gold-dark'>&rdquo;</span>
          </h3>
        </div>
      </div>
      <Partners />
      <div className='flex items-center justify-center gap-12 px-12 py-24'>
        <div className='flex flex-col items-end gap-8'>
          <div
            className='flex h-[346px] w-[236px] flex-col'
            style={{ backgroundImage: `url(${partner_1_bg.src})` }}
          />
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='2'
          height='342'
          viewBox='0 0 2 342'
          fill='none'
        >
          <path d='M1 0.234375L1.00002 528.234' stroke='#45586A' />
        </svg>
        <Image
          src={my_abroad_ally.src}
          alt='my_abroad_ally'
          width='200'
          height='200'
        />
      </div>
    </div>
  );
}