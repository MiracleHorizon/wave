import { memo } from 'react'
import { twJoin, twMerge } from 'tailwind-merge'

import { formatTimeValue } from '@helpers/formatTimeValue.ts'

function Time({ value, className }: Props) {
  return (
    <div
      className={twMerge(
        twJoin(
          'absolute top-0 flex items-center justify-center text-[11px]',
          'z-[20] h-full text-white opacity-0 group-hover:opacity-100',
          'transition-opacity duration-[50] ease-in'
        ),
        className
      )}
    >
      {formatTimeValue(value)}
    </div>
  )
}

const MemoizedTime = memo(Time)

export { MemoizedTime as Time }

interface Props {
  value: number
  className: string
}
