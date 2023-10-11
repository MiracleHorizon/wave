import { type CSSProperties, type InputHTMLAttributes, useMemo } from 'react'
import { twJoin } from 'tailwind-merge'

import styles from './RangeSlider.module.css'

export function RangeSlider(props: Props) {
  const { value, min, max } = props

  const style = useMemo(() => {
    const MAX_PERCENT = 100
    const bgPercentage = ((value - min) * MAX_PERCENT) / (max - min)
    const backgroundSize = (bgPercentage > 0 ? bgPercentage : 0) + '%'
    return { backgroundSize } as CSSProperties
  }, [value, min, max])

  return (
    <input
      type='range'
      style={style}
      className={twJoin(
        'relative z-20 h-[8px] w-full cursor-pointer rounded-[14px] border-none',
        'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-no-repeat',
        styles.root
      )}
      {...props}
    />
  )
}

interface Props
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'max' | 'min' | 'step' | 'type' | 'className' | 'style'
  > {
  value: number
  min: number
  max: number
  step: number
}
