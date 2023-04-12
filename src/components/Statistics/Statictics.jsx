import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const Statictics = () => {
  const assignmentMarks = [
    {id:1, assignmentName: 'Assignment-1', marks: 60 },
    {id:2, assignmentName: 'Assignment-2', marks: 60 },
    {id:3, assignmentName: 'Assignment-3', marks: 60 },
    {id:4, assignmentName: 'Assignment-4', marks: 60 },
    {id:5, assignmentName: 'Assignment-5', marks: 60 },
    {id:6, assignmentName: 'Assignment-6', marks: 60 },
    {id:7, assignmentName: 'Assignment-7', marks: 60 },
  ];

  return (
    <>
      <div className="flex justify-center items-center h-full p-20 bg-slate-100 ">
        <h3 className="text-5xl font-bold">Statistics</h3>
      </div>
      <div className="text-center space-y-3 py-4 bg-slate-100 ">
      <h3 className="text-2xl font-bold">My Assignment Marks</h3>
      <p className="text-base font-medium text-gray-700 mt-auto">
        Total assignments: 7
      </p>
      <p className="text-base font-medium text-gray-700 mt-auto">
        Average mark: 60/60
      </p>
      </div>
      <div className="mx-auto px-4 py-12  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart width={500} height={200} data={assignmentMarks}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="assignmentName" />
            <YAxis dataKey="marks" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="marks"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Statictics;
