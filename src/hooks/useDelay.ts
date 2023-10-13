import { useEffect, useState } from 'react'

export function useDelay(delay: number) {
  const [value, setValue] = useState(false)

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setValue(true)
    }, delay)

    return () => {
      clearTimeout(delayTimeout)
    }
  }, [delay])

  return value
}
