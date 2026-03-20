import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signin=()=>{
    const [email1, setEmail1] = useState("syani@gmail.com")
    const[password1,setPassword1]=useState("1234")
    const[email,setEmail]=useState("")
    const [password,setPassword] = useState("")
    const navigate=useNavigate()
    function text(e) {
        setEmail(e.target.value)
    }
    function text1(e){
        setPassword(e.target.value)
    }
    async function check(){
        try{
             const res = await axios.post("http://localhost:3000/login", {
        email: email,
        password: password,
          });
            navigate('/Update')
            alert("signed up successfully")
        }
        catch(error){
            console.log(error);
            alert("invalid")
        }
    }
    return(
        <div>
            <h1>welcome to the signin page</h1>
            <input type="text" 
            placeholder="enter your email" onChange={text} name="email"/>

            <input type="password" 
            placeholder="enter the password" onChange={text1} name="password"/>

            <button onClick={check}>Signin</button>
        </div>
    )
}
export default Signin
