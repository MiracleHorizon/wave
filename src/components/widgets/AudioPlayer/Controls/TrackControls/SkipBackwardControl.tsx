import { useSelector } from 'react-redux'

import { IconBackward } from '@ui/icons/IconBackward.tsx'
import { ControlButton } from '../ControlButton.tsx'
import {
  selectIsBackwardSkipAvailable,
  useQueueActions
} from '@store/slices/queue'

export function SkipBackwardControl() {
  const isAvailable = useSelector(selectIsBackwardSkipAvailable)
  const { skipBackward } = useQueueActions()

  const handleSkipBackward = () => skipBackward()

  return (
    <ControlButton isActive={isAvailable} onClick={handleSkipBackward}>
      <IconBackward className='h-[26px] w-[26px]' />
    </ControlButton>
  )
}
