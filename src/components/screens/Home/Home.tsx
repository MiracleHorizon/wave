import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { Overlay } from '@components/modals/Overlay.tsx'
import { TrackList } from '@components/widgets/TrackList'
import { selectIsTracksEmpty, useTrackActions } from '@store/slices/tracks'
import { useQueueActions } from '@store/slices/queue'
import { tracks } from '@assets/data.ts'

export function Home() {
  const isTracksEmpty = useSelector(selectIsTracksEmpty)
  const { setTracks } = useTrackActions()
  const { setQueue } = useQueueActions()

  useEffect(() => {
    if (!isTracksEmpty) return
    setTracks(tracks)
    setQueue(tracks)
  }, [isTracksEmpty, setTracks, setQueue])

  return (
    <div className='h-full w-full'>
      <Overlay />
      <TrackList tracks={tracks} className='px-[12px] py-[14px]' />
    </div>
  )
}
