import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown3() {
    const [activeOption, setActiveOption] = useState(0)
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex font-semibold justify-center items-center rounded-full border border-gray-300 bg-white px-4 py-2 text-lg text-gray-700  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          Frequency
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
        <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none px-4 py-2">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <p
                  href="#"
                  className={classNames(
                    activeOption===0 ? 'bg-purple-100 text-purple-900': 'text-gray-700' ,
                    'block px-4 py-4 text-sm rounded-md font-semibold'
                  )}
                  onClick={()=>{setActiveOption(0)}}
                >
                  Daily
                </p>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <p
                  className={classNames(
                    activeOption===1 ? 'bg-purple-100 text-purple-900' : 'text-gray-700',
                    'block px-4 py-4 text-sm rounded-md font-semibold'
                  )}
                  onClick={()=>{setActiveOption(1)}}
                >
                  Weekly
                </p>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <p
                  className={classNames(
                    activeOption===2 ? 'bg-purple-100 text-purple-900' : 'text-gray-700',
                    'block px-4 py-4 text-sm rounded-md font-semibold'
                  )}
                  onClick={()=>{setActiveOption(2)}}
                >
                  Monthly
                </p>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}