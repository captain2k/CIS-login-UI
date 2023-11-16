import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import './assets/styles/style.scss'
import { KeycloakProvider } from './providers/KeycloakProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <KeycloakProvider>
      <App />
    </KeycloakProvider>
  </React.StrictMode>,
)
