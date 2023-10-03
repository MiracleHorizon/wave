import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent
} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Timeline } from './Timeline'
import {
  endCurrentTrack,
  pauseCurrentTrack,
  playCurrentTrack,
  setCurrentTime,
  setPausedTime,
  resetPausedTime,
  selectCurrentTrack,
  selectCurrentTime,
  selectPausedTime
} from '@store/slices/tracks'

export function AudioPlayer() {
  const [currentTimePercent, setCurrentTimePercent] = useState(0)

  const audioRef = useRef<HTMLAudioElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  const currentTrack = useSelector(selectCurrentTrack)
  const currentTime = useSelector(selectCurrentTime)
  const pausedTime = useSelector(selectPausedTime)
  const dispatch = useDispatch()

  const handlePlay = useCallback(() => {
    dispatch(playCurrentTrack())
  }, [dispatch])

  const handlePause = useCallback(() => {
    dispatch(pauseCurrentTrack())
  }, [dispatch])

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

      if (!currentTrack.isPlaying) {
        if (currentTime > 0 && clickedTime !== pausedTime) {
          dispatch(setPausedTime(clickedTime))
        }

        handlePlay()
      }
    },
    [currentTrack, currentTime, pausedTime, handlePlay, dispatch]
  )

  const handleTimeUpdate = () => {
    const audio = audioRef.current

    if (!audio || !currentTrack) return
    if (currentTime !== 0 && audio.currentTime === 0) return

    dispatch(setCurrentTime(audio.currentTime))
    setCurrentTimePercent(audio.currentTime / (currentTrack.duration / 100))
  }

  useEffect(() => {
    const audio = audioRef.current

    if (!audio || !currentTrack) return

    const handleEnd = () => {
      audio.currentTime = 0
      dispatch(endCurrentTrack())
    }

    audio.load()
    audio.addEventListener('ended', handleEnd)

    return () => {
      audio.removeEventListener('ended', handleEnd)
    }
  }, [currentTrack, dispatch])

  useEffect(() => {
    const audio = audioRef.current

    if (!audio || !currentTrack) return

    const handleResetPausedTime = () => dispatch(resetPausedTime())

    try {
      if (currentTrack.isPlaying) {
        if (pausedTime > 0) {
          audio.currentTime = pausedTime
          handleResetPausedTime()
        }

        audio.play().then(handleResetPausedTime)
      } else {
        audio.pause()
      }
    } catch {
      audio.pause()
      handlePause()
    }
  }, [currentTrack, pausedTime, handlePause, dispatch])

  useEffect(() => {
    const audio = audioRef.current

    if (!audio || !currentTrack) return

    const handleKeyboardTogglePlay = (ev: KeyboardEvent) => {
      if (ev.code !== 'Space') return

      try {
        if (currentTrack.isPlaying) {
          handlePause()
        } else {
          handlePlay()
        }
      } catch {
        handlePause()
      }
    }

    window.addEventListener('keydown', handleKeyboardTogglePlay)

    return () => {
      window.removeEventListener('keydown', handleKeyboardTogglePlay)
    }
  }, [currentTrack, handlePause, handlePlay])

  return (
    <section className='mt-[24px] h-[110px] w-screen bg-white shadow'>
      <audio
        ref={audioRef}
        src={currentTrack?.audioFilePath}
        onTimeUpdate={handleTimeUpdate}
      />
      <div className='h-full w-full'>
        <Timeline
          ref={timelineRef}
          currentTime={currentTime}
          currentTimePercent={currentTimePercent}
          handleTimelineClick={handleTimelineClick}
          duration={currentTrack?.duration}
        />
      </div>
    </section>
  )
}
