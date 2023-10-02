import { v4 } from 'uuid'

import type { Track } from '@interfaces/Track'
import theTrailMp3 from '@assets/audio/the_trail.mp3'
import heartsOfStoneMp3 from '@assets/audio/hearts_of_stone.mp3'
import silverForMonstersMp3 from '@assets/audio/silver_for_monsters.mp3'

/* eslint camelcase: 0 */
export const tracks: Track[] = [
  {
    id: v4(),
    title: 'The Trail',
    artists: ['Marcin Przybyłowicz'],
    album: 'The Witcher 3: Wild Hunt (Official Soundtrack)',
    audioFilePath: theTrailMp3,
    coverPath: null,
    explicit: false,
    duration: 2 * 60 + 50,
    release_date: new Date('August 26, 2015 00:00:00').toString()
  },
  {
    id: v4(),
    title: 'Hears of Stone',
    artists: ['Marcin Przybyłowicz', 'Geralt Of Rivia'],
    album: 'The Witcher 3: Wild Hunt - Hearts of Stone (Official Soundtrack)',
    audioFilePath: heartsOfStoneMp3,
    coverPath: null,
    explicit: true,
    duration: 105,
    release_date: new Date('October 13, 2015 00:00:00').toString()
  },
  {
    id: v4(),
    title: 'Silver for Monsters',
    artists: ['Marcin Przybyłowicz'],
    album: 'The Witcher 3: Wild Hunt (Official Soundtrack)',
    audioFilePath: silverForMonstersMp3,
    coverPath: null,
    explicit: true,
    duration: 60 * 2 + 16,
    release_date: new Date('August 26, 2015 00:00:00').toString()
  }
]
