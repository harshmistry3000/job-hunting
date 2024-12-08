import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from './components/ui/sonner'
import { Button } from './components/ui/button'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Toaster/>
   
  </StrictMode>,
)
