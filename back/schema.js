const mongoose=require('mongoose')
const user=mongoose.Schema({
    taskname:String,
    taskpriority:String,
    taskdeadline:String,
})
module.exports=mongoose.model("details",user)