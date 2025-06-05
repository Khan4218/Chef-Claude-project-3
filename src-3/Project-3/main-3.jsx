import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index-3.css'
import App from './index-3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)