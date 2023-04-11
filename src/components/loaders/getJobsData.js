// import { getStoredCart } from '../utils/fakeDB'

export const getJobsData = async () => {
  const jobsData = await fetch('jobs.json')
  const jobs = await jobsData.json()


// console.log(jobs);
  return { jobs}
}
