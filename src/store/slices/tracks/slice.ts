import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import type { State } from './types.ts'
import type { Track } from '@interfaces/Track.ts'
import type { PlayerTrack } from '@interfaces/PlayerTrack.ts'

const initialState: State = {
  tracks: [],
  currentTrack: null
}

export const tracksSlice = createSlice({
  name: 'tracks',

  initialState,

  reducers: {
    setTracks(state, action: PayloadAction<Track[]>) {
      state.tracks = action.payload.map(track => ({
        ...track,
        isPlaying: false
      }))
    },
    setCurrentTrack(state, action: PayloadAction<PlayerTrack>) {
      state.currentTrack = action.payload
    },
    playCurrentTrack(state) {
      const currentTrack = state.currentTrack
      if (!currentTrack) return

      const track = state.tracks.find(track => track.id === currentTrack.id)
      if (!track) return

      track.isPlaying = true
      currentTrack.isPlaying = true
    },
    pauseCurrentTrack(state) {
      const currentTrack = state.currentTrack
      if (!currentTrack) return

      const track = state.tracks.find(track => track.id === currentTrack.id)
      if (!track) return

      track.isPlaying = false
      currentTrack.isPlaying = false
    }
  }
})

export const {
  setTracks,
  setCurrentTrack,
  playCurrentTrack,
  pauseCurrentTrack
} = tracksSlice.actions
