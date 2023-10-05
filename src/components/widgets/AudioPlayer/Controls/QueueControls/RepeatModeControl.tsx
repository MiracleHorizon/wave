import { useSelector } from 'react-redux'

import { IconRepeat } from '@ui/icons/IconRepeat.tsx'
import { IconRepeatOn } from '@ui/icons/IconRepeatOn.tsx'
import { ControlButton } from '../ControlButton.tsx'
import {
  RepeatMode,
  selectIsQueueEmpty,
  selectRepeatMode,
  useQueueActions
} from '@store/slices/queue'

const RepeatModeIcon = {
  [RepeatMode.NO_REPEAT]: IconRepeat,
  [RepeatMode.QUEUE_REPEAT]: IconRepeat,
  [RepeatMode.TRACK_REPEAT]: IconRepeatOn
}

export function RepeatModeControl() {
  const isQueueEmpty = useSelector(selectIsQueueEmpty)
  const repeatMode = useSelector(selectRepeatMode)
  const { toggleRepeatMode } = useQueueActions()

  const handleRepeatModeToggle = () => toggleRepeatMode()

  return (
    <ControlButton
      isActive={!isQueueEmpty}
      className={
        repeatMode !== RepeatMode.NO_REPEAT ? 'text-gray-700' : 'text-gray-400'
      }
      onClick={handleRepeatModeToggle}
    >
      {RepeatModeIcon[repeatMode]()}
    </ControlButton>
  )
}
