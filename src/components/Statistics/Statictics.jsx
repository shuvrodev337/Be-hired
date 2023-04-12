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
    { assignmentNumber: 1, marks: 60 },
    { assignmentNumber: 2, marks: 60 },
    { assignmentNumber: 3, marks: 60 },
    { assignmentNumber: 4, marks: 60 },
    { assignmentNumber: 5, marks: 60 },
    { assignmentNumber: 6, marks: 60 },
    { assignmentNumber: 7, marks: 60 },
  ];

  return (
    <>
      <div className="flex justify-center items-center h-full p-20 bg-slate-100 ">
        <h3 className="text-5xl font-bold">My Assignment Marks</h3>
      </div>
    <div className="mx-auto px-4 py-12  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24">
     <ResponsiveContainer width="100%" height={300}>
      <AreaChart width={500} height={200} data={assignmentMarks}>
      <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="assignmentNumber" />
        <YAxis dataKey="marks" />
        <Tooltip />
        <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
   </div>
    </>
   
  );
};

export default Statictics;
