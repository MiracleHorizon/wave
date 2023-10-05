import { PlayerTrack } from '@interfaces/PlayerTrack.ts'

export interface State {
  queue: PlayerTrack[]
  shuffledQueue: PlayerTrack[]
  withShuffle: boolean
  repeatMode: RepeatMode
  currentTrack: PlayerTrack | null
  currentTime: number
  pausedTime: number
}

/* eslint no-unused-vars: 0 */
export enum RepeatMode {
  NO_REPEAT,
  QUEUE_REPEAT,
  TRACK_REPEAT
}
