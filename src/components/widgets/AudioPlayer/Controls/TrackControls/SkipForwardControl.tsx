import { useSelector } from 'react-redux'

import { IconForward } from '@ui/icons/IconForward.tsx'
import { ControlButton } from '../ControlButton.tsx'
import {
  selectIsForwardSkipAvailable,
  useQueueActions
} from '@store/slices/queue'

export function SkipForwardControl() {
  const isAvailable = useSelector(selectIsForwardSkipAvailable)
  const { skipForward } = useQueueActions()

  const handleSkipForward = () => skipForward()

  return (
    <ControlButton isActive={isAvailable} onClick={handleSkipForward}>
      <IconForward className='h-[26px] w-[26px]' />
    </ControlButton>
  )
}
