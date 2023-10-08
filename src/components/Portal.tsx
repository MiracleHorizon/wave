import { createPortal } from 'react-dom'
import type { PropsWithChildren } from 'react'

import { DOM_ROOT_ID } from '@shared/const.ts'

export function Portal({ children }: PropsWithChildren) {
  return createPortal(
    children,
    document.querySelector(DOM_ROOT_ID) as HTMLElement
  )
}
