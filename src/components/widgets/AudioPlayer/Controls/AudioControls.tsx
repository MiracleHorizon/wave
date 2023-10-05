import { TrackControls } from './TrackControls'
import { QueueControls } from './QueueControls'
import { VolumeControl } from './VolumeControl'

export function AudioControls({ handlePlayToggle }: Props) {
  return (
    <div className='my-auto flex w-full items-center justify-between px-[12px]'>
      <TrackControls handlePlayToggle={handlePlayToggle} />
      <div className='flex items-center gap-[6px] pr-[10px]'>
        <QueueControls />
        <VolumeControl />
      </div>
    </div>
  )
}

interface Props {
  handlePlayToggle: VoidFunction
}
