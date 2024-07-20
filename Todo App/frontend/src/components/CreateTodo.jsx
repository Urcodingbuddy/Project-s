import { useState } from "react";

export function CreateTodo({onTodoCreated}){
    const [title, setTitle] = useState('');
    const [description, setDescription] =  useState("");

    const handleAddTodo =  async () => {
        try{
            const newTodo = {
                title:title,
                description:description
            };
            const response  = await fetch("http://localhost:3000/todo",{
                method:"POST",
                body: JSON.stringify(newTodo),
                headers:{
                    "Content-Type":"application/json"
                },
            });
            const json = await response.json();
            onTodoCreated(json)

        }catch(e){
            console.error(e)
        }
    }
    return(
        <div className="card">
            <h2>Create Todo & make tasks remebering easy :)</h2>
            <input type="text"  placeholder="Title" onChange={(e)=> setTitle(e.target.value)}/>
            <input type="text"  placeholder="Description" onChange={(e)=> setDescription(e.target.value)}/>
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    )
}