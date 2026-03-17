const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/crud")
const db=mongoose.connection
db.once("open",()=>{
    console.log("database connectecd successfully");  
})
db.on("error",(err)=>{
    console.log("error in connecting",err);
    
})