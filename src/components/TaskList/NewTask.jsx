import React from "react";

function NewTask({ data }) {
  return (
    <div className="h-10/12 w-80 shrink-0  bg-purple-400 rounded-2xl rounded-2xl  p-3 pb-10 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <p className="bg-red-500 px-4 py-2 text-white font-bold rounded-md">
          {data?.category}
        </p>
        <p className="text-white text-lg font-semibold">{data?.taskDate}</p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl text-white font-bold">{data?.taskTitle}</h2>
        <p className="text-sm text-white">{data?.taskDescription}</p>
      </div>
      <div className="w-full">
        <button className="bg-green-500 w-full py-1 px-2 rounded-md text-white">
          New Task
        </button>
      </div>
    </div>
  );
}

export default NewTask;
