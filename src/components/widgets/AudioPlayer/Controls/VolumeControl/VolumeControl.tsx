import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { twJoin } from 'tailwind-merge'

import { IconVolumeLow } from '@ui/icons/IconVolumeLow.tsx'
import { IconVolumeHigh } from '@ui/icons/IconVolumeHigh.tsx'
import { IconVolumeMute } from '@ui/icons/IconVolumeMute.tsx'
import { VolumeSlider } from './VolumeSlider.tsx'
import {
  MAX_VOLUME,
  MIN_AUDIO_VOLUME,
  MIN_VOLUME,
  selectIsVolumeMuted,
  selectVolume,
  useQueueActions
} from '@store/slices/queue'

export function VolumeControl() {
  const [isHover, setHover] = useState(false)

  const volume = useSelector(selectVolume)
  const isMuted = useSelector(selectIsVolumeMuted)
  const { toggleVolumeMute } = useQueueActions()

  const { isLowVolume, isHighVolume } = useMemo(
    () => calcVolumeStatus(volume),
    [volume]
  )

  const handleToggleVolumeMute = () => toggleVolumeMute()
  const handleMouseEnter = () => setHover(true)
  const handleMouseLeave = () => setHover(false)

  return (
    <div
      className='group relative'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span
        className={twJoin(
          'cursor-pointer text-gray-400 group-hover:text-gray-700',
          'transition-colors duration-100 ease-in'
        )}
        title={isMuted ? 'Включить звук' : 'Выключить звук'}
        onClick={handleToggleVolumeMute}
      >
        {isMuted ? (
          <IconVolumeMute />
        ) : (
          <>
            {isLowVolume && <IconVolumeLow />}
            {isHighVolume && <IconVolumeHigh />}
          </>
        )}
      </span>
      <VolumeSlider isHover={isHover} />
    </div>
  )
}

function calcVolumeStatus(volume: number) {
  const highVolumeThreshold = (MAX_VOLUME - MIN_VOLUME) / 2 + MIN_VOLUME

  return {
    isLowVolume: volume > MIN_AUDIO_VOLUME && volume < highVolumeThreshold,
    isHighVolume: volume > MIN_AUDIO_VOLUME && volume >= highVolumeThreshold
  }
}
