import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
const View=()=>{
    const {id}=useParams()
    const navigate=useNavigate()
    const[details,setDetails]=useState({})
    async function fetchData(){
        try {
           const res=await axios.get(`http://localhost:3000/View/${id}`)
           console.log(res);
            setDetails(res.data.data)
        } catch (error) {
           console.log(error);     
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
    async function clear(){
        try {
          const res=await axios.delete(`http://localhost:3000/delete/${details._id}`)  
          navigate("/ViewAll")
        } catch (error) {
          console.log(error);      
        }
    }
    return(
        <div>
            <h1>view page</h1>
            <h2>TASKNAME: {details.taskname}</h2>
            <h2>TASKPRIORITY:{details.taskpriority} </h2>
            <h2>TASKDEADLINE: {details.taskdeadline}</h2>
            <Link to={`/Edit/${details._id}`}><button>EDIT</button></Link>
            <button onClick={clear}>DELETE</button>
            <Link to={"/Update"}><button>BACK</button></Link>
            <Link to={"/ViewAll"}><button>VIEWALL</button></Link>
        </div>
    )
}
export default View