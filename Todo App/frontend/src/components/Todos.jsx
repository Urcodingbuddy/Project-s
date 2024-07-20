export function Todos({ todos, onTodoDeleted }) {
    return (<div>
        {
            todos.map(function (todo) {
                return <div key={todo._id}>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button  onClick={() => onTodoDeleted(todo._id)}>
                        
                        {todo.completed ? "Completed" : "Mark as Completed"}</button>
                </div>
            })
        }
    </div>);
}