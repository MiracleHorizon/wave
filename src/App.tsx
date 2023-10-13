import { RouterProvider } from 'react-router-dom'

import { DefaultLayout } from '@layouts/default.tsx'
import { router } from '@router/router.tsx'

export function App() {
  return (
    <DefaultLayout>
      <RouterProvider router={router} />
    </DefaultLayout>
  )
}
