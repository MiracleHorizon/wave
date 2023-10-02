import type { PlayerTrack } from '@interfaces/PlayerTrack.ts'

export interface State {
  currentTrack: PlayerTrack | null
  tracks: PlayerTrack[]
}
