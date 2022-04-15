export function TodoText({ todo, handleStatus }) {
	return (
		<div className="h1">
			<h1>
				{todo.title} - {todo.status ? 'Done' : 'Not Done'}
			</h1>
			<button onClick={() => handleStatus(todo.id)}>Toggle</button>
		</div>
	);
}