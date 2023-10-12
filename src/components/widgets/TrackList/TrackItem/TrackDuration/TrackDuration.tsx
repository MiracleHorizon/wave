import { memo } from 'react'

import { formatTimeValue } from '@helpers/formatTimeValue.ts'
import type { PlayerTrack } from '@interfaces/PlayerTrack.ts'
import styles from './TrackDuration.module.css'

function TrackDuration({ duration }: Pick<PlayerTrack, 'duration'>) {
  return (
    <div className={styles.root}>
      <span className='block w-full truncate text-center text-[14px] text-gray-600'>
        {formatTimeValue(duration)}
      </span>
    </div>
  )
}

const MemoizedTrackDuration = memo(TrackDuration)

export { MemoizedTrackDuration as TrackDuration }
