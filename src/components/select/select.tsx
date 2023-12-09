import { Listbox, Transition } from '@headlessui/react';
import { ArrowDown, ArrowRight, Check } from '@phosphor-icons/react';
import { Fragment } from 'react';

type SelectOption = {
  id: string;
  value: string;
};

type SelectProps<T extends SelectOption> = {
  name: string;
  values: T[];
  selected: T;
  onChange: () => void;
};

export function Select<T extends SelectOption>({
  name,
  values,
  selected,
  onChange,
}: SelectProps<T>) {
  return (
    <Listbox value={selected} onChange={onChange}>
      {({ open }) => (
        <div className='relative mt-1'>
          <Listbox.Button className='relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
            <span className='block truncate'>{selected.value}</span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
              {open ? <ArrowDown /> : <ArrowRight />}
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm'>
              {values.map(({ id, value }) => (
                <Listbox.Option
                  key={id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={value}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {value}
                      </span>
                      {selected ? (
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
                          <Check />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  );
}
