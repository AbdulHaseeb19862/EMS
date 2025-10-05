import React from "react";

function TaskListNumber({ data }) {
  return (
    <div className="flex flex-wrap gap-6 mt-10 md:flex-nowrap">
      <div className="w-full md:w-[45%] bg-blue-500 rounded-3xl p-10 text-white ">
        <h2 className="text-2xl font-bold">{data?.taskCounts.active}</h2>
        <h3 className="text-2xl font-bold">New Tasks</h3>
      </div>
      <div className="w-full md:w-[45%] bg-red-300 rounded-3xl p-10 text-white ">
        <h2 className="text-2xl font-bold">{data?.taskCounts.completed}</h2>
        <h3 className="text-2xl font-bold">Completed Tasks</h3>
      </div>
      <div className="w-full md:w-[45%] bg-yellow-400 rounded-3xl p-10 text-white ">
        <h2 className="text-2xl font-bold">{data?.taskCounts.newTask}</h2>
        <h3 className="text-2xl font-bold">Accepted Tasks</h3>
      </div>
      <div className="w-full md:w-[45%] bg-green-400 rounded-3xl p-10 text-white ">
        <h2 className="text-2xl font-bold">{data?.taskCounts.failed}</h2>
        <h3 className="text-2xl font-bold">Failed Tasks</h3>
      </div>
    </div>
  );
}

export default TaskListNumber;
