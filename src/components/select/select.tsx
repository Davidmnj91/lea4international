'use client';

import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CaretDown, CaretUp, CheckCircle } from '@phosphor-icons/react';
import { inputStyles, labelStyles } from '@/components/form/form';
import clsx from 'clsx';

type ComboboxProps = {
  value: string | number;
  onChange: any;
  onBlur: any;
  label: string;
  placeholder: string;
  options: {
    value: string | number;
    label: string;
    id: number | string;
  }[];
};
export default function ComboBoxWrapper({
  value = '',
  placeholder,
  onChange,
  onBlur,
  label,
  options,
}: ComboboxProps) {
  const [query, setQuery] = useState('');

  const filteredOptions =
    query === ''
      ? options
      : options.filter((option) => {
          return option.label.toLowerCase().includes(query.toLowerCase());
        });

  const getNameFromValue = (value: string | number) => {
    const option = options.find((option) => option.value === value);
    return option ? option.label : '';
  };

  return (
    <>
      <Combobox value={value} onChange={onChange}>
        {({ open }) => (
          <>
            <Combobox.Label className={labelStyles}>{label}</Combobox.Label>
            <div className='relative mt-3'>
              <div
                className={clsx(
                  inputStyles,
                  'relative w-full cursor-default overflow-hidden bg-transparent text-left focus:outline-none'
                )}
              >
                <Combobox.Button className='inset-y-0 right-0 flex w-full items-center pr-2'>
                  <Combobox.Input
                    className='w-full bg-transparent text-europe-light placeholder-europe-light hover:outline-none focus:outline-none'
                    onChange={(event) => setQuery(event.target.value)}
                    displayValue={(optionValue: string | number) =>
                      getNameFromValue(optionValue)
                    }
                    placeholder={placeholder}
                    onBlur={onBlur}
                  />
                  {open ? <CaretUp size={24} /> : <CaretDown size={24} />}
                </Combobox.Button>
              </div>
              <Transition
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
                afterLeave={() => setQuery('')}
              >
                <Combobox.Options className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-basics-white py-1 text-base shadow-lg ring-1 ring-europe-dark ring-opacity-5 focus:outline-none sm:text-b-sm'>
                  {filteredOptions.map((option) => (
                    <Combobox.Option
                      key={option.id}
                      className={({ active }) =>
                        `relative mx-1 cursor-default rounded-md py-2 pl-10 pr-4 ${
                          active && 'bg-basics-gray'
                        }`
                      }
                      value={option.value}
                    >
                      {({ selected, active }) => (
                        <>
                          {selected && (
                            <span className='absolute inset-y-0 left-0 flex items-center px-2 text-europe-dark'>
                              <CheckCircle size={24} />
                            </span>
                          )}
                          <span className='block truncate'>{option.label}</span>
                        </>
                      )}
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              </Transition>
            </div>
          </>
        )}
      </Combobox>
    </>
  );
}
