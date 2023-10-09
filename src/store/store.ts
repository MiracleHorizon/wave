import { configureStore } from '@reduxjs/toolkit'

import { tracksSlice } from './slices/tracks'
import { queueSlice } from './slices/queue'
import { uiSlice } from './slices/ui'

export const store = configureStore({
  reducer: {
    [tracksSlice.name]: tracksSlice.reducer,
    [queueSlice.name]: queueSlice.reducer,
    [uiSlice.name]: uiSlice.reducer
  }
})
