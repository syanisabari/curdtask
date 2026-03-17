import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ViewAll=()=>{
    const[details,setDetails]=useState([])
    async function fetchData(){
        try {
            const res =await axios.get("http://localhost:3000/ViewAll")
            console.log(res);
            setDetails(res.data.data)
        } catch (error) {
            console.log(error);     
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    async function Delete(userId){
        try {
            const res = await axios.delete(`http://localhost:3000/delete/${userId}`);
            console.log(res);
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <div>
          <h1>welcome the viewall page</h1>
            <table border={2}>
                <thead>
                    <tr>
                        <th>TASKNAME</th>
                        <th>TASKPRIORITY</th>
                        <th>TASKDEADLINE</th>
                        <th>VIEW</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {details.map((detail, i) => (
                        <tr key={detail._id}>
                            <td>{detail.taskname}</td>
                            <td>{detail.taskpriority}</td>
                            <td>{detail.taskdeadline}</td>
                            <td>
                                <Link to={`/View/${detail._id}`}><button>View</button></Link>
                            </td>
                            <td>
                                <button onClick={() => Delete(detail._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to={"/Update"}><button>Update</button></Link>
            <Link to={"/Signin"}><button>Back</button></Link>
        </div>
    )
}
export default ViewAll;