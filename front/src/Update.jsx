import React, { useState } from "react";
import { Link } from "react-router-dom";
const Update=()=>{
    const[details,setDetails]=useState({
        taskname:"",
        taskpriority:"",
        taskdeadline:""
    })
    function change(e){
        setDetails({...details,[e.target.name]:e.target.value})
    }
    return(
        <div>
            <h1>updating task</h1>
            <input type="text" placeholder="enter taskname" onChange={change} value={details.taskname} name="taskname"/>
            <input type="text" placeholder="enter taskpriority" onChange={change} value={details.taskpriority} name="taskpriority"/>
            <input type="number" placeholder="enter taskdeadline" onChange={change} value={details.taskdeadline} name="taskdeadline" />
            <button>Submit</button><br /><br />
            <Link to={"/Signin"}><button>Home</button></Link>
            <Link to={"/viewAll"}><button>viewall</button></Link>
        </div>
    )
}
export default Update