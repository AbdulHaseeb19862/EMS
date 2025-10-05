import React from "react";
import Header from "../others/Header";
import TaskListNumber from "../others/TaskListNumber";
import TaskList from "../TaskList/TaskList";

function EmployeeDashboard({ data }) {
  return (
    <div className="bg-[#1c2c1c] min-h-screen w-full p-14">
      <Header data={data}></Header>
      <TaskListNumber data={data} />
      <TaskList data={data} />
    </div>
  );
}

export default EmployeeDashboard;
