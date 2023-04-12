import React, { useContext, useState } from "react";
import { AppliedJobsContext } from "../../App";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useContext(AppliedJobsContext || []);

  const [value, setValue] = useState(null);
  let filteredJobs;

  if (value) {
    const filteredAppliedJobs= appliedJobs.filter(job => job.remoteOrOnsite === value)

    // setAppliedJobs(filteredAppliedJobs)

    console.log(filteredAppliedJobs);
    filteredJobs= filteredAppliedJobs
  } 
  // let allAppliedJobs = [...appliedJobs];
  // let onsiteJobs;
  // let remoteJobs;

  // const handleChange = (event) => {
  //   setValue(event.target.value);

  //   if (value === "onsite") {
  //     console.log('hello onsite');
  //     onsiteJobs = allAppliedJobs.filter((job) => job.remoteOrOnsite === "Onsite");
  //     setAppliedJobs(onsiteJobs);
  //   } else if (value === "remote") {
  //     console.log("hello remote");

  //     remoteJobs = allAppliedJobs.filter((job) => job.remoteOrOnsite === "Remote");
  //     setAppliedJobs(remoteJobs);
  //   }
  // };

  // const onsiteJobs = appliedJobs.filter(
  //     (job) => job.remoteOrOnsite === "Onsite"
  //   );
  // const remoteJobs = appliedJobs.filter(
  //   (job) => job.remoteOrOnsite === "Remote"
  // );

  return (
    <>
      <div className="flex justify-center items-center h-full p-20 bg-slate-100 ">
        <h3 className="text-5xl font-bold">Applied Jobs</h3>
      </div>
      <div className="mx-auto px-4 py-12  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 space-y-4 ">
        <div className="text-right text-xl py-6">
          
            <select defaultValue={"Select"} onChange={(e) => setValue(e.target.value)} className="drop-down">
              
              <option value="Select" disabled>Filter By</option>
              <option value="Onsite">Onsite</option>
              <option value="Remote">Remote</option>
            </select>
          
        </div>

        {!value? appliedJobs.map((appliedJob) => (
          <AppliedJob key={appliedJob.id} appliedJob={appliedJob}></AppliedJob>
        ))
        : filteredJobs.map((appliedJob) => (
          <AppliedJob key={appliedJob.id} appliedJob={appliedJob}></AppliedJob>
        ))}
        {/* {appliedJobs.map((appliedJob) => (
          <AppliedJob key={appliedJob.id} appliedJob={appliedJob}></AppliedJob>
        ))} */}
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

{
  /* <div>
          <label>
            Filter By:
            <select value={value} onChange={handleChange}>
              <option value="onsite">On Site</option>

              <option value="remote">Remote</option>
            </select>
          </label>
        </div> */
}
