import Task from "./Task";

function TasksList() {
	const taskItemsList = [
		"Follow Edukasyon.ph on Facebook.", // 0
		"Follow AWS Siklab Pilipinas on Facebook.", // 1
		"Follow Zuitt Coding Bootcamp on Facebook." // 2
	];

	return (
		<div>
			<input className="task-input"/>
			<ul>
				{taskItemsList.map((task, index) => {
					return <Task key={index} taskName={task} />;
				})}
				</ul>
		</div>
	);
}

export default TasksList;
