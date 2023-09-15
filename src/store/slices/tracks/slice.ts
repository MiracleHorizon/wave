import { createSlice } from '@reduxjs/toolkit'

import { State } from './types.ts'

const initialState: State = {
  tracks: []
}

export const tracksSlice = createSlice({
  name: 'tracks',

  initialState,

  reducers: {}
})
