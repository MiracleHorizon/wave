import { twMerge } from 'tailwind-merge'

import type { ClassNameProps } from '@interfaces/ClassNameProps'

export function PlaySvg({ className }: ClassNameProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={1.5}
      width={24}
      height={24}
      className={twMerge('mr-[-2px]', className)}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z'
      />
    </svg>
  )
}
