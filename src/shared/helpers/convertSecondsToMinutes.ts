export const convertSecondsToMinutes = (seconds: number) => {
  const integerMinutes = Math.floor(seconds / 60)

  return {
    minutes: integerMinutes,
    seconds: Math.floor(seconds - integerMinutes * 60)
  }
}
