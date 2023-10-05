import { useSelector } from 'react-redux'

import { IconPlay } from '@ui/icons/IconPlay.tsx'
import { IconPause } from '@ui/icons/IconPause.tsx'
import { ControlButton } from '../ControlButton.tsx'
import { selectCurrentTrack } from '@store/slices/queue'

export function PlayToggleControl({ handlePlayToggle }: Props) {
  const currentTrack = useSelector(selectCurrentTrack)

  return (
    <ControlButton isActive={Boolean(currentTrack)} onClick={handlePlayToggle}>
      {currentTrack ? (
        currentTrack.isPlaying ? (
          <IconPause />
        ) : (
          <IconPlay />
        )
      ) : (
        <IconPause />
      )}
    </ControlButton>
  )
}

interface Props {
  handlePlayToggle: VoidFunction
}
