import { useContext } from "react";
import { RiCloseFill } from "react-icons/ri";
import TaskContext from "../context/TaskContext";

const Task = ({task}) => {

    const { handleCompleted, handleDelete } = useContext(TaskContext);

    const formatCompleted = () => {
        return !task.completed ? "task" : "task completed"
    }

    return(
        <div className={formatCompleted()} onDoubleClick={() => handleCompleted(task.id)}>
            <p className="task-title">{task.text}</p>
            <p className="task-date">{task.date}</p>
            <RiCloseFill className="close" onClick={() => handleDelete(task.id)} />
        </div>
    )
}

export default Task;
