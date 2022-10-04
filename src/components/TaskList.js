import React from "react";
import Task from "./Task";

function TaskList({ tasks,click }) {
  let tasksList = tasks.map((task, ind) =>
    <Task
      key={ind}
      task={task}
      text={task.text}
      category={task.category}
      click={click} />)
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasksList}
    </div>
  );
}

export default TaskList;
