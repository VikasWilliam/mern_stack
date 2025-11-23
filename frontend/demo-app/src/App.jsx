import { useState, react } from "react";
import Child from "./Child";
import "./app.css"

const App=()=>{

  const [childData,setChildData]= useState("");

  const handleDataFromChild=(data)=>{
    setChildData(data)
  }


  return(
    <div>
      <h1>Parent Component</h1>
      <Child sendDataToParent={handleDataFromChild}></Child>
      <p>Data from child: {childData}</p>
    </div>
  )
}

export default App;