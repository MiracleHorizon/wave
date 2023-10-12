import {
  type MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
import { useSelector } from 'react-redux'
import { useEventListener } from 'usehooks-ts'
import { twJoin } from 'tailwind-merge'

import { Portal } from '@components/Portal.tsx'
import { Timeline } from './Timeline'
import { AudioControls } from './Controls'
import { useMediaSession } from '@hooks/useMediaSession.ts'
import {
  selectCurrentTime,
  selectCurrentTrack,
  selectIsVolumeMuted,
  selectPausedTime,
  selectVolume,
  useQueueActions
} from '@store/slices/queue'
import { KeyboardCode } from '@enums/KeyboardCode.ts'

export function AudioPlayer() {
  const [currentTimePercent, setCurrentTimePercent] = useState(0)
  const currentTrack = useSelector(selectCurrentTrack)
  const currentTime = useSelector(selectCurrentTime)
  const pausedTime = useSelector(selectPausedTime)
  const volume = useSelector(selectVolume)
  const isVolumeMuted = useSelector(selectIsVolumeMuted)

  const audioRef = useRef<HTMLAudioElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  const {
    playCurrentTrack,
    stopCurrentTrack,
    pauseCurrentTrack,
    endCurrentTrack,
    setCurrentTime,
    setPausedTime,
    resetPausedTime
  } = useQueueActions()

  const { isMediaSessionSupported } = useMediaSession()

  const handlePlayToggle = useCallback(() => {
    if (!audioRef.current || !currentTrack) return

    if (!currentTrack.isPlaying) {
      playCurrentTrack()
    } else {
      pauseCurrentTrack()
    }
  }, [currentTrack, playCurrentTrack, pauseCurrentTrack])

  const handleTimelineClick = useCallback(
    (ev: MouseEvent) => {
      const audio = audioRef.current
      const timelineElement = timelineRef.current

      if (!audio || !timelineElement || !currentTrack) return

      const clientRect = timelineElement.getBoundingClientRect()
      const progressPosition = ev.clientX - clientRect.left
      const progressPercent = progressPosition / clientRect.width
      const clickedTime = Math.floor(progressPercent * audio.duration)

      audio.currentTime = clickedTime
      setCurrentTimePercent(progressPercent)

      if (currentTime > 0 && clickedTime !== pausedTime) {
        setPausedTime(clickedTime)
      }
    },
    [currentTrack, currentTime, pausedTime, setPausedTime]
  )

  const handleTimeUpdate = () => {
    const audio = audioRef.current

    if (!audio || !currentTrack) return
    if (audio.currentTime === 0 && currentTime !== 0) return

    setCurrentTime(audio.currentTime)
    setCurrentTimePercent(audio.currentTime / (currentTrack.duration / 100))
  }

  const handleEnded = () => {
    const audio = audioRef.current

    if (!audio || !audio.ended || !currentTrack) return

    audio.currentTime = 0
    endCurrentTrack()
  }

  const handleKeyboardTogglePlay = (ev: KeyboardEvent) => {
    if (ev.code === KeyboardCode.SPACE) {
      ev.preventDefault()
      handlePlayToggle()
    }
  }

  useEventListener('ended', handleEnded, audioRef)
  useEventListener('keydown', handleKeyboardTogglePlay)

  useEffect(() => {
    const audio = audioRef.current

    if (!audio || !currentTrack) return

    try {
      if (currentTrack.isPlaying) {
        if (pausedTime > 0 && pausedTime !== audio.currentTime) {
          audio.currentTime = pausedTime
          resetPausedTime()
        }

        audio.play().then(() => {
          if (isMediaSessionSupported) {
            navigator.mediaSession.playbackState = 'playing'
          }
        })
      } else {
        audio.pause()

        if (isMediaSessionSupported) {
          navigator.mediaSession.playbackState = 'paused'
        }
      }
    } catch {
      if (isMediaSessionSupported) {
        navigator.mediaSession.playbackState = 'none'
      }

      audio.currentTime = 0
      stopCurrentTrack()
    }
  }, [
    pausedTime,
    currentTrack,
    isMediaSessionSupported,
    stopCurrentTrack,
    resetPausedTime
  ])

  useEffect(() => {
    const audio = audioRef.current

    if (!audio) return

    audio.volume = volume
  }, [volume])

  return (
    <Portal>
      <section
        className={twJoin(
          'bg-[rgb(255,255,255)]/85 fixed bottom-0 z-50 shadow',
          'h-[var(--audio-player-height)] w-screen'
        )}
      >
        <audio
          ref={audioRef}
          muted={isVolumeMuted}
          src={currentTrack?.audioFilePath}
          onTimeUpdate={handleTimeUpdate}
        />
        <div className='flex h-full w-full flex-col'>
          <Timeline
            ref={timelineRef}
            currentTimePercent={currentTimePercent}
            handleTimelineClick={handleTimelineClick}
          />
          <AudioControls handlePlayToggle={handlePlayToggle} />
        </div>
      </section>
    </Portal>
  )
}
