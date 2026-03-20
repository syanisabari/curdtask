import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Signup=()=>{
    const[email,setEmail]=useState("syani@gmail.com")
    const[password,setPassword]=useState("1234")
    const[email1,setEmail1]=useState("")
    const[password1,setPassword1]=useState("")
    const navigate=useNavigate()
    function text(e){
        setEmail1(e.target.value)
    }
    function text1(e){
       setPassword1(e.target.value) 
    }
    function click(){
             if(email==email1 && password==password1){
            navigate("/Signin");
                 alert("logined successfully")
        }
        else{
            alert("invalid");
        }  
    }
    return(
        <div>
            <h1>signup page</h1>
            <input type="text" 
            placeholder="enter your email" onChange={text} />

            <input type="number" 
            placeholder="enter the password" onChange={text1} />
            <button onClick={click}>login</button>
            <br /><br />
           <center> <h3>IF YOU ALREADY HAVE AN ACCOUNT</h3></center>
          <center> <Link to={"/Signin"}>Signin</Link></center>
        </div>
    )
}
export default Signup
