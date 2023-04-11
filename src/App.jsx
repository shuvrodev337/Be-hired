import { createContext, useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import { Outlet, useLoaderData } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const JobsContext = createContext([])


function App() {
  const {jobs,appliedJobs}= useLoaderData()

  return (
    <JobsContext.Provider value={[jobs,appliedJobs]}>
     
     <div className='bg-slate-100'>
     <Header></Header>
     </div>
     <Outlet></Outlet>
    <ToastContainer></ToastContainer>
    </JobsContext.Provider>
  )
}

export default App
