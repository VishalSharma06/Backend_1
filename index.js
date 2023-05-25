const express=require('express');
const app=express();

//load config from any file
require("dotenv").config();

const PORT=process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for TODO api
const todoRoutes=require("./routes/todos");

//mount the todo APIS routes
app.use("/api/v1",todoRoutes);

//start server
app.listen(PORT,()=>{
    console.log(`Server Started sucessfully at ${PORT}`);
})

//connect to the database
const dbConnect=require("./config/database");

dbConnect();

//default route
app.get("/",(req,res)=>{
    res.send(`<h1>Hello From Great Vishal</h1>`)
})