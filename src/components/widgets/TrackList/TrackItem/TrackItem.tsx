import { memo } from 'react'
import { twJoin } from 'tailwind-merge'

import { TrackTitle } from './TrackTitle'
import { TrackControl } from './TrackControl'
import { TrackArtists } from './TrackArtists'
import { TrackDuration } from './TrackDuration'
import { useTypedSelector } from '@store/hooks/useTypedSelector.ts'
import {
  selectIsTrackCurrent,
  selectIsTrackPlaying,
  useQueueActions
} from '@store/slices/queue'
import type { Track } from '@interfaces/Track.ts'

function TrackItem({ track, index }: Props) {
  const isCurrentTrack = useTypedSelector(state =>
    selectIsTrackCurrent(state, track.id)
  )
  const isPlaying = useTypedSelector(state =>
    selectIsTrackPlaying(state, track.id)
  )
  const {
    resetPausedTime,
    setCurrentTrack,
    playCurrentTrack,
    pauseCurrentTrack
  } = useQueueActions()

  function handleSelectTrack() {
    resetPausedTime()
    setCurrentTrack(track)
    playCurrentTrack()
  }

  function handlePlayToggle() {
    if (isPlaying) {
      pauseCurrentTrack()
    } else {
      playCurrentTrack()
    }
  }

  return (
    <li
      className={twJoin(
        'max-sm:pr-[4px] group flex h-[44px] w-full cursor-pointer items-center',
        'border-b-[1px] border-solid border-transparent text-[15px] hover:border-gray-300'
      )}
      onClick={isCurrentTrack ? handlePlayToggle : handleSelectTrack}
    >
      <TrackControl
        order={index + 1}
        isPlaying={isPlaying}
        isCurrentTrack={isCurrentTrack}
      />
      <TrackTitle title={track.title} />
      <TrackArtists artists={track.artists} explicit={track.explicit} />
      <TrackDuration duration={track.duration} />
    </li>
  )
}

const MemoizedTrackItem = memo(TrackItem)

export { MemoizedTrackItem as TrackItem }

interface Props {
  track: Track
  index: number
}
