import { createPortal } from 'react-dom'
import type { PropsWithChildren } from 'react'

import { DOM_ROOT_ID } from '@shared/const.ts'

export function Portal({ children, selector }: Props) {
  return createPortal(
    children,
    document.querySelector(selector || DOM_ROOT_ID) as HTMLElement
  )
}

interface Props extends PropsWithChildren {
  selector?: string
}
