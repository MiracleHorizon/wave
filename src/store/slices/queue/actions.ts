import { useActions } from '@store/hooks/useActions.ts'
import { queueActions } from './slice.ts'

export function useQueueActions() {
  return useActions(queueActions)
}
