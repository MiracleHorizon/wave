import { useSelector, type TypedUseSelectorHook } from 'react-redux'

import type { RootState } from '@store/types.ts'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
