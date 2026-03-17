import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./Signin";
import Edit from "./Edit";
import Update from "./Update";
import View from "./View";
import Signup from "./Signup";
import ViewAll from "./ViewAll";
const App=()=>{
    return(
            <BrowserRouter>
             <Routes>
                <Route path="/" element={<Signup/>}></Route>
                <Route path="/Signin" element={<Signin/>}></Route>
                <Route path="/Edit/:id" element={<Edit/>}></Route>
                <Route path="/Update" element={<Update/>}></Route>
                <Route path="/View/:id" element={<View/>}></Route>
                <Route path="/ViewAll" element={<ViewAll/>}></Route>
             </Routes>
            </BrowserRouter>
    )
}
export default App;