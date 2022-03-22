import { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";

const AddTask = () => {

    const [text, setText] = useState("");
    const [date, setDate] = useState("");
    
    const { handleAddTask } = useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text !== "" && date !== ""){
            setText("");
            setDate("");
            handleAddTask({text, date})
        }
    }

    return(
        <form className="add-task mb-4" onSubmit={handleSubmit}>
            <label>Add title:</label>
            <input type="text" placeholder="Add title..." value={text} onChange={(e) => setText(e.target.value)} />
            <label>Add date:</label>
            <input type="text" placeholder="Add date..." value={date} onChange={(e) => setDate(e.target.value)} />
            <button className="btn add-btn">Add Task</button>
        </form>
    )
}

export default AddTask;