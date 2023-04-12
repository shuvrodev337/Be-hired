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
import Statictics from './components/Statistics/Statictics';
import Blog from './components/Blog/Blog';
import { getJobsData } from './components/loaders/getJobsData';
import ErrorPage from './components/ErrorPage/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    loader:getJobsData ,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Body></Body>
        
      },
      {
        path:'/applied-jobs',
        element:<AppliedJobs></AppliedJobs>,
        loader:getJobsData
      },
      {
        path:'/job/:id',
        element:<JobDetails></JobDetails>
      },
      {
        path:'/statictics',
        element:<Statictics></Statictics>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
