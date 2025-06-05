import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index-2.css'
import App from './index-2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)