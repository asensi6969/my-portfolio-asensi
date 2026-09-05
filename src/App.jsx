import React from 'react'
import Sidebar from './Components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Portfolio from './Pages/Portfolio/Portfolio'
import Experiences from './Pages/Experiences'

const App = () => {
  return (
    <div className='bg-gradient-to-l from-black via-zinc-900 to-emerald-600 min-h-screen'>
      <div className='flex w-full'>

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className='flex-1 flex justify-center px-10 py-6 mb-10'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/Portfolio' element={<Portfolio />} />
            <Route path='/Experiences' element={<Experiences />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>
        </div>

      </div>
    </div>
  )
}

export default App