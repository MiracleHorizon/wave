import type { PropsWithChildren } from 'react'

import { AudioPlayer } from '@components/widgets/AudioPlayer'

export function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <>
      <div className='min-h-screen w-screen bg-blue-100 pb-[calc(var(--audio-player-height)+24px)]'>
        <div className='flex w-full flex-col items-center justify-start px-[18px] pt-[24px]'>
          <main className='w-full rounded-[8px] bg-white shadow'>
            {children}
          </main>
        </div>
      </div>

      <AudioPlayer />
    </>
  )
}
