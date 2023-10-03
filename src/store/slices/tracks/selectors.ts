import type { RootState } from '@store/types.ts'

export function selectTracks(state: RootState) {
  return state.tracks.tracks
}

export function selectIsTracksEmpty(state: RootState) {
  return state.tracks.tracks.length === 0
}

export function selectCurrentTrack(state: RootState) {
  return state.tracks.currentTrack
}

export function selectIsTrackCurrent(state: RootState, trackId: string) {
  return state.tracks.currentTrack?.id === trackId
}

export function selectCurrentTime(state: RootState) {
  return state.tracks.currentTime
}

export function selectPausedTime(state: RootState) {
  return state.tracks.pausedTime
}
