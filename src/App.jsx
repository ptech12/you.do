import "./style.css";
import { useState } from "react";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);
  // console.log(todos);
  // console.log(newItem);
  function handleSubmit(e) {
    e.preventDefault();
    // using this below method will not allow the state
    // to update causing it to refresh infinite times
    // it is recommed to use function inside update state

    /* setTodos([...todos, {
      id: crypto.randomUUID(),
      title: newItem,
      complete: false
    }]) */

    // using ()=> inside the setState
    // because we need to grab the existing item from last statem
    // And update to the new state
    // always return an array of new items
    setTodos((currentTodos) => {
      // since I cannot change the value in todos state
      // use spread(...) with todos which return a new array
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false,
        },
      ];
    });

    setNewItem("")
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <label htmlFor="item">New Item</label>
        <input type="text" id="item" />
        <button
          value={newItem}
          onChange={(e) => console.log(e.target)}
          className="btn"
        >
          Add
        </button>
      </form>
      <h1 className="header">TODO LIST</h1>
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
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed}/>
                {todo.title}
              </label>
              <button className="btn btn-danger">Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
