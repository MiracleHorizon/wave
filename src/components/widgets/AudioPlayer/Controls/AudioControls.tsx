import { memo } from 'react'
import { useSelector } from 'react-redux'

import { TrackControls } from './TrackControls'
import { QueueControls } from './QueueControls'
import { VolumeControl } from './VolumeControl'
import { QueueButton } from './QueueButton.tsx'
import { TrackDetails } from '@components/TrackDetails.tsx'
import { selectCurrentTrack } from '@store/slices/queue'

function AudioControls({ handlePlayToggle }: Props) {
  const currentTrack = useSelector(selectCurrentTrack)

  return (
    <div className='flex w-full flex-1 items-center justify-between px-[12px]'>
      <div className='flex items-center'>
        <TrackControls handlePlayToggle={handlePlayToggle} />
        <QueueButton className='ml-[10px]' />
        {currentTrack && (
          <TrackDetails
            {...currentTrack}
            className='ml-[16px] max-600px:hidden'
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
