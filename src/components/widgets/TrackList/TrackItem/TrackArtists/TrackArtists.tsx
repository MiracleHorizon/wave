import { Fragment, memo, type MouseEvent } from 'react'
import { twJoin } from 'tailwind-merge'

import { ExplicitBadge } from '@components/ExplicitBadge.tsx'
import type { PlayerTrack } from '@interfaces/PlayerTrack.ts'
import styles from './TrackArtists.module.css'

function TrackArtists({ artists, explicit }: Props) {
  function handleArtistClick(ev: MouseEvent) {
    ev.stopPropagation()
  }

  return (
    <div className={styles.root}>
      <span
        className={twJoin(
          'block truncate text-left',
          explicit ? 'w-[calc(100%-18px-4px)]' : 'w-full'
        )}
      >
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
      {explicit && <ExplicitBadge className={twJoin('mx-[2px]')} />}
    </div>
  )
}

const MemoizedTrackArtists = memo(TrackArtists)

export { MemoizedTrackArtists as TrackArtists }

type Props = Pick<PlayerTrack, 'artists' | 'explicit'>
