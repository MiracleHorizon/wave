import { TrackControls } from './TrackControls'
import { QueueControls } from './QueueControls'

export function AudioControls({ handlePlayToggle }: Props) {
  return (
    <div className='my-auto flex w-full items-center justify-between px-[12px]'>
      <TrackControls handlePlayToggle={handlePlayToggle} />
      <QueueControls />
    </div>
  )
}

interface Props {
  handlePlayToggle: VoidFunction
}
