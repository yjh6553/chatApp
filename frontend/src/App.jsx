import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/login/Login'


function App() {
  return (
    <div className='p-4 h-screen justify-center flex items-center'>
      <Login/>
    </div>
  )
}

export default App
