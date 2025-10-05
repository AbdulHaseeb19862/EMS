import React from "react";

function AccepTask({ data }) {
  return (
    <div className="min-h-10/12 w-80 shrink-0  bg-red-300 rounded-2xl  p-3  flex flex-col  gap-6">
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
      <div className="flex justify-between gap-3 self-end">
        <button className="bg-green-500 px-2 py-1 text-white  rounded-md ">
          Mark as Completed
        </button>
        <button className="bg-red-500 px-2 py-1 rounded-md text-white ">
          Mark as Failed
        </button>
      </div>
    </div>
  );
}

export default AccepTask;
