import React from "react";
import Header from "../others/Header";
import TaskListNumber from "../others/TaskListNumber";
import CreateTask from "../others/CreateTask";

function AdminDashboard() {
  return (
    <div className="p-14 ">
      <Header></Header>
      <CreateTask />

      <div className="h-72 overflow-auto bg-gray-950 text-white p-8 mt-11 rounded-xl flex flex-col gap-4">
        <div className="bg-blue-600 flex justify-between items-center p-4 rounded-xl">
          <h2 className="text-2xl font-bold">Sarthak</h2>
          <h3 className="text-xl">Make a UI Design</h3>
          <h5 className="text-xl">Status</h5>
        </div>

        <div className="bg-yellow-500 flex justify-between items-center p-4 rounded-xl">
          <h2 className="text-2xl font-bold">Sarthak</h2>
          <h3 className="text-xl">Make a UI Design</h3>
          <h5 className="text-xl">Status</h5>
        </div>
        <div className="bg-green-600 flex justify-between items-center p-4 rounded-xl">
          <h2 className="text-2xl font-bold">Sarthak</h2>
          <h3 className="text-xl">Make a UI Design</h3>
          <h5 className="text-xl">Status</h5>
        </div>

        <div className="bg-red-500 flex justify-between items-center p-4 rounded-xl">
          <h2 className="text-2xl font-bold">Sarthak</h2>
          <h3 className="text-xl">Make a UI Design</h3>
          <h5 className="text-xl">Status</h5>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
