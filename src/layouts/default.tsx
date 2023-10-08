import type { PropsWithChildren } from 'react'

import { AudioPlayer } from '@components/widgets/AudioPlayer'

export function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <>
      <div className='h-[calc(100vh-var(--audio-player-height))] w-screen'>
        <div className='flex h-full w-full flex-col items-center justify-start bg-blue-100 px-[18px] pt-[24px]'>
          <main className='mb-auto max-h-full w-full rounded-[8px] bg-white shadow'>
            {children}
          </main>
        </div>
      </div>

      <AudioPlayer />
    </>
  )
}
