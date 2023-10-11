import { useEffect } from 'react'

import { Portal } from '@components/Portal.tsx'
import { SpinnerCircle } from '@ui/spinners/SpinnerCircle.tsx'
import { useDelay } from '@root/hooks/useDelay.ts'

const mountedClassNames: string[] = [
  'overflow-hidden',
  'pointer-events-none',
  'select-none'
]

export function FullscreenLoading() {
  const showComponent = useDelay(250)

  useEffect(() => {
    document.body.classList.add(...mountedClassNames)

    return () => {
      document.body.classList.remove(...mountedClassNames)
    }
  })

  if (!showComponent) {
    return null
  }

  return (
    <Portal>
      <div className='fixed inset-0 z-100 flex h-screen w-screen items-center justify-center'>
        <div className='opacity-45 fixed inset-0 h-full w-full bg-neutral-100' />
        <SpinnerCircle className=' h-10 w-10' />
      </div>
    </Portal>
  )
}
