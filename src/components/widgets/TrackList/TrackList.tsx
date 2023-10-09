import { twMerge } from 'tailwind-merge'

import { TrackItem } from './TrackItem'
import type { Track } from '@interfaces/Track.ts'
import type { ClassNameProps } from '@interfaces/ClassNameProps.ts'

export function TrackList({ tracks, className }: Props) {
  return (
    <ul className={twMerge('w-full', className)}>
      {tracks.map((track, index) => (
        <TrackItem key={track.id} track={track} index={index} />
      ))}
    </ul>
  )
}

interface Props extends ClassNameProps {
  tracks: Track[]
}
