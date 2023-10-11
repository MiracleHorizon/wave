import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { selectCurrentTrack, useQueueActions } from '@store/slices/queue'
import { getTrackMediaMetadataInit } from '@helpers/getTrackMediaMetadataInit.ts'

const isMediaSessionSupported = 'mediaSession' in navigator
const mediaSession = navigator.mediaSession

export function useMediaSession() {
  const currentTrack = useSelector(selectCurrentTrack)
  const {
    skipForward,
    skipBackward,
    playCurrentTrack,
    pauseCurrentTrack,
    stopCurrentTrack
  } = useQueueActions()

  useEffect(() => {
    if (!isMediaSessionSupported) return

    const handlePlay = () => playCurrentTrack()
    const handlePause = () => pauseCurrentTrack()
    const handleStop = () => stopCurrentTrack()
    const handleSkipForward = () => skipForward()
    const handleSkipBackward = () => skipBackward()

    mediaSession.setActionHandler('stop', handleStop)
    mediaSession.setActionHandler('play', handlePlay)
    mediaSession.setActionHandler('pause', handlePause)
    mediaSession.setActionHandler('nexttrack', handleSkipForward)
    mediaSession.setActionHandler('previoustrack', handleSkipBackward)
  }, [
    playCurrentTrack,
    pauseCurrentTrack,
    stopCurrentTrack,
    skipBackward,
    skipForward
  ])

  useEffect(() => {
    if (!isMediaSessionSupported || !currentTrack) return

    const mediaMetadataInit = getTrackMediaMetadataInit(currentTrack)
    mediaSession.metadata = new MediaMetadata(mediaMetadataInit)
  }, [currentTrack])

  return { isMediaSessionSupported }
}
