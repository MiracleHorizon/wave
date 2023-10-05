import { PlayToggleControl } from './PlayToggleControl.tsx'
import { SkipForwardControl } from './SkipForwardControl.tsx'
import { SkipBackwardControl } from './SkipBackwardControl.tsx'

export function TrackControls({ handlePlayToggle }: Props) {
  return (
    <div className='flex items-center gap-x-[6px]'>
      <SkipBackwardControl />
      <PlayToggleControl handlePlayToggle={handlePlayToggle} />
      <SkipForwardControl />
    </div>
  )
}

interface Props {
  handlePlayToggle: VoidFunction
}
