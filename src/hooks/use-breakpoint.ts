import { useMediaQuery } from 'react-responsive';
import resolveConfig from 'tailwindcss/resolveConfig';
import { Config } from 'tailwindcss/types/config';

import tailwindConfig from '@/../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig as unknown as Config);

const breakpoints = {
  mobile: '375px',
  tablet: '834px',
  desktop: '1440px',
};

export function useBreakpoint<K extends keyof typeof breakpoints>(
  breakpointKey: K
) {
  const breakpointValue = breakpoints[breakpointKey];
  const bool = useMediaQuery({
    query: `(max-width: ${breakpointValue})`,
  });
  const capitalizedKey =
    breakpointKey[0].toUpperCase() + breakpointKey.substring(1);

  type KeyAbove = `isAbove${Capitalize<K>}`;
  type KeyBelow = `isBelow${Capitalize<K>}`;

  return {
    [breakpointKey]: Number(String(breakpointValue).replace(/[^0-9]/g, '')),
    [`isAbove${capitalizedKey}`]: !bool,
    [`isBelow${capitalizedKey}`]: bool,
  } as Record<K, number> & Record<KeyAbove | KeyBelow, boolean>;
}
