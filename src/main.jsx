import React from 'react'
import ReactDOM from 'react-dom/client'
import AppHeader from './AppHeader.jsx'
import AppFooter from './AppFooter.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('header')).render(
  <React.StrictMode>
    <AppHeader />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('footer')).render(
  <React.StrictMode>
    <AppFooter />
  </React.StrictMode>,
)