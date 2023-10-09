import { createSlice } from '@reduxjs/toolkit'

import type { State } from './types.ts'

const initialState: State = {
  isQueueModalOpen: false
}

export const uiSlice = createSlice({
  name: 'ui',

  initialState,

  reducers: {
    toggleQueueModal(state) {
      state.isQueueModalOpen = !state.isQueueModalOpen
    },

    closeQueueModal(state) {
      state.isQueueModalOpen = false
    }
  }
})

export const uiActions = uiSlice.actions
