import TodoItem from "./TodoItem";

export default function TodoList({todos, handleCompleted, handleUpdateTodo, handleDeleteTodo})
{
    return(
        <ul className="mt-6 rounded-md max-w-xl mx-auto ">
            {
                todos.map(todo => (
                    <div key={todo.id}>
                        <TodoItem 
                            todo={todo} 
                            handleCompleted={handleCompleted} 
                            handleUpdateTodo={handleUpdateTodo}
                            handleDeleteTodo={handleDeleteTodo}
                        />
                    </div>
                ))
            }
        </ul>
    )
}