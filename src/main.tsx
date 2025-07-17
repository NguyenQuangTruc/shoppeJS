import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header'
import Logo from './assets/logo.png'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header logo = {Logo} />
  </StrictMode>,
)
