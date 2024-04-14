import { useContext } from 'react';
import TaskCard from './TaskCard.jsx';
import { TaskContext } from '../context/TaskContext';
function TaskList() {
	const { tasks } = useContext(TaskContext);
	if (tasks.length === 0) {
		return (
			<h1 className="text-white font-bold text-3xl m-auto text-center">
				There aren&apos;t tasks yet.
			</h1>
		);
	}
	return (
		<div className="grid grid-cols-4 gap-2 mt-5 p-4 max-md:grid-cols-3 max-sm:grid-cols-2">
			{tasks.map((task) => (
				<TaskCard key={task.id} task={task} />
			))}
		</div>
	);
}

export default TaskList;
