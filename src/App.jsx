import NewTodo from "./NewTodo";
import TodoList from "./TodoList";
import "./style.css";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  // console.log(todos);
  // console.log(newItem);

  function addTodo(title){
    setTodos(currentTodos => {
      // since I cannot change the value in todos state
      // use spread(...) with todos which return a new array
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
        },
      ];
    });
  }

  function toggleTodo(id, completed){
    setTodos( currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id){
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>

      <NewTodo onSubmit={addTodo} /> 
      <h1 className="header">TODO LIST</h1>
      <TodoList todos={todos } toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
