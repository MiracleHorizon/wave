import { twJoin } from 'tailwind-merge'

import { IconXMark } from '@ui/icons/IconXMark.tsx'
import { useUiActions } from '@store/slices/ui'

export function QueueModalHeader() {
  const { closeQueueModal } = useUiActions()

  const handleClose = () => closeQueueModal()

  return (
    <header className='fixed left-0 top-0 flex h-[40px] w-full items-center border-b-1 border-b-gray-300 bg-white'>
      <button
        className={twJoin(
          'ml-auto flex h-[40px] w-[40px] items-center justify-center',
          'text-gray-400 transition-colors duration-75 ease-in hover:text-gray-700'
        )}
        onClick={handleClose}
      >
        <IconXMark className='h-[28px] w-[28px]' />
      </button>
    </header>
  )
}
