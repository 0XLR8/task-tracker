import { useContext, useEffect } from "react";
import TaskContext from "../context/TaskContext";

const About = () => {

    const { setAddBtn } = useContext(TaskContext);

    const formatAddBtn = () => {
        setAddBtn(false)
    }

    useEffect(() => {
        formatAddBtn()
    }, [])

    return(
        <div className="about">
            <h2 className="mb-3">About Page</h2>
            <p>Test application that uses ReactJS and json-server as api source.</p>
            <p>Developer: <b>XRL</b></p>
            <p>Technologies: <b>html/css/javascript/reactjs</b></p>
            <p>Version: <b>2.0</b></p>
        </div>
    )
}

export default About;