import {useState,react} from "react";

const Child=({sendDataToParent})=>{
    const [data,setData]=useState("");

    const handleInput=(e)=>{
        setData(e.target.value);
       
    }

    const handleAfterClick=()=>{
        setData("")
    }

    const handleClick=()=>{
        debugger
        sendDataToParent(data);
        handleAfterClick();
    }

    return(
        <div>
            <input value={data} onChange={handleInput}></input>
            <button onClick={handleClick} >
                Send data to parent
            </button>
        </div>
    )
}

export default Child;