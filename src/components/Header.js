import { useContext } from "react";
import TaskContext from "../context/TaskContext";
import AddTask from "./AddTask";

const Header = () => {

    const { addBtn, setAddBtn, error } = useContext(TaskContext);

    const formatAddBtn = () => {
        if(error){
            return "Add";
        }
        if(addBtn){
            return "Close";
        }
        return "Add";
    }

    return(
        <header className="header mb-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Task Tracker</h1>
                <button className="btn btn-add" onClick={() => setAddBtn(!addBtn)}>{formatAddBtn()}</button>
            </div>
            { addBtn && !error && <AddTask />}
        </header>
    )
}

export default Header;