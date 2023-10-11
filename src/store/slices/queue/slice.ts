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
      const queue = state.withShuffle ? state.shuffledQueue : state.queue
      if (queue.length === 0) return

      const currentTrack = state.currentTrack
      if (!currentTrack) return

      const isLastInQueue = queue[queue.length - 1].id === currentTrack.id
      if (isLastInQueue) {
        /**
         * If "repeatMode" === RepeatMode.NO_REPEAT and "shuffle" is enabled,
         * then after playing the last track the queue will shuffle and
         * playback of the new first track will begin.
         */
        if (state.repeatMode === RepeatMode.NO_REPEAT && state.withShuffle) {
          state.shuffledQueue = shuffle(state.shuffledQueue)
        }

        const firstTrack = (
          state.withShuffle ? state.shuffledQueue : state.queue
        )[0]

        firstTrack.isPlaying = true
        state.currentTrack = firstTrack
      } else {
        const currentTrackIndex = queue
          .map(track => track.id)
          .indexOf(currentTrack.id)

        const nextTrack = queue[currentTrackIndex + 1]
        if (!nextTrack) return

        nextTrack.isPlaying = true
        state.currentTrack = nextTrack
      }

      state.currentTime = 0
      state.pausedTime = 0
    },
    stopCurrentTrack(state) {
      const currentTrack = state.currentTrack
      if (!currentTrack) return

      const track = state.queue.find(track => track.id === currentTrack.id)
      if (!track) return

      track.isPlaying = false
      currentTrack.isPlaying = false
      state.currentTime = 0
      state.pausedTime = 0
    },
    setCurrentTime(state, action: PayloadAction<number>) {
      state.currentTime = action.payload
    },
    setPausedTime(state, action: PayloadAction<number>) {
      state.pausedTime = action.payload
    },
    resetPausedTime(state) {
      if (state.pausedTime !== initialState.pausedTime) {
        state.pausedTime = initialState.pausedTime
      }
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
      state.currentTime = 0
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
      state.currentTime = 0
    },
    toggleShuffle(state) {
      state.withShuffle = !state.withShuffle

      /**
       * The shuffle order changes after each option toggle.
       */
      if (!state.withShuffle) return

      const currentTrack = state.currentTrack
      if (!currentTrack) {
        state.shuffledQueue = shuffle(state.queue)
        return
      }

      state.shuffledQueue = [
        currentTrack,
        ...shuffle(state.queue.filter(track => track.id !== currentTrack.id))
      ]
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
