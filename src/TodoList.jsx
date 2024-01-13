import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList( { todos }) {
  return (
    <ul className="list">
      {/* instead of hard coding let's use a map */}
      {/* <li>
      <label htmlFor="">
        <input type="checkbox" />
        Item 1
      </label>
      <button className="btn btn-danger">Delete</button>
    </li> */}

      {/* using map to list out items */}
      {todos.map((todo) => {
        return (
          <TodoItem {...todo} key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
           />
        );
      })}
    </ul>
  );
}
