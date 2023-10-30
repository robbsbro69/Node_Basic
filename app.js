const express = require("express")
const res = require("express/lib/response")
const app = express()
//ALternative
//const app = require("express"){}



app.get("/about",(req,res)=>{
    res.send("About Page")
})

app.get("/contact",(req,res)=>{
    res.send("Contact Page")
})


app.listen(3000,()=>{
    console.log("Nodejs project has started at port 3000")
})
