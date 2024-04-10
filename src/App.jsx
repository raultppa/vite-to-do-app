import TaskList from './components/TaskList.jsx';
import TaskForm from './components/TaskForm.jsx';

function App() {
	return (
		<main className="min-h-screen bg-slate-800">
			<div className="container mx-auto ">
				<TaskForm />
				<TaskList />
			</div>
		</main>
	);
}

export default App;
