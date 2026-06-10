"use client";
import { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

type TodoItem = {
    task: string;
    time: string;
};

export default function Dashboard() {
    const [task, setTask] = useState("");
    const [time, setTime] = useState("");
    const [todos, setTodos] = useState<TodoItem[]>([]);

    const addTodo = () => {
        if (!task.trim()) return;

        setTodos([...todos, { task: task.trim(), time }]);
        setTask("");
        setTime("");
    };

    const deleteTodo = (index: number) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };
    useEffect(() => {
        const savedTodos = localStorage.getItem("todos");

        if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div className=" min-h-[60vh] md:min-h-screen pt-30  justify-center  rounded-t-none " style={{
            backgroundImage: "url('/dashbg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>

            <h1 className="text-3xl font-bold p-10">Welcome to the Dashboard</h1>
            <div className="md:flex  items-center justify-center h-full bg-transparent bg-opacity-70 rounded-lg p-10 gap-3" >
                <input  value={task}  onChange={(e) => setTask(e.target.value)}   type="text" className="bg-white p-3 rounded w-full md:w-auto mb-2"  placeholder="Enter your task..."
                  
                   
                />
                <input  value={time}   onChange={(e) => setTime(e.target.value)} type="time"
  className="bg-white p-3 rounded w-full md:w-auto mb-2"
                />

                <button className="bg-blue-500 w-full md:w-auto  text-white p-3 rounded cursor-pointer" onClick={addTodo}>Add Task</button>
            </div>

            <div>
                <h2 className="text-2xl font-bold p-10">Your Tasks</h2>
                <ul className="list-disc list-inside">
                    {
                        todos.length > 0 ? (
                            todos.map((todo, index) => (
                                <div className="flex items-center gap-3" key={index}>
                                    <li className="p-2 font-semibold">{todo.task} {todo.time ? `- ${todo.time}` : ""}</li>
                                    <button onClick={() => deleteTodo(index)}><MdDeleteOutline className="text-red-500 cursor-pointer" /></button>
                                </div>
                            ))
                        ) : (
                            <h1 className="text-xl font-semibold p-10">No tasks added yet!</h1>
                        )
                    }
                </ul>
            </div>
        </div>
    );
}