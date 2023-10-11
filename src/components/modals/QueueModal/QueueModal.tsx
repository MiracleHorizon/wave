import { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { useEventListener } from 'usehooks-ts'
import { AnimatePresence } from 'framer-motion'

import { selectIsQueueModalOpen, useUiActions } from '@store/slices/ui'
import { KeyboardCode } from '@enums/KeyboardCode.ts'

const QueueModalContent = lazy(() =>
  import('./QueueModalContent.tsx').then(module => ({
    default: module.QueueModalContent
  }))
)

export function QueueModal() {
  const isOpen = useSelector(selectIsQueueModalOpen)
  const { closeQueueModal } = useUiActions()

  useEventListener('keydown', (ev: KeyboardEvent) => {
    if (ev.code === KeyboardCode.ESCAPE) {
      closeQueueModal()
    }
  })

  return (
    <Suspense>
      <AnimatePresence initial={false}>
        {isOpen && <QueueModalContent />}
      </AnimatePresence>
    </Suspense>
  )
}
