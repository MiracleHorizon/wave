import type { PropsWithChildren } from 'react'

import { AudioPlayer } from '@components/widgets/AudioPlayer'

export function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <>
      <div className='h-screen w-screen bg-blue-100 pb-[var(--audio-player-height)]'>
        <div className='flex h-full w-full flex-col items-center justify-start px-[18px] pt-[24px]'>
          <main className='max-h-full w-full rounded-[8px] bg-white shadow'>
            {children}
          </main>
        </div>
      </div>

      <AudioPlayer />
    </>
  )
}
