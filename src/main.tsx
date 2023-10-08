import { StrictMode } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import ReactDOM from 'react-dom/client'

import { App } from './App'
import { store } from '@store/store.ts'
import { DOM_ROOT_ID } from '@shared/const.ts'
import './index.css'

const rootElement = document.querySelector(DOM_ROOT_ID) as HTMLElement
const appRoot = ReactDOM.createRoot(rootElement)

appRoot.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </StrictMode>
)
