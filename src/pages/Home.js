import { useContext } from "react";
import TaskContext from "../context/TaskContext";
import Loader from "../components/Loader";
import Task from "../components/Task";

const Home = () => {

    const {tasks, pending, error} = useContext(TaskContext);

    return(
        <div className="home flex-grow-1">
            { pending && <Loader /> }
            { error && <h2 className="error">Ups, there was a problem. <br></br> Try again later.</h2> }
            { tasks && !pending && !error && tasks.map(value => {
                return <Task key={value.id} task={value} />
            }) }
        </div>
    )
}

export default Home;