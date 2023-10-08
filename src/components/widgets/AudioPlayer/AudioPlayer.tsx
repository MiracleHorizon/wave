import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent
} from 'react'
import { useSelector } from 'react-redux'

import { Portal } from '@components/Portal.tsx'
import { Timeline } from './Timeline'
import { AudioControls } from './Controls'
import {
  useQueueActions,
  selectCurrentTrack,
  selectCurrentTime,
  selectPausedTime,
  selectVolume,
  selectIsVolumeMuted
} from '@store/slices/queue'

export function AudioPlayer() {
  const [currentTimePercent, setCurrentTimePercent] = useState(0)

  const audioRef = useRef<HTMLAudioElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  const currentTrack = useSelector(selectCurrentTrack)
  const currentTime = useSelector(selectCurrentTime)
  const pausedTime = useSelector(selectPausedTime)
  const volume = useSelector(selectVolume)
  const isVolumeMuted = useSelector(selectIsVolumeMuted)

  const {
    playCurrentTrack,
    pauseCurrentTrack,
    endCurrentTrack,
    setCurrentTime,
    setPausedTime,
    resetPausedTime
  } = useQueueActions()

  const handlePlayToggle = useCallback(() => {
    if (!currentTrack) return

    try {
      if (currentTrack.isPlaying) {
        pauseCurrentTrack()
      } else {
        playCurrentTrack()
      }
    } catch {
      pauseCurrentTrack()
    }
  }, [currentTrack, pauseCurrentTrack, playCurrentTrack])

  const handleTimelineClick = useCallback(
    (ev: MouseEvent) => {
      const audio = audioRef.current
      const timelineElement = timelineRef.current

      if (!audio || !timelineElement || !currentTrack) return

      const clientRect = timelineElement.getBoundingClientRect()
      const progressPosition = ev.clientX - clientRect.left
      const progressPercent = progressPosition / clientRect.width
      const clickedTime = progressPercent * audio.duration

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
    if (currentTime !== 0 && audio.currentTime === 0) return

    setCurrentTime(audio.currentTime)
    setCurrentTimePercent(audio.currentTime / (currentTrack.duration / 100))
  }

  useEffect(() => {
    const audio = audioRef.current

    if (!audio || !currentTrack) return

    const handleEnd = () => {
      audio.currentTime = 0
      endCurrentTrack()
    }

    audio.load()
    audio.addEventListener('ended', handleEnd)

    return () => {
      audio.removeEventListener('ended', handleEnd)
    }
  }, [currentTrack, endCurrentTrack])

  useEffect(() => {
    const audio = audioRef.current

    if (!audio || !currentTrack) return

    try {
      if (currentTrack.isPlaying) {
        if (pausedTime > 0) {
          audio.currentTime = pausedTime
          resetPausedTime()
        }

        audio.play().then(resetPausedTime)
      } else {
        audio.pause()
      }
    } catch {
      audio.pause()
      pauseCurrentTrack()
    }
  }, [currentTrack, pauseCurrentTrack, pausedTime, resetPausedTime])

  useEffect(() => {
    const audio = audioRef.current

    if (!audio || !currentTrack) return

    const handleKeyboardTogglePlay = (ev: KeyboardEvent) => {
      if (ev.code === 'Space') {
        handlePlayToggle()
      }
    }

    window.addEventListener('keydown', handleKeyboardTogglePlay)

    return () => {
      window.removeEventListener('keydown', handleKeyboardTogglePlay)
    }
  }, [currentTrack, handlePlayToggle])

  useEffect(() => {
    const audio = audioRef.current

    if (!audio) return

    audio.volume = isVolumeMuted ? 0 : volume
  }, [volume, isVolumeMuted])

  return (
    <Portal>
      <section className='z-50 h-[var(--audio-player-height)] w-screen bg-white shadow'>
        <audio
          ref={audioRef}
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
