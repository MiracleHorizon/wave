import { useSelector } from 'react-redux'

import { TrackList } from '@components/widgets/TrackList'
import { selectQueueTracks } from '@store/slices/queue'

export function QueueModalMain() {
  const queueTracks = useSelector(selectQueueTracks)

  return (
    <main className='h-max w-full max-w-[700px] px-[8px] py-[20px]'>
      <TrackList tracks={queueTracks} />
    </main>
  )
}
