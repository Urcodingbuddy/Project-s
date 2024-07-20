const port = 3000;
const express = require("express")
const app = express();
const {createtodo, updatetodo} = require("../backend/types");
const { todo } = require("../backend/db")
const cors = require('cors')
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
}))
app.get("/todo",async function(req, res){
    console.log("get invoked")

    try{
        const todos = await todo.find({});
        res.status(200).json(todos)
    }catch(e){
        console.log(e)
        res.status(500).json({message: "Server Error"})
    }
})
app.use(express.json());
app.post("/todo",async function(req, res){
    console.log("post invoked")
    const createpayload = req.body;
    const parsepayload = createtodo.safeParse(createpayload);
    try{
        if(!parsepayload.success){
            res.status(404).json({
                msg:"You have sent wrong inputs"
            })
            return;
    }
    await todo.create({
        title:createpayload.title,
        description: createpayload.description,
        completed: false
    })
    res.status(200).json({
        message: "Todo created successfully"
    })
    }catch(e){
            console.log(e)
    }
});
app.put("/completed", async function(req, res){
    console.log("put invoked")
    const updatePayload = req.body;
    const parsepayload = updatetodo.safeParse(updatePayload);
    console.log(parsepayload)
    try {   
    if(!parsepayload){
        res.status(404).json({
            msg:"You have sent wrong inputs"
        })
    }
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: "Somthing went wrong"
        })
    }
    res.json({
        message: "Completed status updated successfully"
    })
})
app.delete("/todo:id",async(req, res)=>{
    console.log("delete invoked")
    const id = req.params.id;
    try {
        await todo.findByIdAndDelete(id);
        res.status(200).json({
            message: "Todo deleted successfully"
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: "Somthing went wrong"
        })
    }
})

app.listen(port, "0.0.0.0",()=>{
    console.log(`Server is activated on ${port} :)`)
})
