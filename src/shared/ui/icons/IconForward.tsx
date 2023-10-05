import type { ClassNameProps } from '@interfaces/ClassNameProps.ts'

export function IconForward(props: ClassNameProps) {
  return (
    <svg
      width={32}
      height={32}
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M6.39621 6.78532C5.95613 6.46017 5.33337 6.77434 5.33337 7.32151V24.6785C5.33337 25.2257 5.95616 25.5398 6.39623 25.2147L18.1415 16.5358C18.5022 16.2693 18.5022 15.7299 18.1415 15.4634L6.39621 6.78532Z'
        fill='currentColor'
      />
      <path
        d='M23.5339 6.6667C23.1657 6.6667 22.8672 6.96518 22.8672 7.33337V24.6667C22.8672 25.0349 23.1657 25.3334 23.5339 25.3334H25.5339C25.9021 25.3334 26.2006 25.0349 26.2006 24.6667V7.33337C26.2006 6.96518 25.9021 6.6667 25.5339 6.6667H23.5339Z'
        fill='currentColor'
      />
    </svg>
  )
}
