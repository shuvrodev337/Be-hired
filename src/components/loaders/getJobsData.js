// import { getStoredCart } from '../utils/fakeDB'

import { getStoredJobs } from "../utilities/fakeDB";

export const getJobsData = async () => {
  const jobsData = await fetch("/jobs.json");
  const jobs = await jobsData.json();

  const storedJobs = getStoredJobs()
  const iniTialAppliedJobs=[]
  for (const id in storedJobs) {
    const appliedJob = jobs.find(job=> job.id == id)
    iniTialAppliedJobs.push(appliedJob)
  }

  return { jobs , iniTialAppliedJobs};
};
