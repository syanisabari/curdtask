import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signin=()=>{
    const [email, setEmail] = useState("syani@gmail.com")
    const[password,setPassword]=useState("1234")
    const[email1,setEmail1]=useState("")
    const [password1,setPassword1] = useState("")
    const navigate=useNavigate()
    function text(e) {
        setEmail1(e.target.value)
    }
    function text1(e){
        setPassword1(e.target.value)
    }
    function check(){
        if(email==email1 && password==password1){
            navigate('/Update')
            alert("signed up successfully")
        }
        else{
            alert("invalid")
        }
    }
    return(
        <div>
            <h1>welcome to the signin page</h1>
            <input type="text" 
            placeholder="enter your email" onChange={text} name="email"/>

            <input type="number" 
            placeholder="enter the password" onChange={text1} name="password"/>

            <button onClick={check}>Signin</button>
        </div>
    )
}
export default Signin
