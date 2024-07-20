const port = 3000;
const express = require("express")
const app = express();
const {createtodo, updatetodo} = require("../backend/types");
const { todo } = require("../backend/db")
app.use(cors({
    origin: "http://localhost:3000",
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
    const parsepayload = updatePayload.safeParsePayload(updatePayload);
    console.log(parsepayload)
    if(!parsepayload){
        res.status(404).json({
            msg:"You have sent wrong inputs"
        })
        return;
    }
    try {        
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
