import { useTranslations } from 'next-intl';
import hero_bg from '../../../public/hero_bg.png';
import who_we_are_bg from '../../../public/who_we_are_bg.png';
import our_beliefs_bg from '../../../public/our_beliefs_bg.png';
import our_commitment_bg from '../../../public/our_commitment_bg.png';
import praga_bg from '../../../public/praga_bg.png';
import madrid_bg from '../../../public/madrid_bg.png';
import malaga_bg from '../../../public/malaga_bg.png';
import { buttonTypes } from '@/components/button/button';
import clsx from 'clsx';
import { CommitmentsCarousel } from '@/components/commitments-carousel/commitments-carousel';
import { DestinationCard } from '@/components/destination-card/destination-card';
import { FaqList } from '@/components/faq-list/faq-list';

const FaqsHome: string[] = [
  'what-is-erasmus-plus',
  'how-to-erasmus-plus',
  'why-erasmus-plus',
  'languages-courses-offer',
  'what-included',
];

export default function RootLayout() {
  const t = useTranslations('home-page');

  return (
    <>
      <div
        style={{
          position: 'absolute',
          height: '100vh',
          width: '100%',
          zIndex: '-1',
          backgroundImage: `url(${hero_bg.src}), linear-gradient(#0308227F,#0308227F)`,
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className='m-auto mt-[-80px] flex h-screen w-full flex-col items-center justify-center'>
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
          {t('request-more-info')}
        </button>
      </div>
      <section id='who-we-are'>
        <div
          style={{
            marginTop: '56px',
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
              <p
                className='font-body text-b-lg text-europe-dark'
                dangerouslySetInnerHTML={{
                  __html: t.raw('our-focus.description'),
                }}
              ></p>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: '176px',
            width: '100%',
          }}
        >
          <div
            className='bg-europe'
            style={{
              width: '100%',
              backgroundImage: `url(${our_beliefs_bg.src})`,
              backgroundRepeat: 'no-repeat',
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
              <div className='flex h-[542px] max-w-[490px] flex-col justify-between bg-basics-white p-6'>
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
            <div className='relative flex items-center justify-center py-20'>
              <h3 className='flex w-[816px] items-center text-center font-title text-desktop-h-lg text-basics-white'>
                <span className='text-desktop-h-4xl text-gold-dark'>
                  &ldquo;
                </span>
                {t('help-you')}
                <span className='text-desktop-h-4xl text-gold-dark'>
                  &rdquo;
                </span>
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section id='our-commitment'>
        <div className='mx-12 my-14'>
          <div className='flex justify-between'>
            <CommitmentsCarousel />
            <div>
              <h3 className='border-b-2 border-b-europe-light font-title text-desktop-h-2xl'>
                {t('our-commitment.title')}
              </h3>
            </div>
          </div>
        </div>
        <div
          style={{
            width: '100%',
            height: '496px',
            backgroundImage: `url(${our_commitment_bg.src})`,
            backgroundRepeat: 'no-repeat',
            marginTop: '-280px',
          }}
        ></div>
      </section>
      <section id='top-destinations'>
        <div className='mt-14 flex h-[410px] flex-col items-center justify-start bg-europe pt-14'>
          <h3 className='font-title text-desktop-h-2xl text-basics-white'>
            {t('top-destinations.title')}
          </h3>
          <div className='mt-6 flex items-center justify-center'>
            <span className='h-1 w-[250px] border-b border-b-europe-light' />
            <button
              className={clsx(
                'mx-4',
                buttonTypes({ intent: 'secondary-dark' })
              )}
            >
              {t('top-destinations.see-all')}
            </button>
            <span className='h-1 w-[250px] border-b border-b-europe-light' />
          </div>
        </div>
        <div className='mt mt-[-152px] flex justify-center gap-4'>
          <DestinationCard
            imgSrc={praga_bg.src}
            city='prague'
            country='czech'
          />
          <DestinationCard
            imgSrc={madrid_bg.src}
            city='madrid'
            country='spain'
          />
          <DestinationCard
            imgSrc={malaga_bg.src}
            city='malaga'
            country='spain'
          />
        </div>
      </section>
      <section id='faq'>
        <div className='mt-14 flex flex-col items-center justify-center pt-16'>
          <h3 className='font-title text-desktop-h-2xl text-europe-dark'>
            {t('faq.title')}
          </h3>
          <div className='mt-14 flex items-center justify-center'>
            <span className='h-1 w-[250px] border-b border-b-europe' />
            <button
              className={clsx(
                'mx-4',
                buttonTypes({ intent: 'secondary-light' })
              )}
            >
              {t('faq.see-more')}
            </button>
            <span className='h-1 w-[250px] border-b border-b-europe' />
          </div>
          <div className='my-14 w-full'>
            {FaqsHome.map((faq) => (
              <div
                key={faq}
                className='border-b-2 border-t-0 border-basics-disabled px-12 py-6 first-of-type:border-t-2'
              >
                <FaqList faqKey={faq} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id='more-info'>
        <div className='my-14 flex items-center justify-center'>
          <div className='m-auto flex flex-col gap-9 bg-europe p-14'>
            <h3 className='font-title text-desktop-h-2xl text-basics-white'>
              {t.rich('more-info.title')}
            </h3>
            <div>
              <p className='font-body text-b-lg font-light text-basics-white'>
                {t.rich('more-info.questions')}
              </p>
            </div>
            <div className='flex w-full justify-between gap-[30px]'>
              {['more-info', 'request-quote', 'host-family'].map((title) => (
                <button
                  key={title}
                  className='group flex h-[158px] w-[310px] flex-col justify-between border border-basics-white p-2.5 hover:border-star-dark'
                >
                  <h4 className='text-left font-title text-desktop-h-lg font-bold text-basics-white'>
                    {t.rich(`more-info.${title}`)}
                  </h4>
                  <span className='self-end font-title text-desktop-h-sm text-basics-white group-hover:text-star-dark'>
                    {t('more-info.contact-us')}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id='our-partners'>
        <div className='my-14 flex flex-col items-center justify-center gap-14 pt-14'>
          <h2 className='font-title text-desktop-h-2xl text-europe-dark'>
            {t('our-partners.title')}
          </h2>
          <div className='flex justify-center gap-14'>
            {Array.from(Array(5).keys()).map((index) => (
              <span key={index} className='font-body text-b-xl text-europe'>
                {t('our-partners.partners.name')}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
