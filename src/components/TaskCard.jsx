import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskCard({ task }) {
	const { deleteTask } = useContext(TaskContext);
	return (
		<div className="text-white p-4 rounded-md bg-slate-700 border-slate-500 border text-wrap break-words">
			<h1 className="text-xl font-bold capitalize">{task.title}</h1>
			<p className="text-slate-400 text-sm">{task.description}</p>
			<button
				className="bg-red-700 rounded-md p-2 mt-4 hover:bg-red-600 border border-red-400"
				onClick={() => deleteTask(task.id)}
			>
				Delete Task
			</button>
		</div>
	);
}

export default TaskCard;
