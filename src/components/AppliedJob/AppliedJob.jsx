import React, { useState } from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const AppliedJob = ({ appliedJob }) => {
  const {
    companyLogo,
    jobTitle,
    companyName,
    remoteOrOnsite,
    fulltimeOrPartTime,
    salary,
    location,
    id,
  } = appliedJob;

  
  return (
    
      
      
      
      <div className=" md:flex justify-between p-3 items-center border-2 border-slate-100 rounded-lg">
        <div className="space-y-3 md:flex items-center gap-6">
          <div className="p-6 bg-slate-200 rounded-lg">
            <img
              src={companyLogo}
              className="w-20 h-20 object-cover"
              alt="company-logo"
            />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold">{jobTitle}</h3>
            <p className="text-base font-medium text-gray-700 mt-auto">
              {companyName}
            </p>
            <div className="flex gap-2">
              <button className="btn-outlined">{remoteOrOnsite}</button>
              <button className="btn-outlined">{fulltimeOrPartTime}</button>
            </div>
            <div className="flex gap-2">
              <MapPinIcon className="h-6 w-6 text-blue-500" />
              <p className="text-base font-medium text-gray-700 mt-auto pr-4">
                {location}
              </p>

              <CurrencyDollarIcon className="h-6 w-6 text-blue-500" />
              <p className="text-base font-medium text-gray-700 mt-auto">
                Salary: {salary}
              </p>
            </div>
          </div>
        </div>
        <Link to={`/job/${id}`}>
          <button className="font-medium mt-3 md:mt-0 md:mb-0  px-9 py-2 md:py-2 rounded-md text-base text-white bg-purple-500 ">
            View Details
          </button>
        </Link>
      </div>
    
  );
};

export default AppliedJob;
