import { useSelector } from 'react-redux'
import { twJoin } from 'tailwind-merge'
import {
  motion,
  AnimatePresence,
  type AnimationProps,
  type Target
} from 'framer-motion'
import type { ChangeEvent, CSSProperties } from 'react'

import { RangeSlider } from '@ui/RangeSlider'
import {
  MAX_VOLUME,
  MIN_VOLUME,
  useQueueActions,
  selectVolume,
  selectIsVolumeMuted
} from '@store/slices/queue'

const rootStyle: CSSProperties = {
  transform: 'translateX(-50%)'
}
const sliderContainerStyle: CSSProperties = {
  rotate: '270deg',
  transform: 'translateX(-100%)'
}
const initial: Target = {
  opacity: 0,
  transform: `${rootStyle.transform} scale(0.85)`
}
const animation: AnimationProps = {
  initial,
  exit: initial,
  animate: {
    opacity: 1,
    transform: `${rootStyle.transform} scale(1)`
  },
  transition: {
    duration: 0.2
  }
}

export function VolumeSlider({ isHover }: Props) {
  const volume = useSelector(selectVolume)
  const isMuted = useSelector(selectIsVolumeMuted)
  const { setVolume } = useQueueActions()

  const handleChangeVolume = (ev: ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value
    const parsedValue = parseFloat(value)

    if (isNaN(parsedValue)) return

    setVolume(parsedValue)
  }

  return (
    <AnimatePresence initial={false}>
      {isHover && (
        <motion.div
          {...animation}
          style={rootStyle}
          className={twJoin(
            'absolute bottom-[32px] flex h-[240px] w-[44px] items-start',
            'left-1/2 right-1/2'
          )}
        >
          <div
            style={sliderContainerStyle}
            className={twJoin(
              'relative left-0 h-[44px] w-[200px] min-w-[200px] rounded-[6px]',
              'z-10 flex origin-top-left items-center justify-center bg-neutral-800',
              'triangle [&:before]:left-[-6px]'
            )}
          >
            <div className='relative flex w-full items-center justify-center px-[16px]'>
              <div
                className={twJoin(
                  'absolute bottom-1/2 left-1/2 right-1/2 top-1/2 bg-neutral-400',
                  'h-[22px] w-[1px] -translate-x-1/2 -translate-y-1/2'
                )}
              />
              <RangeSlider
                value={isMuted ? 0 : volume}
                step={0.01}
                min={MIN_VOLUME}
                max={MAX_VOLUME}
                onChange={handleChangeVolume}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

interface Props {
  isHover: boolean
}
