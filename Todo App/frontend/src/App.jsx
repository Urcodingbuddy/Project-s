import { useState, useEffect } from 'react'
import './App.css'
const port = 3000;
import {CreateTodo} from'./components/CreateTodo'
import {Todos} from'./components/Todos'

function App() {
  const [todos , setTodos] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false)
  useEffect(()=>{
      fetchTodos();
  },[])

  const fetchTodos = async()=>{
    try {
      const response = await fetch(`http://localhost:${port}/todo`);
      const json = await response.json();
      setTodos(json);
      setIsDataFetched(true);
      console.log(json)
    } catch (error) {
      console.error(error)
    }
  }
  const handleTodoCreated = async(newTodo) =>{
    try {
      await fetch(`http://localhost:${port}/todo`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodo)
      })
      await fetchTodos();
    } catch (error) {
      console.error(error)
    }
    
  }

  const handleTodoDeleted = async(id) => {
    try{
      await fetch(`http://localhost:${port}/todo/${id}`,{

        method:"DELETE"
      })
      await fetchTodos();
    }
    catch(e){

    }
  }

  return (
      <div>
          <CreateTodo onTodoCreated={handleTodoCreated}> </CreateTodo>
          <Todos todos ={todos} onTodoDeleted={handleTodoDeleted} ></Todos>
      </div>
      
  )
}
export default App
