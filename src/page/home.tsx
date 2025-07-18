import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import Header from '../components/home/header'
import VideoHoatDong from '../components/home/videoHoatDong'
import Logo from '../assets/logo.png'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header logo = {Logo} />
    <div className='ml-70'>
        <VideoHoatDong />
    </div>
  </StrictMode>,
)
