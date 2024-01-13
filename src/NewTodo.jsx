import { useState } from "react";


export default function NewTodo({ onSubmit }) {
    const [newItem, setNewItem] = useState("");
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

        if(newItem === "") return
        onSubmit(newItem)
        // console.log(todos);
        setNewItem("")
      }
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <label htmlFor="item">New Item</label>
      <input
        type="text"
        id="item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button className="btn">Add</button>
    </form>
  );
}
