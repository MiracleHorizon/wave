import { useActions } from '@store/hooks/useActions.ts'
import { tracksSlice } from './slice.ts'

export function useTrackActions() {
  return useActions(tracksSlice.actions)
}
