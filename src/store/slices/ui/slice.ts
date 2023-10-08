import { createSlice } from '@reduxjs/toolkit'

import type { State } from './types.ts'

const initialState: State = {
  isQueueModalOpen: false
}

export const uiSlice = createSlice({
  name: 'ui',

  initialState,

  reducers: {
    openQueueModal(state) {
      state.isQueueModalOpen = true
    },

    closeQueueModal(state) {
      state.isQueueModalOpen = false
    }
  }
})

export const uiActions = uiSlice.actions
