import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown4() {
    const [startDate, setStartDate] = useState('2017-08-18')
    const [endDate, setEndDate] = useState('2017-08-18')
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex font-semibold justify-center items-center rounded-full border border-gray-300 bg-white px-4 py-2 text-lg text-gray-700  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          Time period:
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 w-full mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none px-4 py-6">
          <div className="py-1">
            <div className="flex gap-2 py-1 flex-row">
            <Menu.Item>
              {({ active }) => (
                <p
                  href="#"
                  className={classNames(
                    active ? 'bg-purple-100 text-purple-900': 'bg-gray-100 text-center border-gray-200 text-gray-700',
                    'block py-2 text-sm rounded-md font-semibold  w-full border-2'
                  )}
                >
                  1D
                </p>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <p
                  className={classNames(
                    active ? 'bg-purple-100 text-purple-900' :'bg-gray-100 text-center border-gray-200 text-gray-700',
                    'block py-2 text-sm rounded-md font-semibold  w-full border-2'
                  )}
                >
                  5D
                </p>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <p
                  className={classNames(
                    active ? 'bg-purple-100 text-purple-900' :'bg-gray-100 text-center border-gray-200 text-gray-700',
                    'block py-2 text-sm rounded-md font-semibold  w-full border-2'
                  )}
                >
                  3M
                </p>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <p
                  className={classNames(
                    active ? 'bg-purple-100 text-purple-900' :'bg-gray-100 text-center border-gray-200 text-gray-700',
                    'block py-2 text-sm rounded-md font-semibold  w-full border-2'
                  )}
                >
                  6M
                </p>
              )}
            </Menu.Item>
            </div>
            <div className="flex gap-2 py-1 flex-row">
            <Menu.Item>
              {({ active }) => (
                <p
                  className={classNames(
                    active ? 'bg-purple-100 text-purple-900' :'bg-gray-100 text-center border-gray-200 text-gray-700',
                    'block py-2 text-sm rounded-md font-semibold  w-full border-2'
                  )}
                >
                  YTD
                </p>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <p
                  className={classNames(
                    active ? 'bg-purple-100 text-purple-900' :'bg-gray-100 text-center border-gray-200 text-gray-700',
                    'block py-2 text-sm rounded-md font-semibold  w-full border-2'
                  )}
                >
                  1Y
                </p>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <p
                  className={classNames(
                    active ? 'bg-purple-100 text-purple-900' :'bg-gray-100 text-center border-gray-200 text-gray-700',
                    'block py-2 text-sm rounded-md font-semibold  w-full border-2'
                  )}
                >
                  5Y
                </p>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <p
                  className={classNames(
                    active ? 'bg-purple-100 text-purple-900' :'bg-gray-100 text-center border-gray-200 text-gray-700',
                    'block py-2 text-sm rounded-md font-semibold  w-full border-2'
                  )}
                >
                  Max
                </p>
              )}
            </Menu.Item>
            </div>
            <div>
            <div className='mt-8 flex flex-col'>
                  <label htmlFor="start" className='mb-2'>Start date:</label>
                  <input type="date" id="start" name="data-start" value={startDate} min="2007-01-01" max="2023-12-31"
                  className='bg-gray-100 p-4 border-2 rounded-xl'
                  onChange={(e)=>{setStartDate(e.target.value)}}
                  />
                </div>
                <div className='mt-4 flex flex-col'>
                  <label htmlFor="end" className='mb-2'>End date:</label>
                  <input type="date" id="end" name="data-end" value={endDate} min="2007-01-01" max="2023-12-31"
                  className='bg-gray-100 p-4 border-2 rounded-xl'
                  onChange={(e)=>{setEndDate(e.target.value)}}
                  />
                </div>
            </div>
            <div className='flex flex-row gap-4 mt-6'>
            <Menu.Item>
              <button className='bg-purple-800 text-white font-semibold p-2 rounded-full w-full'>Done</button>
            </Menu.Item>
            <Menu.Item>
              <button className='border-2 border-purple-800 text-purple-800 font-semibold p-2 rounded-full w-full'>Cancel</button>
              </Menu.Item>
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}