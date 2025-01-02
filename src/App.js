import { useState } from "react";
import  Logo  from "./components/Logo";
import Form from "./components/Form";
import Packaging from "./components/Packaging";
import State from "./components/State";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: "1", packed: true },
//   { id: 2, description: "Socks", quantity: "10", packed: false },
//   { id: 3, description: "Shoes", quantity: "2", packed: true },
// ];

export default function App() {
  const [items, setItem] = useState([]);

  function handleAddItems(item) {
    setItem((items) => [...items, item]);
    console.log(item);
  }

  function handleDeleteItems(id) {
    console.log(id);
    setItem((items) => items.filter((item) => item.id !== id));
    console.log(items);
  }

  function handleToggleItems(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItems(){
    const deleteItems = window.confirm("Are you sure you want to delete all items?");
    if (deleteItems) setItem([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form addItems={handleAddItems} />
      <Packaging
        items={items}
        deleteItem={handleDeleteItems}
        toggleItems={handleToggleItems}
        clearItems={handleClearItems}
      />
      <State item={items}/>
    </div>
  );
}
