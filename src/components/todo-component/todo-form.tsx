import { TodoContext } from "../../context/todo-context";
import { observer } from "mobx-react-lite";
import React, { useContext, useRef } from "react";
import { computed } from "mobx";

const TodoForm = observer(() => {
    console.log("Todo Form");

    const { todoStore, loaderStore } = useContext(TodoContext);
    const inputField: any = useRef(null);

    const handleAddTodo = () => {
        const text = inputField?.current?.value;
        if (text.length > 0) todoStore.addTodo(text);
        inputField.current.value = "";
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        inputField.current.value = e.target.value;
    }
    const name = "Add Todo - " + (todoStore.getTodos.length + 1);
    const loaderStatus = computed(() => loaderStore?.loader?.find(item => item.name === name)?.status).get();

    return (
        <section className="flex flex-row items-center mt-6 border-b pb-2">
            <h3 className="mr-4">Todo Form:</h3>
            <form onSubmit={(e) => { e.preventDefault(); handleAddTodo(); }}>
                <input ref={inputField} required placeholder="Enter todo text" onChange={e => handleChange(e)}
                    className="border-2 mr-4 p-1 px-4" type="text" />
                <button type="submit" className="bg-primary text-white rounded-md p-1 px-4 mr-4">Add Todo</button>
                {loaderStatus === "Loading" ? <span className="text-slate-500">Adding new todo...</span> : ""}
                {loaderStatus === "Failed" ? <span className="text-red-500">Adding new todo is failed!</span> : ""}
            </form>
        </section>
    )
});

export default TodoForm;