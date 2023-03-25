import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CustomSettingsProvider } from './context/ControllersContext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CustomSettingsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CustomSettingsProvider>
)
