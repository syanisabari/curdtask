import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./Signin";
import Delete from "./Delete";
import Edit from "./Edit";
import Update from "./Update";
import View from "./View";
import Signup from "./Signup";
import ViewAll from "./Viewall";
const App=()=>{
    return(
        <div>
            <BrowserRouter>
             <Routes>
                <Route path="/" element={<Signup/>}></Route>
                <Route path="/Signin" element={<Signin/>}></Route>
                <Route path="/Delete" element={<Delete/>}></Route>
                <Route path="/Edit" element={<Edit/>}></Route>
                <Route path="/Update" element={<Update/>}></Route>
                <Route path="/View" element={<View/>}></Route>
                <Route path="/viewAll" element={<ViewAll/>}></Route>
             </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;