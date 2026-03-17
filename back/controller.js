const user=require("./schema")
const add=async(req,res)=>{
        try {
       const New=new user({
        taskname:req.body.taskname,
        taskpriority:req.body.taskpriority,
        taskdeadline:req.body.taskdeadline
       })
       const saved=await New.save() 
       res.json({
        message:"user added",
        data:saved
       })
    } catch (error) {
        console.log(error);
        res.json({
            message:"error in adding",
            Error:error
        })
    }
}

const ViewAll = async (req, res) => {
    try {
        const allUsers = await user.find()
        res.json({
            message: "User details fetched",
            data: allUsers
        })
    } catch (error) {
        res.json({
            message: "Error in getting user",
            error: error
        })
    }
}

const View = async (req, res) => {
    try {
        const { id } = req.params
        const Details = await user.findById(id)

        res.json({
            message: "User details fetched ",
            data:Details
        })
    } catch (error) {
        res.json({
            message: "Error in getting user",
            Error: error
        })
    }
}

const Edit=async(req,res)=>{
    try {
        const {id}=req.params
        const update={
              taskname:req.body.taskname,
            taskpriority:req.body.taskpriority,
            taskdeadline:req.body.taskdeadline
        }
        const saved=await user.findByIdAndUpdate(id,update,{new:true})
        res.json({
            message:"user updated successfully",
            data:saved
        })
    } catch (error) {
       res.json({
        message:"error in updating",
        Error:error
       })  
    }
}

const Delete=async(req,res)=>{
    try {
        const {id}=req.params
        const deleteduser=await user.findByIdAndDelete(id)
        res.json({
            message:"user deleted successfully",
            data:deleteduser
        })
    } catch (error) {
       res.json({
        message:"error in deleting",
        Error:error
       }) 
    }
}

module.exports={
    add,
    ViewAll,
    View,
    Edit,
    Delete
}