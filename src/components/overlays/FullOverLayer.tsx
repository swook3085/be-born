import { Fragment, ReactNode } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

interface ISlideOverLayerProps {
  show?: boolean
  title?: string
  onClose: () => void
  children: ReactNode
}

const FullOverLayer = ({
  title,
  show = false,
  onClose,
  children,
}: ISlideOverLayerProps) => {
  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog as='div' className='relative z-[200]' onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter='transition-opacity ease-linear duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity ease-linear duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 z-[200] flex'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <Dialog.Panel className='relative ml-auto flex h-full w-full md:max-w-sm flex-col overflow-y-auto bg-white shadow-xl'>
              <div className='flex items-center justify-between px-4 py-1.5 z-50'>
                <h2 className='text-lg font-medium text-gray-900'>{title}</h2>
                <button
                  type='button'
                  className='-mr-2 flex h-10 w-10 items-center justify-center rounded-md p-2 text-gray-400'
                  onClick={onClose}
                >
                  <span className='sr-only'>Close menu</span>
                  <XIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>
              <div className='border-t border-gray-200 flex items-center justify-center h-full'>
                {children}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default FullOverLayer
