import { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskForm() {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const { createTask } = useContext(TaskContext);
	const handleSubmit = (e) => {
		e.preventDefault();

		if (title !== '' && description !== '') {
			createTask(title, description);
		} else {
			alert('por favor complete los campos para crear una nueva tarea');
		}
	};

	const getData = (e) => {
		if (e.target.id == 'title') {
			setTitle(e.target.value);
		}
		if (e.target.id == 'description') {
			setDescription(e.target.value);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="p-10 max-w-md mx-auto">
			<input
				className="p-3 w-full border bg-slate-700 text-white border-slate-400 rounded-md mb-2 placeholder:text-slate-500 focus:outline-cyan-500 focus:outline"
				type="text"
				id="title"
				placeholder="escribe tu tarea"
				onChange={getData}
			/>
			<input
				className="p-3 w-full border bg-slate-700 text-white border-slate-400 rounded-md mb-2 placeholder:text-slate-500 focus:outline-cyan-500 focus:outline"
				type="text"
				id="description"
				placeholder="escribe tu descripcion"
				onChange={getData}
			/>
			<button className="rounded-md p-2 text-white border border-emerald-300 hover:bg-emerald-500 bg-emerald-600">
				Enviar Tarea
			</button>
		</form>
	);
}

export default TaskForm;
