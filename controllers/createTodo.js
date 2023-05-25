//import the Model
const Todo=require("../models/Todo");

//define route handler
exports.createTodo =async (req,res)=>{
    try{
        //extract title and description from request body
        const{title,description}=req.body;
        //create a new todo object and insert in db
        const response=await Todo.create({title,description});
        //send a json flag with a sucess flag
        res.status(200).json({
            success:true,
            data:response,
            message:"Entry Created Sucessfully"
        });
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"Internal Server Error",
            message:err.message,
        })
    }
}