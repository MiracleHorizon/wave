import { memo } from 'react'
import { twJoin } from 'tailwind-merge'
import { useDispatch } from 'react-redux'

import { TrackTitle } from './TrackTitle'
import { TrackControl } from './TrackControl'
import { TrackArtists } from './TrackArtists'
import { TrackDuration } from './TrackDuration'
import { useTypedSelector } from '@hooks/useTypedSelector.ts'
import {
  pauseCurrentTrack,
  playCurrentTrack,
  setCurrentTrack,
  resetPausedTime,
  selectIsTrackCurrent
} from '@store/slices/tracks'
import type { PlayerTrack } from '@interfaces/PlayerTrack.ts'

function TrackItem({ track, index }: Props) {
  const isCurrentTrack = useTypedSelector(state =>
    selectIsTrackCurrent(state, track.id)
  )

  const dispatch = useDispatch()

  function selectTrack() {
    dispatch(resetPausedTime())
    dispatch(setCurrentTrack(track))
    dispatch(playCurrentTrack())
  }

  function toggleTrackPlay() {
    dispatch((track.isPlaying ? pauseCurrentTrack : playCurrentTrack)())
  }

  return (
    <li
      className={twJoin(
        'max-sm:pr-[4px] group flex h-[44px] w-full cursor-pointer items-center',
        'border-b-[1px] border-solid border-transparent text-[15px] hover:border-gray-300'
      )}
      onClick={isCurrentTrack ? toggleTrackPlay : selectTrack}
    >
      <TrackControl
        order={index + 1}
        isPlaying={track.isPlaying}
        isCurrentTrack={isCurrentTrack}
      />
      <TrackTitle title={track.title} />
      <TrackArtists artists={track.artists} />
      <TrackDuration duration={track.duration} />
    </li>
  )
}

const MemoizedTrackItem = memo(TrackItem)

export { MemoizedTrackItem as TrackItem }

interface Props {
  track: PlayerTrack
  index: number
}
