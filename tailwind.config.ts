import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        mobile: '375px',
        tablet: '834px',
        desktop: '1440px',
      },
      colors: {
        europe: {
          light: '#45586A',
          DEFAULT: '#2E3B48 ',
          dark: '#030822',
        },
        gold: {
          light: '#FFCD004C',
          DEFAULT: '#FFCD00',
          dark: '#EBBD00',
        },
        star: {
          light: '#FCFDD6',
          DEFAULT: '#FCFF7D',
          dark: '#FBFF49',
        },
        basics: {
          white: '#FCFCFC',
          gray: '#F3F5F6',
          disabled: '#b5b5b566',
        },
        status: {
          success: '#8BC34A',
          warning: '#FBC16A',
          error: '#D65442',
        },
        overlay: '#0308227F',
      },
      fontFamily: {
        title: ['var(--font-cormorant)'],
        body: ['var(--font-ubuntu)'],
      },
      fontSize: {
        // Desktop heading font sizes
        'desktop-h-4xl': ['136px', '144px'],
        'desktop-h-3xl': ['100px', '108px'],
        'desktop-h-2xl': ['72px', '80px'],
        'desktop-h-xl': ['64px', '72px'],
        'desktop-h-lg': ['36px', '44px'],
        'desktop-h-md': ['32px', '40px'],
        'desktop-h-sm': ['16px', '24px'],
        // Tablet & mobile heading font sizes
        'mobile-h-4xl': ['72px', '80px'],
        'mobile-h-3xl': ['54px', '62px'],
        'mobile-h-2xl': ['48px', '56px'],
        'mobile-h-xl': ['32px', '40px'],
        'mobile-h-lg': ['24px', '32px'],
        'mobile-h-md': ['18px', '26px'],
        'mobile-h-sm': ['16px', '16px'],
        // Body font sizes
        'b-xxl': ['34px', '42px'],
        'b-xl': ['24px', '32px'],
        'b-lg': ['20px', '28px'],
        'b-md': ['16px', '24px'],
        'b-sm': ['14px', '20px'],
        'b-xs': ['12px', '16px'],
      },
    },
  },
  plugins: [],
};
export default config;
