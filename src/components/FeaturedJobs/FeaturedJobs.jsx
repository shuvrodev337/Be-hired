import React, { useContext, useState } from "react";
import { JobsContext } from "../../App";
import FeatureJob from "../FeatureJob/FeatureJob";

const FeaturedJobs = () => {
  const jobs = useContext(JobsContext || []);
  const [seeAll, setSeeAll] = useState(false)

  return (
    <div className=" mx-auto px-4 py-12  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 items-center">
      <div className="text-center space-y-3">
        <h3 className="text-5xl font-bold">Featured Jobs</h3>
        <p className="text-base font-medium text-gray-700">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="sm:space-y-4 md:grid grid-cols-2 gap-4 py-8 items-baseline">
        {
            jobs.map(job => <FeatureJob key={job.id} job={job}></FeatureJob>)
        }
      </div>
      <div className="flex justify-center items-center h-full">
      <button  className="btn-primary ">See All Jobs</button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
