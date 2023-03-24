import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {CustomSettingsProvider} from './context/ControllersContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomSettingsProvider>
      <App />
    </CustomSettingsProvider>
  </React.StrictMode>
)
