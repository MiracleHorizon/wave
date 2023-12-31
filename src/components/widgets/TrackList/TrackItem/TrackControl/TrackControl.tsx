import { memo } from 'react'
import { twJoin } from 'tailwind-merge'

import { IconPlay } from '@ui/icons/IconPlay.tsx'
import { IconPause } from '@ui/icons/IconPause.tsx'
import type { PlayerTrack } from '@interfaces/PlayerTrack.ts'
import styles from './TrackControl.module.css'

const iconClassName: string = 'w-[26px] h-[26px]'

function TrackControl({ order, isPlaying, isCurrentTrack }: Props) {
  return (
    <div className={styles.root}>
      {isCurrentTrack ? (
        <>
          <span className='hidden group-hover:inline-block'>
            {isPlaying ? (
              <IconPause className={iconClassName} />
            ) : (
              <IconPlay className={iconClassName} />
            )}
          </span>
          {isPlaying ? (
            <div
              className={twJoin(
                'h-[10px] w-[10px] animate-pulse rounded-full',
                'bg-yellow-300 group-hover:hidden'
              )}
            />
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
