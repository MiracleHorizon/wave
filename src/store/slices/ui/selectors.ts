import type { RootState } from '@store/types.ts'

export function selectIsQueueModalOpen(state: RootState): boolean {
  return state.ui.isQueueModalOpen
}
