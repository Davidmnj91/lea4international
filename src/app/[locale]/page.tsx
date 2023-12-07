import { useTranslations } from 'next-intl';
import hero_bg from '../../../public/hero_bg.png';
import who_we_are_bg from '../../../public/who_we_are_bg.png';
import our_beliefs_bg from '../../../public/our_beliefs_bg.png';
import { buttonTypes } from '@/components/button/button';
import clsx from 'clsx';

export default function RootLayout() {
  const t = useTranslations('home-page');

  return (
    <>
      <div
        style={{
          position: 'absolute',
          height: '100vh',
          width: '100%',
          marginTop: '-80px',
          zIndex: '-1',
          background: `#172c48`,
          backgroundImage: `url(${hero_bg.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='absolute top-0 h-full w-full bg-[#0308227F]'></div>
      </div>
      <div className='m-auto mt-[-80px] flex h-screen w-full flex-col items-center justify-center pt-[80px]'>
        <div>
          <h1 className='text-center font-title text-desktop-h-4xl text-basics-disabled'>
            {t('language')}
          </h1>
          <h1 className='text-center font-title text-desktop-h-4xl text-basics-disabled'>
            {t('education')}
          </h1>
          <h1 className='text-center font-title text-desktop-h-4xl text-basics-disabled'>
            {t('travel')}
          </h1>
        </div>
        <div className='mt-[36px]'>
          <h2 className='text-desktop-b-xl max-w-[840px] text-center font-body text-basics-white'>
            {t('slogan')}
          </h2>
        </div>
        <button
          className={clsx('mt-[60px]', buttonTypes({ intent: 'primary' }))}
        >
          {t('more-info')}
        </button>
      </div>
      <section id='who-we-are'>
        <div
          style={{
            marginTop: '84px',
            width: '100%',
            backgroundImage: `url(${who_we_are_bg.src})`,
          }}
        >
          <div className='flex w-full justify-center'>
            <div className='mt-[-28px] flex h-[550px] max-w-[416px] flex-col justify-between bg-star-light px-6 py-9'>
              <div>
                <span className='font-title text-desktop-h-sm font-bold text-gold-dark'>
                  Company Name
                </span>
                <h1 className='font-title text-desktop-h-xl text-europe-dark'>
                  {t('who-we-are.title')}
                </h1>
              </div>
              <div>
                <p
                  className='font-body text-b-lg text-europe-dark'
                  dangerouslySetInnerHTML={{
                    __html: t.raw('who-we-are.description'),
                  }}
                ></p>
                <button
                  className={clsx(
                    'mt-8',
                    buttonTypes({ intent: 'secondary-light' })
                  )}
                >
                  {t('see-more')}
                </button>
              </div>
            </div>
            <div className='flex h-[550px] max-w-[416px] flex-col justify-between bg-basics-white px-6 py-9'>
              <div>
                <span className='font-title  text-desktop-h-sm font-bold text-gold-dark'>
                  Company Name
                </span>
                <h1 className='font-title text-desktop-h-xl text-europe-dark'>
                  {t('our-focus.title')}
                </h1>
              </div>
              <p className='font-body text-b-lg text-europe-dark'>
                {t('our-focus.description')}
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: '176px',
            width: '100%',
            backgroundImage: `url(${our_beliefs_bg.src})`,
          }}
        >
          <div className='flex w-full justify-center gap-20'>
            <div className='mt-[-128px] flex  h-[478px] max-w-[490px] flex-col justify-between bg-basics-white p-6'>
              <div>
                <span className='font-title text-desktop-h-sm font-bold text-gold-dark'>
                  Company Name
                </span>
                <h1 className='font-title text-desktop-h-xl text-europe-dark'>
                  {t('our-beliefs.title')}
                </h1>
              </div>
              <p
                className='font-body text-b-lg text-europe-dark'
                dangerouslySetInnerHTML={{
                  __html: t.raw('our-beliefs.description'),
                }}
              ></p>
            </div>
            <div className='flex h-[478px] max-w-[490px] flex-col justify-between bg-basics-white p-6'>
              <div>
                <span className='font-title  text-desktop-h-sm font-bold text-gold-dark'>
                  Company Name
                </span>
                <h1 className='font-title text-desktop-h-xl text-europe-dark'>
                  {t('coming-challenges.title')}
                </h1>
              </div>
              <p
                className='fon t-body text-b-lg text-europe-dark'
                dangerouslySetInnerHTML={{
                  __html: t.raw('coming-challenges.description'),
                }}
              ></p>
            </div>
          </div>
        </div>
        <div className='flex h-[434px] items-center justify-center bg-europe py-20'>
          <h3 className='flex w-[776px] items-center text-center font-title text-desktop-h-lg text-basics-white'>
            <span className='text-desktop-h-4xl text-gold-dark'>&ldquo;</span>
            {t('help-you')}
            <span className='text-desktop-h-4xl text-gold-dark'>&rdquo;</span>
          </h3>
        </div>
      </section>
    </>
  );
}
