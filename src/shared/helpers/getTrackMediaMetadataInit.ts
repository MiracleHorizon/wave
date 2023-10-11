import type { Track } from '@interfaces/Track.ts'

export function getTrackMediaMetadataInit({
  title,
  album,
  artists,
  coverPath
}: Track): MediaMetadataInit {
  return {
    title,
    album,
    artist: artists.join(', '),
    artwork: coverPath ? [{ src: coverPath }] : []
  }
}
