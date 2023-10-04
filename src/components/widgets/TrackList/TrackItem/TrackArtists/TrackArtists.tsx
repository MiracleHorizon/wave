import { Fragment, memo, type MouseEvent } from 'react'

import type { PlayerTrack } from '@interfaces/PlayerTrack.ts'
import styles from './TrackArtists.module.css'

function TrackArtists({ artists }: Pick<PlayerTrack, 'artists'>) {
  function handleArtistClick(ev: MouseEvent) {
    ev.stopPropagation()
  }

  return (
    <div className={styles.root}>
      <span className='block w-full truncate text-left'>
        {artists.map((artist, artistIndex) => (
          <Fragment key={artist}>
            <a
              href='#'
              className='underline-offset-[3.5px] hover:underline'
              onClick={handleArtistClick}
            >
              {artist}
            </a>
            {artistIndex !== artists.length - 1 && ', '}
          </Fragment>
        ))}
      </span>
    </div>
  )
}

const MemoizedTrackArtists = memo(TrackArtists)

export { MemoizedTrackArtists as TrackArtists }
