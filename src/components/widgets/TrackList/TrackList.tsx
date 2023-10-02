import { useSelector } from 'react-redux'

import { TrackItem } from './TrackItem'
import { selectTracks } from '@store/slices/tracks'

export function TrackList() {
  const tracks = useSelector(selectTracks)

  return (
    <ul className='w-full px-[12px] py-[14px]'>
      {tracks.map((track, index) => (
        <TrackItem key={track.id} track={track} index={index} />
      ))}
    </ul>
  )
}
