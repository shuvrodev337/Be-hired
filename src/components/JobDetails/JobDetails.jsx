import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { JobsContext } from "../../App";
import { addToDb } from "../utilities/fakeDB";
import { toast } from "react-toastify";

const JobDetails = () => {
  const [allJobs] = useContext(JobsContext || []);
  const { id: jobID } = useParams();

  //   const [job, setJob] = useState({})
  //   useEffect(()=>{
  //     if (allJobs) {
  const clickedJob = allJobs.find((j) => j.id == jobID);
  //     setJob(clickedJob)
  // }
  // },[])
  const {
    description,
    responsibilities,
    educationalRequirements,
    experiences,
    salary,
    jobTitle,
    contactInformation,
    address,
    id
  } = clickedJob;


const handleApplyNow = appliedJobID =>{
    addToDb(appliedJobID)
}

  return (
    <>
    <div className="flex justify-center items-center h-full p-20 bg-slate-100 ">
        <h3 className="text-5xl font-bold">Job Details</h3>
      </div>
    
    <div className="mx-auto px-4 py-12  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24">
      <div className="space-y-4 md:grid grid-cols-2 py-20 gap-20 items-center">
        <div className="space-y-6">
          <p>
            <span className="text-lg font-semibold">Job Description:</span>{" "}
            {description}{" "}
          </p>
          <p>
            <span className="text-lg font-semibold">Job Responsibility:</span>{" "}
            {responsibilities}
          </p>
          <p>
            <span className="text-lg font-semibold">Job Responsibility:</span>{" "}
            {educationalRequirements}
          </p>
          <p>
            <span className="text-lg font-semibold">Experiences:</span>{" "}
            {experiences}
          </p>
        </div>
        <div>
          <div className="bg-slate-100 rounded-md p-8 space-y-5 divide-y">
            <h5 className="text-lg font-semibold">Job Details</h5>
            <div className="pt-4 space-y-3">
              <p>
                <span className="text-base font-semibold">Salary: </span>{" "}
                {salary}
              </p>
              <p>
                <span className="text-base font-semibold">Job Title: </span>{" "}
                {jobTitle}
              </p>
              <h5 className="text-lg font-semibold">Contact Information</h5>
            </div>
            <div>
              <p>
                <span className="text-base font-semibold">Phone: </span>
                {contactInformation.phone}
              </p>
              <p>
                <span className="text-base font-semibold">Email: </span>
                {contactInformation.email}
              </p>
              <p>
                <span className="text-base font-semibold">Address: </span>
                {address}
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center py-6">
            <button onClick={()=>handleApplyNow(id)} className="font-medium  py-2  rounded-md text-lg text-white bg-purple-500 w-full">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default JobDetails;
