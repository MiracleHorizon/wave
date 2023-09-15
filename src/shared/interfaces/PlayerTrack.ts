import type { Track } from './Track.ts'

export interface PlayerTrack extends Track {
  isPlaying: boolean
}
