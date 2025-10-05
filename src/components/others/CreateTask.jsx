import React from "react";

function CreateTask() {
  return (
    <div className="bg-gray-950 text-white p-8 mt-11 rounded-xl">
      <form
        action=""
        className="flex flex-col justify-between md:flex-row gap-14"
      >
        <div className="left-side w-full flex flex-col gap-6 ">
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="task" className="text-xl">
              Task Title
            </label>
            <input
              type="text"
              placeholder="Make a UI design"
              className="border border-gray-300 outline-none px-2 py-2 rounded-md placeholder:text-white"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="date" className="text-xl">
              Date
            </label>
            <input
              type="date"
              className="border border-gray-300 outline-none px-2 py-2 rounded-md placeholder:text-white"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="assignto" className="text-xl">
              Assign to
            </label>
            <input
              type="text"
              placeholder="Employee name"
              className="border border-gray-300 outline-none px-2 py-2 rounded-md placeholder:text-white"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="category" className="text-xl">
              Category
            </label>
            <input
              type="text"
              placeholder="Design,dev,etc"
              className="border border-gray-300 outline-none px-2 py-2 rounded-md placeholder:text-white"
            />
          </div>
        </div>
        <div className="w-full flex flex-col justify-between gap-4  md:gap-2">
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="description" className="text-xl">
              Description
            </label>
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              className="border border-gray-300 outline-none px-2 py-2 rounded-md placeholder:text-white"
            ></textarea>
          </div>
          <button className="bg-green-600 p-3 rounded-md text-xl cursor-pointer hover:bg-green-500 transition-all duration-200">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
