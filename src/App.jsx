import { createContext, useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import { Outlet, useLoaderData } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const JobsContext = createContext([])
export const AppliedJobsContext = createContext([])


function App() {
  const {jobs,iniTialAppliedJobs}= useLoaderData()

  const [appliedJobs, setAppliedJobs]= useState(iniTialAppliedJobs)
  return (
    <JobsContext.Provider value={jobs}>
     <AppliedJobsContext.Provider value={[appliedJobs, setAppliedJobs]}>
     <div className='bg-slate-100'>
     <Header></Header>
     </div>
     <Outlet></Outlet>
    <ToastContainer></ToastContainer>
    </AppliedJobsContext.Provider>
    </JobsContext.Provider>
  )
}

export default App
