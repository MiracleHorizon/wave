import { useActions } from '@store/hooks/useActions.ts'
import { trackActions } from './slice.ts'

export function useTrackActions() {
  return useActions(trackActions)
}
