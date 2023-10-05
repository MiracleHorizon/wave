import type { RootState } from '@store/types.ts'

export function selectTracks(state: RootState) {
  return state.tracks.tracks
}

export function selectIsTracksEmpty(state: RootState) {
  return state.tracks.tracks.length === 0
}
