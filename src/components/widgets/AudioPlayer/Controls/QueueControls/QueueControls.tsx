import { ShuffleControl } from './ShuffleControl.tsx'
import { RepeatModeControl } from './RepeatModeControl.tsx'

export function QueueControls() {
  return (
    <div className='flex items-center gap-x-[6px]'>
      <ShuffleControl />
      <RepeatModeControl />
    </div>
  )
}
