const express=require('express')
const controller=require("./controller")
const routes=express.Router()

routes.post("/Update",controller.add)
routes.get("/ViewAll",controller.ViewAll)
routes.get("/View/:id",controller.View)
routes.put("/Edit/:id",controller.Edit)
routes.delete("/delete/:id",controller.Delete)

module.exports=routes