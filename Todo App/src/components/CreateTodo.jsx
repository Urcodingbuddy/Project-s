import { useNavigate } from "react-router-dom"
import { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { FilteredTodo, TodosAtom, FilterAtom } from "../store/atom/count";



export function CreateTodo() {
    const [todos, setTodos] = useRecoilState(TodosAtom);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    
    const handleAddTodo = useCallback(() => {
        if(title && description){
            const newTodo = {title, description, completed:false};
            setTodos((prevTodos)=>{
                const updatedTodo = [...prevTodos, newTodo]
                localStorage.setItem("Todos", JSON.stringify(updatedTodo))
                return updatedTodo;
            })
            setTitle("");
            setDescription("");
        }
    },[title, description, setTodos]);



    const handleTitleChange = useCallback((e) => {
        setTitle(e.target.value);
    },[]);

    const handleDescriptionChange = useCallback((e) => {
        setDescription(e.target.value);
    },[]);

    const handleButtonClick = useCallback(()=>{
        navigate('/dashboard')
    },[navigate])


    return <div className="input-area">
        <h1>Todo-App⚛️</h1>
        <input placeholder="Title" type="text" value={title} onChange={handleTitleChange} />
        <textarea placeholder="Description" type="text" value={description} onChange={handleDescriptionChange} />
        <Buttons title={title} description={description} setTodos={setTodos} setTitle={setTitle} setDescription={setDescription} />
        <button style={{
            cursor: 'pointer',
            ':hover': {
                color: '#535bf2'
            }
        }} onClick={handleButtonClick}
        >Todos 🔍 </button>
    </div >
}
function Buttons({ title, description, setTodos,  setTitle, setDescription }) {

    const handleAddTodo = (title, description) => {
        const newTodo = { title, description };
        setTodos((prevTodos) => [...prevTodos, newTodo]);
        setTitle("");
        setDescription("");
    };


    return <div>
        <button onClick={() => handleAddTodo(title, description)}> ➕ </button>
    </div>
}