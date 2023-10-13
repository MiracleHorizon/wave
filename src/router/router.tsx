import { createBrowserRouter } from 'react-router-dom'

import { HomePage } from '@pages/home.tsx'
import { RouteEnum } from '@router/route.ts'

export const router = createBrowserRouter([
  {
    path: RouteEnum.HOME,
    element: <HomePage />
  }
])
