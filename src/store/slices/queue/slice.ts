import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import shuffle from 'lodash.shuffle'

import { getInitialVolumeState } from './helpers.ts'
import { MAX_VOLUME, MIN_AUDIO_VOLUME, MIN_VOLUME } from './const.ts'
import { RepeatMode, type State, type VolumeState } from './types.ts'
import { VOLUME_ITEM_KEY } from '@shared/const.ts'
import type { Track } from '@interfaces/Track.ts'

const initialVolumeState = getInitialVolumeState()

const initialState: State = {
  queue: [],
  shuffledQueue: [],
  withShuffle: false,
  repeatMode: RepeatMode.NO_REPEAT,
  currentTrack: null,
  currentTime: 0,
  pausedTime: 0,
  ...initialVolumeState
}

export const queueSlice = createSlice({
  name: 'queue',

  initialState,

  reducers: {
    setQueue(state, action: PayloadAction<Track[]>) {
      const tracks = action.payload.map(track => ({
        ...track,
        isPlaying: false
      }))

      state.queue = tracks
      state.shuffledQueue = shuffle(tracks)
    },
    setCurrentTrack(state, action: PayloadAction<Track>) {
      state.currentTrack = {
        ...action.payload,
        isPlaying: false
      }
    },
    playCurrentTrack(state) {
      const currentTrack = state.currentTrack
      if (!currentTrack) return

      const track = state.queue.find(track => track.id === currentTrack.id)
      if (!track) return

      track.isPlaying = true
      currentTrack.isPlaying = true
    },
    pauseCurrentTrack(state) {
      const currentTrack = state.currentTrack
      if (!currentTrack) return

      const track = state.queue.find(track => track.id === currentTrack.id)
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
    },
    setVolume(state, action: PayloadAction<number>) {
      const value = action.payload

      if (value < MIN_AUDIO_VOLUME || value > MAX_VOLUME) return

      if (value <= MIN_VOLUME) {
        state.isMuted = true
      }

      if (state.isMuted === true && value > MIN_VOLUME) {
        state.isMuted = false
      }

      state.volume = action.payload

      localStorage.setItem(
        VOLUME_ITEM_KEY,
        JSON.stringify({
          volume: state.volume,
          isMuted: state.isMuted
        } as VolumeState)
      )
    },
    toggleVolumeMute(state) {
      state.isMuted = !state.isMuted
      localStorage.setItem(
        VOLUME_ITEM_KEY,
        JSON.stringify({
          volume: state.volume,
          isMuted: state.isMuted
        } as VolumeState)
      )
    },
    skipForward(state) {
      const queue = state.withShuffle ? state.shuffledQueue : state.queue
      if (queue.length === 0) return

      const currentTrack = state.currentTrack
      if (!currentTrack) return

      const currentTrackIndex = queue
        .map(track => track.id)
        .indexOf(currentTrack.id)
      const nextTrack = queue[currentTrackIndex + 1]

      if (!nextTrack) return

      nextTrack.isPlaying = true
      state.currentTrack = nextTrack
    },
    skipBackward(state) {
      const queue = state.withShuffle ? state.shuffledQueue : state.queue
      if (queue.length === 0) return

      const currentTrack = state.currentTrack
      if (!currentTrack) return

      const currentTrackIndex = queue
        .map(track => track.id)
        .indexOf(currentTrack.id)
      const prevTrack = queue[currentTrackIndex - 1]

      if (!prevTrack) return

      prevTrack.isPlaying = true
      state.currentTrack = prevTrack
    },
    toggleShuffle(state) {
      state.withShuffle = !state.withShuffle

      /**
       * The shuffle order changes after each option toggle.
       */
      if (state.withShuffle) {
        state.shuffledQueue = shuffle(state.queue)
      }
    },
    toggleRepeatMode(state) {
      const repeatModes = Object.values(RepeatMode).filter(
        value => typeof value !== 'string'
      ) as RepeatMode[]
      const currentIndex = repeatModes.indexOf(state.repeatMode)
      const nextIndex = (currentIndex + 1) % repeatModes.length

      state.repeatMode = repeatModes[nextIndex]
    }
  }
})

export const queueActions = queueSlice.actions
