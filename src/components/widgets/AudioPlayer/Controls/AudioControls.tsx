import { memo } from 'react'
import { useSelector } from 'react-redux'

import { TrackControls } from './TrackControls'
import { QueueControls } from './QueueControls'
import { VolumeControl } from './VolumeControl'
import { TrackDetails } from '@components/TrackDetails.tsx'
import { selectCurrentTrack } from '@store/slices/queue'

function AudioControls({ handlePlayToggle }: Props) {
  const currentTrack = useSelector(selectCurrentTrack)

  return (
    <div className='flex w-full flex-1 items-center justify-between px-[12px]'>
      <div className='flex'>
        <TrackControls handlePlayToggle={handlePlayToggle} />
        {currentTrack && (
          <TrackDetails
            {...currentTrack}
            className='max-600px:hidden ml-[10px]'
          />
        )}
      </div>
      <div className='flex items-center gap-[6px] pr-[10px]'>
        <QueueControls />
        <VolumeControl />
      </div>
    </div>
  )
}

const MemoizedAudioControls = memo(AudioControls)

export { MemoizedAudioControls as AudioControls }

interface Props {
  handlePlayToggle: VoidFunction
}
