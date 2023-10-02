import { twJoin } from 'tailwind-merge'

import type { PlayerTrack } from '@interfaces/PlayerTrack.ts'
import styles from './TrackDuration.module.css'

const convertSecondsToMinutes = (seconds: number) => {
  const integerMinutes = Math.floor(seconds / 60)

  return {
    minutes: integerMinutes,
    seconds: Math.floor(seconds - integerMinutes * 60)
  }
}

const getTrackDuration = (duration: number): string => {
  const { minutes, seconds } = convertSecondsToMinutes(duration)
  const secondsValue = seconds > 9 ? seconds : '0' + seconds

  return `${minutes}:${secondsValue}`
}

export function TrackDuration({ duration }: Pick<PlayerTrack, 'duration'>) {
  return (
    <div
      className={twJoin(
        styles.root,
        'flex h-full items-center justify-center max-mobile:hidden'
      )}
    >
      <span className='block w-full truncate text-center text-[14px] text-gray-600'>
        {getTrackDuration(duration)}
      </span>
    </div>
  )
}
