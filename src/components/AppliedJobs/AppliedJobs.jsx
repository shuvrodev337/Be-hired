import React, { useContext } from "react";
import { JobsContext } from "../../App";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const [allJobs, appliedJobs] = useContext(JobsContext || []);
  console.log(appliedJobs);

  return (
    <>
    <div className="flex justify-center items-center h-full p-20 bg-slate-100 ">
      <h3 className="text-5xl font-bold">Applied Jobs</h3>
    </div>
    {
        appliedJobs.map(appliedJob => <AppliedJob key={appliedJob.id} appliedJob={appliedJob}></AppliedJob>)

    }
    </>
  );
};

export default AppliedJobs;
