import { lazy, Suspense, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { AnimatePresence } from 'framer-motion'

import { useUiActions, selectIsQueueModalOpen } from '@store/slices/ui'

const QueueModalContent = lazy(() =>
  import('./QueueModalContent.tsx').then(module => ({
    default: module.QueueModalContent
  }))
)

export function QueueModal() {
  const isOpen = useSelector(selectIsQueueModalOpen)
  const { closeQueueModal } = useUiActions()

  useEffect(() => {
    const handleKeydown = (ev: KeyboardEvent) => {
      if (ev.code === 'Escape') {
        closeQueueModal()
      }
    }

    window.addEventListener('keydown', handleKeydown)

    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [closeQueueModal])

  return (
    <Suspense>
      <AnimatePresence initial={false}>
        {isOpen && <QueueModalContent />}
      </AnimatePresence>
    </Suspense>
  )
}
