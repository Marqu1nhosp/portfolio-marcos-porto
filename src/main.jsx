import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home'
import './styles/global.css'
import '../src/pages/Home/styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
