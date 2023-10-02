import { configureStore } from '@reduxjs/toolkit'

import { tracksSlice } from './slices/tracks'

export const store = configureStore({
  reducer: {
    [tracksSlice.name]: tracksSlice.reducer
  }
})
