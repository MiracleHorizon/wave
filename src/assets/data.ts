import { v4 } from 'uuid'

import type { Track } from '@interfaces/Track'
import theTrailMp3 from '@assets/audio/the_trail.mp3'
import heartsOfStoneMp3 from '@assets/audio/hearts_of_stone.mp3'
import silverForMonstersMp3 from '@assets/audio/silver_for_monsters.mp3'
import steelForHumansMp3 from '@assets/audio/steel_for_humans.mp3'
import maleniaBladeOfMiquellaMp3 from '@assets/audio/malenia_blade_of_miquella.mp3'
import godfreyFirstEldenLordMp3 from '@assets/audio/godfrey_first_elden_lord.mp3'
import theFinalBattleMp3 from '@assets/audio/the_final_battle.mp3'
import chippinInMp3 from '@assets/audio/samurai_chippin_in.mp3'

import eldenRingOstCoverPng from './elden_ring_ost_cover.png'
import theWitcher3OstCoverPng from './the_witcher_3_ost_cover.png'
import theWitcher3HosOstCoverPng from './the_witcher_3_hos_ost_cover.png'

/* eslint camelcase: 0 */
export const tracks: Track[] = [
  {
    id: v4(),
    title: 'The Trail',
    artists: ['Marcin Przybyłowicz'],
    album: 'The Witcher 3: Wild Hunt (Official Soundtrack)',
    audioFilePath: theTrailMp3,
    coverPath: theWitcher3OstCoverPng,
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
    coverPath: theWitcher3HosOstCoverPng,
    explicit: false,
    duration: 105,
    release_date: new Date('October 13, 2015 00:00:00').toString()
  },
  {
    id: v4(),
    title: 'Silver for Monsters',
    artists: ['Marcin Przybyłowicz'],
    album: 'The Witcher 3: Wild Hunt (Official Soundtrack)',
    audioFilePath: silverForMonstersMp3,
    coverPath: theWitcher3OstCoverPng,
    explicit: false,
    duration: 60 * 2 + 16,
    release_date: new Date('August 26, 2015 00:00:00').toString()
  },
  {
    id: v4(),
    title: '...Steel For Humans',
    artists: ['Marcin Przybyłowicz'],
    album: 'The Witcher 3: Wild Hunt (Official Soundtrack)',
    audioFilePath: steelForHumansMp3,
    coverPath: theWitcher3OstCoverPng,
    explicit: false,
    duration: 87,
    release_date: new Date('August 26, 2015 00:00:00').toString()
  },
  {
    id: v4(),
    title: 'Malenia, Blade of Miquella',
    artists: ['Yuka Kitamura'],
    album: 'Elden Ring (Official Game Soundtrack)',
    audioFilePath: maleniaBladeOfMiquellaMp3,
    coverPath: eldenRingOstCoverPng,
    explicit: false,
    duration: 60 * 3 + 44,
    release_date: new Date('September 9, 2022 00:00:00').toString()
  },
  {
    id: v4(),
    title: 'Godfrey, First Elden Lord',
    artists: ['Tai Tomisawa'],
    album: 'Elden Ring (Official Game Soundtrack)',
    audioFilePath: godfreyFirstEldenLordMp3,
    coverPath: eldenRingOstCoverPng,
    explicit: false,
    duration: 60 * 3 + 16,
    release_date: new Date('September 9, 2022 00:00:00').toString()
  },
  {
    id: v4(),
    title: 'The Final Battle',
    artists: ['Tsukaha Saitoh'],
    album: 'Elden Ring (Official Game Soundtrack)',
    audioFilePath: theFinalBattleMp3,
    coverPath: eldenRingOstCoverPng,
    explicit: false,
    duration: 60 * 4 + 58,
    release_date: new Date('September 9, 2022 00:00:00').toString()
  },
  {
    id: v4(),
    title: 'Chippin` In',
    artists: ['SAMURAI', 'Refused'],
    album: 'Chippin In',
    audioFilePath: chippinInMp3,
    coverPath: null,
    explicit: true,
    duration: 60 * 3 + 33,
    release_date: new Date('July 2, 2019 00:00:00').toString()
  }
]
