import clsx from 'clsx';

export const labelStyles = clsx('font-body text-b-md text-europe-dark');
export const inputStyles = clsx(
  'border-b-1 h-10 w-full border-b border-europe-light bg-transparent text-europe-light placeholder-europe-light',
  [
    'focus:border-b-2 focus:border-europe-dark focus:text-europe-dark focus:outline-none',
    'hover:border-b-2 hover:border-europe-dark hover:text-europe-dark hover:outline-none',
  ]
);

export const checkboxStyles = clsx(
  'w-5 h-5 mr-2 accent-europe-dark bg-europe-light border-europe-light outline-0',
  ['focus:ring-europe-dark focus:ring-1']
);

export const errorHintStyles = clsx(
  'font-body font-normal text-b-sm text-status-error'
);
