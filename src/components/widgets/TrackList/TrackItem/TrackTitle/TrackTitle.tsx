import { memo } from 'react'

import type { PlayerTrack } from '@interfaces/PlayerTrack.ts'
import styles from './TrackTitle.module.css'

function TrackTitle({ title }: Pick<PlayerTrack, 'title'>) {
  return (
    <div className={styles.root}>
      <span className='block w-full truncate'>{title}</span>
    </div>
  )
}

const MemoizedTrackTitle = memo(TrackTitle)

export { MemoizedTrackTitle as TrackTitle }
