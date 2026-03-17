import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const Edit=()=>{
    const[form,setForm]=useState({
        taskname:"",
        taskpriority:"",
        taskdeadline:""
    })
    const{id}=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        try {
           async function fetchData(){
            const res=await axios.get(`http://localhost:3000/View/${id}`)
            console.log(res);
            setForm(res.data.data)
           } 
           fetchData()
        } catch (error) {
            console.log(error);    
        }
    },[])
    async function submit(e){
        e.preventDefault()
        try {
          const res=await axios.put(`http://localhost:3000/Edit/${id}`,form)
          console.log(res);
          navigate("/ViewAll")  
        } catch (error) {
           console.log(error); 
        }
    }
    function look(e){
        setForm({...form,[e.target.name]:e.target.value})
    }
    return(
        <div>
            <h1>editing page</h1>
            <label htmlFor="taskname" >taskname</label>
            <input type="text"  onChange={look} value={form.taskname} name="taskname" placeholder="enter taskname"/>
            <label htmlFor="taskpriority" >taskpriority</label>
            <input type="text"  onChange={look} value={form.taskpriority}  name="taskpriority" placeholder="enter taskpriority"/>
            <label htmlFor="taskdeadline" >taskdeadline</label>
            <input type="text"  onChange={look} value={form.taskdeadline}  name="taskdeadline" placeholder="enter taskdeadline"/>
            <button onClick={submit}>submit</button>
            <Link to={"/ViewAll"}><button>viewall</button></Link>
            <Link to={"/Update"}><button>Back</button></Link>
        </div>
    )
}
export default Edit