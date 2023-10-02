import type { PlayerTrack } from '@interfaces/PlayerTrack.ts'
import styles from './TrackTitle.module.css'

export function TrackTitle({ title }: Pick<PlayerTrack, 'title'>) {
  return (
    <div className={styles.root}>
      <span className='block w-full truncate'>{title}</span>
    </div>
  )
}
