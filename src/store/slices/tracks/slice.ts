import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import type { State } from './types.ts'
import type { Track } from '@interfaces/Track.ts'

const initialState: State = {
  tracks: []
}

export const tracksSlice = createSlice({
  name: 'tracks',

  initialState,

  reducers: {
    setTracks(state, action: PayloadAction<Track[]>) {
      state.tracks = action.payload
    }
  }
})

export const trackActions = tracksSlice.actions
