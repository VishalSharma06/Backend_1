//import the Model
const Todo=require("../models/Todo");

//define route handler
exports.getTodo=async (req,res)=>{
    try{
        //fetch all todos from database
        const todos=await Todo.find({});
        //response
        res.status(200).json({
            success:true,
            data:todos,
            message:"Entire todos data is Fetched"
        });
       
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:'Server Error',
        });
       
    }
}



exports.getTodoById=async (req,res)=>{
    try{
        //fetch all todos from database based on the ids
        const id=req.params.id;
        const todo=await Todo.findById({_id:id})

        //data for given id not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No data found with given id",
            });

        }

        //data for given id found
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data Sucessfully Fetched`,
        })
     
       
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:'Server Error',
        });
       
    }
}




