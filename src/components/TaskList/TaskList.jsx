import React from "react";
import AccepTask from "./AccepTask";
import CompleteTask from "./CompleteTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";

function TaskList({ data }) {
  return (
    <div
      id="tasklist"
      className=" h-[55%] mt-16 flex flex-nowrap gap-8 overflow-scroll"
    >
      {data?.tasks?.map((ele, index) => {
        if (ele?.active) return <AccepTask key={index} data={ele} />;
        if (ele?.newTask) return <NewTask key={index} data={ele} />;
        if (ele?.completed) return <CompleteTask key={index} data={ele} />;
        if (ele?.failed) return <FailedTask key={index} data={ele} />;
      })}
    </div>
  );
}

export default TaskList;
