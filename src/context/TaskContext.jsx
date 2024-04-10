import { createContext, useState, useEffect } from 'react';
import { tasks as data } from '../data/tasks.js';

export const TaskContext = createContext();

export function TaskContextProvider(props) {
	const [tasks, setTasks] = useState([]);

	function createTask(title, description) {
		setTasks([
			...tasks,
			{
				id: tasks.length,
				title,
				description,
			},
		]);
	}
	function deleteTask(id) {
		setTasks(tasks.filter((task) => task.id !== id));
	}
	useEffect(() => {
		setTasks(data);
	}, []);
	return (
		<TaskContext.Provider
			value={{
				tasks: tasks,
				createTask: createTask,
				deleteTask: deleteTask,
			}}
		>
			{props.children}
		</TaskContext.Provider>
	);
}
