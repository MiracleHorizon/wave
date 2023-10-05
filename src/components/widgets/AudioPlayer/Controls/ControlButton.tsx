import {
  memo,
  type FocusEvent,
  type MouseEvent,
  type PropsWithChildren
} from 'react'
import { twJoin, twMerge } from 'tailwind-merge'

import type { ClassNameProps } from '@interfaces/ClassNameProps'

function ControlButton({ children, isActive, className, onClick }: Props) {
  const handleEventPreventDefault = (ev: FocusEvent) => ev.preventDefault()

  return (
    <button
      onFocus={handleEventPreventDefault}
      onBlur={handleEventPreventDefault}
      className={twMerge(
        twJoin(
          'flex h-[36px] w-[36px] items-center justify-center',
          'rounded-full focus:outline-1',
          isActive ? 'text-gray-700' : 'pointer-events-none text-gray-400'
        ),
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

const MemoizedControlButton = memo(ControlButton)

export { MemoizedControlButton as ControlButton }

/* eslint no-unused-vars: 0 */
interface Props extends PropsWithChildren, ClassNameProps {
  isActive: boolean
  onClick: VoidFunction | ((ev: MouseEvent) => void)
}
