import { createContext, useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import { Outlet, useLoaderData } from 'react-router-dom'

export const JobsContext = createContext([])


function App() {
  const {jobs}= useLoaderData()

  return (
    <JobsContext.Provider value={jobs}>
     
     <div className='bg-slate-100'>
     <Header></Header>
     </div>
     <Outlet></Outlet>
    
    </JobsContext.Provider>
  )
}

export default App
