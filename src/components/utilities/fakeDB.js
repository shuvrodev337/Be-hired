import { toast } from "react-toastify"

// use local storage to manage job data
const addToDb = id => {
  let appliedJobs = {}

  //get the applied jobs from local storage
  const storedjobs = localStorage.getItem('applied-jobs')
  if (storedjobs) {
    appliedJobs = JSON.parse(storedjobs)
  }

  // check if already applied or not
  const timesApplied = appliedJobs[id]
  if (timesApplied) {
    toast.error("Can Not Apply Again! You Have Already applied for This Job before!!");
  } else {
    appliedJobs[id] = 'applied'
    toast.success("Congratulations!! You Have Now Applied for This job!!");
  }
  localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs))
}


const getStoredJobs = () => {
  let appliedJobs = {}

  //get the stored jobs from local storage
  const storedJobs = localStorage.getItem('applied-jobs')
  if (storedJobs) {
    appliedJobs = JSON.parse(storedJobs)
  }
  return appliedJobs
}



export { addToDb, getStoredJobs}
