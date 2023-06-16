import { useState } from "react";
import './input.css';


const InputField = (props) => {
    const addItem = props.addItem;

    const [inputVal, setInputVal] = useState('');

    const handleButtonChange = () =>{
        addItem(inputVal);
        document.getElementById('input-text').value='';
    }

    return ( 
        <div className="input-container">
            <input type="text" className="input-field" id="input-text" placeholder="Enter Task name" onChange={(e) => {setInputVal(e.target.value);} }/>
            <button onClick={handleButtonChange} className="btn">Add Task</button>
        </div>
     );
}
 
export default InputField;