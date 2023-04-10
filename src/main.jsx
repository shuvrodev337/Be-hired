import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Body from './components/Body/Body';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import JobDetails from './components/JobDetails/JobDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    children:[
      {
        path:'/',
        element:<Body></Body>
      },
      {
        path:'/applied-jobs',
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path:'/job-details',
        element:<JobDetails></JobDetails>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
