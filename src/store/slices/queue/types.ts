import type { PlayerTrack } from '@interfaces/PlayerTrack.ts'

export interface State extends VolumeState {
  queue: PlayerTrack[]
  shuffledQueue: PlayerTrack[]
  withShuffle: boolean
  repeatMode: RepeatMode
  currentTrack: PlayerTrack | null
  currentTime: number
  pausedTime: number
}

export interface VolumeState {
  volume: number
  isMuted: boolean
}

/* eslint no-unused-vars: 0 */
export enum RepeatMode {
  NO_REPEAT,
  QUEUE_REPEAT,
  TRACK_REPEAT
}
