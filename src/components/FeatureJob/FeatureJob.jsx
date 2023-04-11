import React from "react";

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
      <p className="text-base font-medium text-gray-700 mt-auto">
        {location} {salary}
      </p>
    </div>
  );
};

export default FeatureJob;
