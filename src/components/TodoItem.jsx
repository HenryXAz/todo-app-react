import { useState } from "react"
import { useForm } from 'react-hook-form'

export default function TodoItem({ todo,  handleCompleted, handleUpdateTodo, handleDeleteTodo }) {
    const {register, handleSubmit} = useForm()
    const [edit, setEdit] = useState(false)
    
    const handleChangeCompleted = (e) => {
        const completed = e.target.value

        handleCompleted(todo.id, todo.completed)
    }

    const handleEdit = () => {
        setEdit(true)
    }

    const onSubmit = (data) => {
        handleUpdateTodo(data.id, data.titleUpdated)
        setEdit(false)
    }

    const handleCancelEdit = () => {
        setEdit(false)
    }

    const handleDelete = () => {
        handleDeleteTodo(todo.id)
    }

    

    const completedColor = " bg-emerald-300 "

    return (
        <li 
            
            className={`${todo.completed ? completedColor : 'bg-white'} rounded-md flex gap-2 justify-between p-2 mb-5 my-6  shadow-xl`}>
            <div className="flex gap-2">
                {!edit && (
                    <p 
                    onClick={handleEdit}
                    className="hover:cursor-pointer"
                >
                    {todo.title}
                </p>
                )}

                {edit && (
                    <div >
                        <form 
                            onSubmit={handleSubmit(onSubmit)} className="flex gap-2"
                        >
                        <input type="hidden" 
                            name=""
                            {...register('id')}
                            defaultValue={todo.id} 
                        />
                        <input 
                        className="border border-indigo-500  p-1"
                        type="text" 
                        name="title" 
                        {...register('titleUpdated')}
                        defaultValue={todo.title} 
                        />
                        <button 
                            type="submit"
                            className="p-1 rounded-md bg-indigo-500 text-gray-200"
                        >
                            editar
                        </button>
                        <button 
                            onClick={handleCancelEdit}
                            className="p-1 rounded-md bg-slate-500 text-gray-200"
                        >
                            cancelar
                        </button>
                        </form>
                    </div>
                )}
            </div>
            <div className="flex gap-2">
                <input
                    onChange={handleChangeCompleted}
                    type="checkbox"
                    defaultChecked={todo.completed}
                    value={todo.completed}

                />
               
                <button 
                    onClick={handleDelete}
                    className="p-2 rounded-md bg-red-500 text-gray-200">
                    eliminar
                </button>
            </div>
        </li>
    )
}