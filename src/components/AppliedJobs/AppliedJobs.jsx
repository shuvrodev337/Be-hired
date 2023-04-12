import React, { useContext, useState } from "react";
import { AppliedJobsContext} from "../../App";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useContext(AppliedJobsContext || []);

  return (
    <>
      <div className="flex justify-center items-center h-full p-20 bg-slate-100 ">
        <h3 className="text-5xl font-bold">Applied Jobs</h3>
      </div>
      <div className="mx-auto px-4 py-12  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 space-y-4 ">
        

        {appliedJobs.map((appliedJob) => (
          <AppliedJob key={appliedJob.id} appliedJob={appliedJob}></AppliedJob>
        ))}
      </div>
    </>
  );
};

export default AppliedJobs;


// const [value, setValue] = useState("normal");

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

// const onsiteJobs = appliedJobs.filter(
//     (job) => job.remoteOrOnsite === "Onsite"
//   );
//   const remoteJobs = appliedJobs.filter(
//     (job) => job.remoteOrOnsite === "Remote"
//   );


{/* <div>
          <label>
            Filter By:
            <select value={value} onChange={handleChange}>
              <option value="onsite">On Site</option>

              <option value="remote">Remote</option>
            </select>
          </label>
        </div> */}