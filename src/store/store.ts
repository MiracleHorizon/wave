import { configureStore } from '@reduxjs/toolkit'

import { tracksSlice } from './slices/tracks'
import { queueSlice } from './slices/queue'

export const store = configureStore({
  reducer: {
    [tracksSlice.name]: tracksSlice.reducer,
    [queueSlice.name]: queueSlice.reducer
  }
})
