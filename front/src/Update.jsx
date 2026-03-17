import axios from "axios";
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
    async function submit(e){
    e.preventDefault();
      try {
         const res = await axios.post("http://localhost:3000/Update", details)
         console.log(res);
         setDetails({
              taskname:"",
              taskpriority:"",
              taskdeadline:""
         })
      } catch (error) {
         console.log(error);
      }
    }
    return(
        <div>
            <h1>updating task</h1>
            <input type="text" placeholder="enter taskname" onChange={change} value={details.taskname} name="taskname"/>
            <input type="text" placeholder="enter taskpriority" onChange={change} value={details.taskpriority} name="taskpriority"/>
            <input type="text" placeholder="enter taskdeadline" onChange={change} value={details.taskdeadline} name="taskdeadline" />
            <button onClick={submit}>Submit</button><br /><br />
            <Link to={"/Signin"}><button>back</button></Link>
            <Link to={"/viewAll"}><button>viewall</button></Link>
            <Link to={"/"}><button>home</button></Link>
        </div>
    )
}
export default Update