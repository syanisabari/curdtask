import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Signup=()=>{
    const[email1,setEmail1]=useState("syani@gmail.com")
    const[password1,setPassword1]=useState("1234")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const navigate=useNavigate()
    function text(e){
        setEmail(e.target.value)
    }
    function text1(e){
       setPassword(e.target.value) 
    }
    async function click(){
        try{
            const res = await axios.post("http://localhost:3000/register", {
         email: email,
          password: password,
      });
           if(email1==email && password1==password){
                 navigate("/Signin");
                 alert("logined successfully")
           }
           else{
                  alert("invalid");
           }
        }
        catch(error){
            console.log(error);  
        }  
    }
    return(
        <div>
            <h1>signup page</h1>
            <input type="text" 
            placeholder="enter your email" onChange={text} />

            <input type="password" 
            placeholder="enter the password" onChange={text1} />
            <button onClick={click}>login</button>
            <br /><br />
           <center> <h3>IF YOU ALREADY HAVE AN ACCOUNT</h3></center>
          <center> <Link to={"/Signin"}>Signin</Link></center>
        </div>
    )
}
export default Signup
