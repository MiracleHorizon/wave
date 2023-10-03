import { convertSecondsToMinutes } from './convertSecondsToMinutes.ts'

export const formatTimeValue = (duration: number): string => {
  const { minutes, seconds } = convertSecondsToMinutes(duration)
  const secondsValue = seconds > 9 ? seconds : '0' + seconds

  return `${minutes}:${secondsValue}`
}
