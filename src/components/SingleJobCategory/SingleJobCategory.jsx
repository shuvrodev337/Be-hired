import React from "react";

const SingleJobCategory = ({ jobCategory }) => {
  // console.log(jobCategory);
  const { categoryName, jobsAvailable, imageUrl } = jobCategory;
  return (
    <div className="bg-slate-100 rounded p-6 space-y-2 flex flex-col overflow-hidden">
        <img src={imageUrl} className="w-20 h-20" alt="" />
      <h5 className="text-lg font-bold">{categoryName}</h5>
      <p className="text-base font-medium text-gray-700 mt-auto">
        {jobsAvailable}+ Jobs Available
      </p>
    </div>
  );
};

export default SingleJobCategory;
