import { VOLUME_ITEM_KEY } from '@shared/const.ts'
import type { VolumeState } from './types.ts'

export function getInitialVolumeState(): VolumeState {
  const DEFAULT_STATE: VolumeState = {
    volume: 0.5,
    isMuted: false
  }

  const volumeItem = localStorage.getItem(VOLUME_ITEM_KEY)

  if (!volumeItem) {
    return DEFAULT_STATE
  }

  try {
    return JSON.parse(volumeItem)
  } catch {
    return DEFAULT_STATE
  }
}
