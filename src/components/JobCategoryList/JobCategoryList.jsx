import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleJobCategory from "../SingleJobCategory/SingleJobCategory";

const JobCategoryList = () => {
  // const jobCategories = useLoaderData()
  const [jobCategories, setJobCategories] = useState([])

  useEffect(()=>{
    fetch('jobCategory.json')
    .then(res=> res.json())
    .then(data=> setJobCategories(data))
  },[])

console.log(jobCategories);

  
  return (
    <div className=" mx-auto px-4 py-12  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 items-center">
      <div className="text-center space-y-3">
        <h3 className="text-5xl font-bold">Job Category List</h3>
        <p className="text-base font-medium text-gray-700">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
        
        {
            jobCategories.map(jobCategory=> <SingleJobCategory key={jobCategory.id} jobCategory={jobCategory} ></SingleJobCategory>)
        }
      </div>
    </div>
  );
};

export default JobCategoryList;
