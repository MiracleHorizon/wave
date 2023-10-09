import { type AnimationProps, motion } from 'framer-motion'
import { twJoin } from 'tailwind-merge'

import { Portal } from '@components/Portal.tsx'
import { QueueModalHeader } from './QueueModalHeader.tsx'
import { QueueModalMain } from './QueueModalMain.tsx'

const animation: AnimationProps = {
  initial: {
    transform: 'translateY(-50%)'
  },
  exit: {
    transform: 'translateY(-100%)'
  },
  animate: {
    transform: 'translateY(0)'
  },
  transition: {
    duration: 0.25
  }
}

export function QueueModalContent() {
  return (
    <Portal>
      <motion.div
        {...animation}
        className={twJoin(
          'fixed inset-0 z-40 bg-white pb-[var(--audio-player-height)]',
          'h-screen min-h-screen w-screen overflow-x-auto'
        )}
      >
        <div
          className={twJoin(
            'relative flex min-h-[calc(100vh-40px-var(--audio-player-height))]',
            'w-full flex-col items-center justify-start pt-[40px]'
          )}
        >
          <QueueModalHeader />
          <QueueModalMain />
        </div>
      </motion.div>
    </Portal>
  )
}
