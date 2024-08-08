import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import {FilteredTodo, TodosAtom ,FilterAtom} from "../store/atom/count";
import React, { useCallback } from "react";

// import 


export function Dashboard() {
  const navigate = useNavigate();
  const [filter, setFilter] = useRecoilState(FilterAtom);
  const filteredTodos = useRecoilValue(FilteredTodo);

const handleButtonClick = useCallback(()=>{
    navigate('/');
},[navigate])

const handleFilterChange = useCallback((e)=>{
  setFilter(e.target.value)
},[setFilter])
  return <div className="bg-red-700">
    <button onClick={handleButtonClick}>Add New ➕</button> 
    <FindTodo handleFilterChange={handleFilterChange} />
    <ol>
        {filteredTodos.map((todo) => (
            <TodoItem key={todo.title} todo={todo} />
        ))}
      </ol>
  </div>
}

const TodoItem = React.memo(({ todo }) => {
  return (
    <li>
      <span>--------------------------------</span>
      <h2>{todo.title}</h2>
      <h3>{todo.description}</h3>
      <span>--------------------------------</span>
    </li>
  );
})

const FindTodo = React.memo(({handleFilterChange})=> {
  return <div>
    <h1>Find-Todos 👇🏼</h1>
    <input className="w-10 flex bg-red-700"  autoFocus
    placeholder="Keyword
                        🔍" 
    type="text" 
    onChange={handleFilterChange}
    />
  </div>
})
