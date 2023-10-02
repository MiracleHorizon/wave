export interface Track {
  id: string
  title: string
  album: string
  artists: string[]
  coverPath: string | null
  release_date: string
  duration: number
  explicit: boolean
  audioFilePath: string
}
