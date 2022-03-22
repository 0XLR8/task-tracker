import { createContext, useEffect, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({children}) => {

    const [tasks, setTasks] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(false);
    const [addBtn, setAddBtn] = useState(false);
     
    useEffect(() => {
        const fetchTasks = async () => {
            try{
                const res = await fetch("http://localhost:5000/tasks/")
                if(res.ok){
                    const data = await res.json();
                    setPending(false);
                    setTasks(data);
                    console.log(data);
                }else{
                    throw new Error();
                }
            }catch(er){
                console.log(er);
                setPending(false);
                setError(true);
            }
        }

        setTimeout(() => {
            fetchTasks();
        }, 1000);
    }, []);

    const handleCompleted = async (id) => {
        let taskToChange = null;
        const newTasks = tasks.map(value => {
            if(value.id === id){
                value.completed = !value.completed;
                taskToChange = value;
            }
            return value;
        })
        setError(false);
        try{
            const res = await fetch(`http://localhost:5000/tasks/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(taskToChange)
            });
            if(res.ok){
                setTasks(newTasks)
            }else{
                throw new Error()
            }
        }catch(er){
            console.log(er);
            setError(true);
        }
    }

    const handleDelete = async (id) => {
        setPending(true);
        setError(false);
        try{
            const res = await fetch(`http://localhost:5000/tasks/${id}`, {
                method: "DELETE"
            })
            if(res.ok){
                setTimeout(() => {
                    setPending(false);
                    setTasks(tasks.filter(value => value.id !== id));
                }, 500)
            }else{
                throw new Error()
            }
        }catch(er){
            setPending(false);
            setError(true);
            console.log(er);
        }
    }

    const handleAddTask = async (task) => {
        setPending(true);
        setError(false);
        let id = 0;
        tasks.forEach(value => {
            value.id > id && (id = value.id)
        })
        id++;
        console.log(id);
        const newTask = {id: id, ...task, completed: false};
        try{
            const res = await fetch("http://localhost:5000/tasks/", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(newTask)
            })
            if(res.ok){
                setPending(false);
                setTasks([newTask, ...tasks]);
            }else{
                throw new Error()
            }
        }catch(er){
            setPending(false);
            setError(true);
            console.log(er);
        }
    }

    return(
        <TaskContext.Provider value={{
            tasks,
            pending,
            error,
            addBtn,
            setAddBtn,
            handleCompleted,
            handleDelete,
            handleAddTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext;