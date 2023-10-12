import { twJoin, twMerge } from 'tailwind-merge'

import type { ClassNameProps } from '@interfaces/ClassNameProps.ts'

export function ExplicitBadge({ className }: ClassNameProps) {
  return (
    <div
      className={twMerge(
        twJoin(
          'h-[var(--explicit-badge-size)] w-[var(--explicit-badge-size)] bg-neutral-700',
          'flex items-center justify-center rounded-[2px] text-[11px] uppercase text-white'
        ),
        className
      )}
    >
      e
    </div>
  )
}
