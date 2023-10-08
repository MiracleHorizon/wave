import { Fragment, memo } from 'react'
import { twJoin, twMerge } from 'tailwind-merge'

import { IconMusicalNote } from '@ui/icons/IconMusicalNote.tsx'
import type { Track } from '@interfaces/Track.ts'
import type { ClassNameProps } from '@interfaces/ClassNameProps.ts'

function TrackDetails({
  title,
  artists,
  coverPath,
  className
}: Track & ClassNameProps) {
  return (
    <div className={twMerge('flex max-w-[280px] items-center', className)}>
      <span
        className={twJoin(
          'flex h-[54px] w-[54px] items-center justify-center rounded-[6px]',
          'bg-gray-500 text-neutral-100'
        )}
      >
        {coverPath ? (
          <img
            src={coverPath}
            alt={title.slice(0, 10)}
            className='h-full w-full'
          />
        ) : (
          <IconMusicalNote className='h-[27px] w-[27px]' />
        )}
      </span>
      <div className='ml-[8px] flex w-[calc(100%-54px-8px)] flex-col pr-[6px] text-[14px]'>
        <span className='w-full truncate font-semibold'>{title}</span>
        <span className='block w-full truncate text-left text-neutral-900'>
          {artists.map((artist, artistIndex) => (
            <Fragment key={artist}>
              <a href='#' className='hover:text-neutral-500'>
                {artist}
              </a>
              {artistIndex !== artists.length - 1 && ', '}
            </Fragment>
          ))}
        </span>
      </div>
    </div>
  )
}

const MemoizedTrackDetails = memo(TrackDetails)

export { MemoizedTrackDetails as TrackDetails }
