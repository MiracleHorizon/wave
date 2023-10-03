import type { PlayerTrack } from '@interfaces/PlayerTrack.ts'

export interface State {
  tracks: PlayerTrack[]
  currentTrack: PlayerTrack | null
  currentTime: number
  pausedTime: number
}
