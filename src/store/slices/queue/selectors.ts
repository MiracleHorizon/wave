import type { RootState } from '@store/types.ts'
import type { PlayerTrack } from '@interfaces/PlayerTrack.ts'
import type { Track } from '@interfaces/Track.ts'
import { RepeatMode } from './types.ts'

export function selectQueueTracks(state: RootState): Track[] {
  return state.queue.withShuffle ? state.queue.shuffledQueue : state.queue.queue
}

export function selectIsQueueEmpty(state: RootState): boolean {
  return state.queue.queue.length === 0
}

export function selectWithShuffle(state: RootState): boolean {
  return state.queue.withShuffle
}

export function selectRepeatMode(state: RootState): RepeatMode {
  return state.queue.repeatMode
}

export function selectCurrentTrack(state: RootState): PlayerTrack | null {
  return state.queue.currentTrack
}

export function selectIsTrackCurrent(
  state: RootState,
  trackId: string
): boolean {
  return state.queue.currentTrack?.id === trackId
}

export function selectIsTrackPlaying(
  state: RootState,
  trackId: string
): boolean {
  return (
    state.queue.currentTrack?.id === trackId &&
    state.queue.currentTrack?.isPlaying
  )
}

export function selectCurrentTime(state: RootState): number {
  return state.queue.currentTime
}

export function selectPausedTime(state: RootState): number {
  return state.queue.pausedTime
}

export function selectVolume(state: RootState): number {
  return state.queue.volume
}

export function selectIsVolumeMuted(state: RootState): boolean {
  return state.queue.isMuted
}

export function selectIsForwardSkipAvailable(state: RootState): boolean {
  const queueSlice = state.queue
  const queue = queueSlice.withShuffle
    ? queueSlice.shuffledQueue
    : queueSlice.queue
  if (queue.length === 0) {
    return false
  }

  const currentTrack = state.queue.currentTrack
  if (!currentTrack) {
    return false
  }

  const lastQueueTrack = queue[queue.length - 1]
  return lastQueueTrack.id !== currentTrack.id
}

export function selectIsBackwardSkipAvailable(state: RootState): boolean {
  const queueSlice = state.queue
  const queue = queueSlice.withShuffle
    ? queueSlice.shuffledQueue
    : queueSlice.queue
  if (queue.length === 0) {
    return false
  }

  const currentTrack = state.queue.currentTrack
  if (!currentTrack) {
    return false
  }

  const firstQueueTrack = queue[0]
  return firstQueueTrack.id !== currentTrack.id
}
