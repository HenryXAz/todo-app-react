import { v4 as uuidv4 } from 'uuid'
import { useForm } from 'react-hook-form'

export default function Form({ todo, handleAddTodo }) {
    const { register, reset, handleSubmit } = useForm()

    const onSubmit = (data) => {

        handleAddTodo({
            id: uuidv4(),
            title: data.title,
            completed: false,
        })


        reset({
            title: '',
        })
    }

    return (
        <div className="max-w-lg mx-auto flex gap-2 mt-5">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex gap-2 w-full justify-between"
            >
                <input
                    className="p-2 border border-gray-400 w-2/3"
                    type="text"
                    placeholder="nueva tarea"
                    {...register('title')}
                    defaultValue={todo.title}
                />

                <button
                    className="p-2 rounded-md bg-emerald-500 outline focus:outline-emerald-500/50 text-gray-100 w-1/3"
                    type="submit"
                >
                    Agregar
                </button>
            </form>
        </div>
    )
}