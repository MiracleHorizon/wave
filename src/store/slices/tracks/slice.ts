import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import type { State } from './types.ts'
import type { Track } from '@interfaces/Track.ts'
import type { PlayerTrack } from '@interfaces/PlayerTrack.ts'

const initialState: State = {
  tracks: [],
  currentTrack: null,
  currentTime: 0,
  pausedTime: 0
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

      const currentTime = state.currentTime
      if (currentTime > 0) {
        state.pausedTime = currentTime
      }
    },
    endCurrentTrack(state) {
      const currentTrack = state.currentTrack
      if (!currentTrack) return

      state.currentTrack = null
    },
    setCurrentTime(state, action: PayloadAction<number>) {
      state.currentTime = action.payload
    },
    setPausedTime(state, action: PayloadAction<number>) {
      state.pausedTime = action.payload
    },
    resetPausedTime(state) {
      state.pausedTime = initialState.pausedTime
    }
  }
})

export const trackActions = tracksSlice.actions
