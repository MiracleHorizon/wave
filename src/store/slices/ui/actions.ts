import { useActions } from '@store/hooks/useActions.ts'
import { uiActions } from './slice.ts'

export function useUiActions() {
  return useActions(uiActions)
}
