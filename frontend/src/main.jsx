import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import Navigation from './routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navigation />
  </StrictMode>,
)
