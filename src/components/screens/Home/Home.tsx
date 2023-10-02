import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { TrackList } from '@components/widgets/TrackList'
import { selectIsTracksEmpty, setTracks } from '@store/slices/tracks'
import { tracks } from '@assets/data.ts'

export function Home() {
  const isTracksEmpty = useSelector(selectIsTracksEmpty)

  const dispatch = useDispatch()

  useEffect(() => {
    if (!isTracksEmpty) return
    dispatch(setTracks(tracks))
  }, [dispatch, isTracksEmpty])

  return (
    <div className='h-full w-full'>
      <TrackList />
    </div>
  )
}
