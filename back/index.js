const express=require('express')
const db=require('./db')
const cors=require('cors')
const routes=require('./routes')

const app=express()
app.use(cors())
app.use(express.json())
app.use('/',routes)

app.listen(3000,()=>{
    console.log("server is running on the port 3000");    
})