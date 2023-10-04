import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import {
  type ActionCreatorsMapObject,
  bindActionCreators
} from '@reduxjs/toolkit'

export function useActions<T extends ActionCreatorsMapObject<unknown>>(
  actionCreators: T
): T {
  const dispatch = useDispatch()

  return useMemo(
    () => bindActionCreators(actionCreators, dispatch),
    [actionCreators, dispatch]
  )
}
