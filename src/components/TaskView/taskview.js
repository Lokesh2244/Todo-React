import { useState } from "react";
import InputField from "../Input Field/input";
import './taskview.css';



const TaskView = () => {

    const [taskList, setTaskList] = useState(['brush']);


    const handleCheckboxChange = event =>{
        if(event.target.checked)
            console.log("check");
    }

    const addItem = (tsk) => {
        setTaskList(taskList.concat(`${tsk}`));
    }

    const deleteTask = (id) => {
        const newTask = taskList.filter(tsk => taskList.indexOf(tsk) !== id);
        setTaskList(newTask);
    }

    return ( 
        <>
        <InputField addItem={ addItem }  />
        <div className="task-container">
            {taskList.map((task) => (
                <div className="task-list" key={taskList.indexOf(task)}>
                    <label className="task-list-left"> {task}
                        <input type="checkbox" className="check-box" onChange={handleCheckboxChange} />
                        <span className="checkmark"></span>
                    </label>
                    <button className="delete-task" onClick={() => deleteTask(taskList.indexOf(task))}>Delete task</button>
                </div>
            ))}
        </div>
        </>
     );
}

export default TaskView;

