import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { ThemeProvider } from '@emotion/react'
import { theme } from './theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
)
