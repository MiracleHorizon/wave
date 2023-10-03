import { twJoin, twMerge } from 'tailwind-merge'

import { formatTimeValue } from '@helpers/formatTimeValue.ts'

export function Time({ value, className }: Props) {
  return (
    <div
      className={twMerge(
        twJoin(
          'absolute top-0 flex h-full items-center justify-center text-[11px]',
          'z-[20] text-white opacity-100 group-hover:opacity-100'
        ),
        className
      )}
    >
      {formatTimeValue(value)}
    </div>
  )
}

interface Props {
  value: number
  className: string
}
