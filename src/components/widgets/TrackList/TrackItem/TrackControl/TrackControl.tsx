import { memo } from 'react'
import { twJoin } from 'tailwind-merge'

import { IconPlay } from '@shared/ui/icons/IconPlay.tsx'
import { IconPause } from '@shared/ui/icons/IconPause.tsx'
import type { PlayerTrack } from '@interfaces/PlayerTrack.ts'
import styles from './TrackControl.module.css'

function TrackControl({ order, isPlaying, isCurrentTrack }: Props) {
  return (
    <div
      className={twJoin(
        styles.root,
        'flex h-full items-center justify-center text-gray-600'
      )}
    >
      {isCurrentTrack ? (
        <>
          <span className='hidden group-hover:inline-block'>
            {isPlaying ? <IconPause /> : <IconPlay />}
          </span>
          {isPlaying ? (
            <div className='h-[10px] w-[10px] animate-pulse rounded-full bg-yellow-300 group-hover:hidden' />
          ) : (
            <span className='inline-block group-hover:hidden'>{order}</span>
          )}
        </>
      ) : (
        <span>{order}</span>
      )}
    </div>
  )
}

const MemoizedTrackControl = memo(TrackControl)

export { MemoizedTrackControl as TrackControl }

interface Props extends Pick<PlayerTrack, 'isPlaying'> {
  order: number
  isCurrentTrack: boolean
}
