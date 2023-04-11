import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'

const FeatureJob = ({ job }) => {
  const {
    companyLogo,
    jobTitle,
    companyName,
    remoteOrOnsite,
    fulltimeOrPartTime,
    salary,
    location
  } = job;
  return (
    <div className="border-2 border-slate-100 rounded-md p-6 space-y-2 flex flex-col overflow-hidden">
      <img src={companyLogo} className="w-20 h-20 object-cover" alt="company-logo" />
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
      <p className="text-base font-medium text-gray-700 mt-auto pr-4">{location}</p>
      
      <CurrencyDollarIcon className="h-6 w-6 text-blue-500" />
      <p className="text-base font-medium text-gray-700 mt-auto">Salary: {salary}</p>
      </div>
      
      <button className="font-medium md:mb-0  px-2 py-1 md:py-1 rounded-md text-base text-white bg-purple-500 w-1/3">View Details</button>

    </div>
  );
};

export default FeatureJob;
