export interface Track {
  id: string
  name: string
  album: string
  artists: string[]
  coverPath: string | null
  release_data: string
  duration: number
  explicit: boolean
  audioFilePath: string
}
