import { useSelector } from 'react-redux'
import { twJoin, twMerge } from 'tailwind-merge'

import { IconQueue } from '@ui/icons/IconQueue.tsx'
import { selectIsQueueModalOpen, useUiActions } from '@store/slices/ui'
import type { ClassNameProps } from '@interfaces/ClassNameProps.ts'

export function QueueButton({ className }: ClassNameProps) {
  const isQueueModalOpen = useSelector(selectIsQueueModalOpen)
  const { toggleQueueModal } = useUiActions()

  const handleToggleQueueModal = () => toggleQueueModal()

  return (
    <button
      className={twMerge(
        twJoin(
          'flex h-[32px] w-[32px] items-center justify-center hover:text-gray-700',
          'transition-colors duration-75 ease-in',
          isQueueModalOpen ? 'text-gray-700' : 'text-gray-400'
        ),
        className
      )}
      onClick={handleToggleQueueModal}
    >
      <IconQueue />
    </button>
  )
}
