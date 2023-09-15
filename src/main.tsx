import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App'
import './index.css'

const rootElement = document.querySelector('#root') as HTMLElement
const appRoot = ReactDOM.createRoot(rootElement)

appRoot.render(
  <StrictMode>
    <App />
  </StrictMode>
)
