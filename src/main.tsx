import { StrictMode } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import ReactDOM from 'react-dom/client'

import { App } from './App'
import { store } from '@store/store.ts'
import './index.css'

const ROOT_ID_SELECTOR = '#root'
const rootElement = document.querySelector(ROOT_ID_SELECTOR) as HTMLElement
const appRoot = ReactDOM.createRoot(rootElement)

appRoot.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </StrictMode>
)
