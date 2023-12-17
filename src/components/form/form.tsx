import clsx from 'clsx';
import { ErrorMessage } from '@hookform/error-message';
import { FieldErrors } from 'react-hook-form';
import { typographyClasses } from '@/components/typography/typography';

export const labelStyles = typographyClasses({
  size: 'body-md',
  color: 'europe-dark',
});
export const inputStyles = clsx(
  'border-b-1 h-10 w-full border-b border-europe-light bg-transparent text-europe-light placeholder-europe-light',
  [
    'focus:border-b-2 focus:border-europe-dark focus:text-europe-dark focus:outline-none',
    'hover:border-b-2 hover:border-europe-dark hover:text-europe-dark hover:outline-none',
  ]
);

export const checkboxStyles = clsx(
  'w-5 h-5 mr-2 accent-europe-dark bg-europe-light border-europe-light outline-0',
  ['focus:ring-europe-dark  focus:outline-none']
);

export const errorHintStyles = typographyClasses({
  size: 'body-md',
  color: 'error',
});

export const ErrorField = ({
  name,
  errors,
  message,
}: {
  name: string;
  errors: FieldErrors;
  message: string;
}) => {
  return (
    <ErrorMessage
      name={name}
      errors={errors}
      render={() => <span className={errorHintStyles}>{message}</span>}
    />
  );
};
