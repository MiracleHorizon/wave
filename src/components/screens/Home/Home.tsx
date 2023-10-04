import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { TrackList } from '@components/widgets/TrackList'
import { selectIsTracksEmpty, useTrackActions } from '@store/slices/tracks'
import { tracks } from '@assets/data.ts'

export function Home() {
  const isTracksEmpty = useSelector(selectIsTracksEmpty)
  const { setTracks } = useTrackActions()

  useEffect(() => {
    if (!isTracksEmpty) return
    setTracks(tracks)
  }, [isTracksEmpty, setTracks])

  return (
    <div className='h-full w-full'>
      <TrackList />
    </div>
  )
}
