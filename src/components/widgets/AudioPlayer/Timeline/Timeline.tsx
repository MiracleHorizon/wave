import { forwardRef, type MouseEvent } from 'react'
import { twJoin } from 'tailwind-merge'

import { Time } from './Time.tsx'

export const Timeline = forwardRef<HTMLDivElement, Props>(
  ({ currentTime, currentTimePercent, handleTimelineClick, duration }, ref) => {
    const percentValue = currentTimePercent + '%'

    return (
      <div
        ref={ref}
        className={twJoin(
          'group relative h-[14px] w-full cursor-pointer bg-gray-600',
          'transition-all duration-100 ease-in-out'
        )}
        onClick={handleTimelineClick}
      >
        <div
          style={{ width: percentValue }}
          className='absolute left-0 top-0 z-10 h-full bg-gray-500'
        />
        <div
          style={{ left: percentValue }}
          className='absolute z-10 hidden h-[10px] w-[10px] translate-y-[-25%] rounded-full bg-yellow-400'
        />
        {currentTime > 1 && <Time value={currentTime} className='left-[5px]' />}
        {duration && <Time value={duration} className='right-[5px]' />}
      </div>
    )
  }
)

/* eslint no-unused-vars: 0 */
interface Props {
  currentTime: number
  currentTimePercent: number
  handleTimelineClick: (ev: MouseEvent) => void
  duration?: number
}
