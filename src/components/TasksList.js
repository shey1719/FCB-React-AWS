import { useState } from "react";
import Task from "./Task";

function TasksList() {
	const taskItemsList = [
		"Follow Edukasyon.ph on Facebook.", // 0
		"Follow AWS Siklab Pilipinas on Facebook.", // 1
		"Follow Zuitt Coding Bootcamp on Facebook." // 2
	];

const [taskValue, setTaskValue] = useState("Just another task");
console.log("taskValue: ", taskValue);

const inputChangeHandler = (e) => {
  setTaskValue(e.target.value)
}

	return (
		<div>
			<input
        className="task-input"
        placeholder="Create a new task"
        onChange={inputChangeHandler}
      />
			<ul>
				{taskItemsList.map((task, index) => {
					return <Task key={index} taskName={task} />;
				})}
				</ul>
		</div>
	);
}

export default TasksList;
