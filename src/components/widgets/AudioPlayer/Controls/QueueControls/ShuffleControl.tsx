import { useSelector } from 'react-redux'

import { IconShuffle } from '@ui/icons/IconShuffle.tsx'
import { IconShuffleOn } from '@ui/icons/IconShuffleOn.tsx'
import { ControlButton } from '../ControlButton.tsx'
import {
  useQueueActions,
  selectIsQueueEmpty,
  selectWithShuffle
} from '@store/slices/queue'

export function ShuffleControl() {
  const isQueueEmpty = useSelector(selectIsQueueEmpty)
  const isShuffleEnabled = useSelector(selectWithShuffle)
  const { toggleShuffle } = useQueueActions()

  const handleShuffleToggle = () => toggleShuffle()

  return (
    <ControlButton
      isActive={!isQueueEmpty}
      className={isShuffleEnabled ? 'text-gray-700' : 'text-gray-400'}
      onClick={handleShuffleToggle}
    >
      {isShuffleEnabled ? <IconShuffleOn /> : <IconShuffle />}
    </ControlButton>
  )
}
