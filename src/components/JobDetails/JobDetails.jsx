import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { JobsContext } from "../../App";

const JobDetails = () => {
  const allJobs = useContext(JobsContext || []);
  const { id: jobID } = useParams();
  
//   const [job, setJob] = useState({})
//   useEffect(()=>{
//     if (allJobs) {       
        const clickedJob =  allJobs.find( j => j.id == jobID)
    //     setJob(clickedJob)
    // }
    // },[])
    const {description,responsibilities,educationalRequirements,experiences,salary,jobTitle,contactInformation,address,companyName } = clickedJob

  return (
    <div>
      <h3>This is job details component</h3>
      <h2 className="text-2xl font-bold">{jobTitle} at {companyName}</h2>
      <p>{description}</p>
      <p>{responsibilities}</p>

    </div>
  );
};

export default JobDetails;
