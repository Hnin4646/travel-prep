import {useState} from "react";
import Items from "./Items";

export default function Packaging({ items, deleteItem, toggleItems, clearItems }) {
    const [sortBy, setSort] = useState("input");
  
    let sortItems;
    if(sortBy === "input") sortItems = items;
    if(sortBy === "description") sortItems = items.slice().sort((a,b) => a.description.localeCompare(b.description));
    if(sortBy === "packed") sortItems = items.slice().sort((a,b) => Number(a.packed)-Number(b.packed)); 
  
    return (
      <div className="list">
        <ul>
          {sortItems.map((item) => (
            <Items
              item={item}
              key={item.id}
              deleteItem={deleteItem}
              toggleItems={toggleItems}
            />
          ))}
        </ul>
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSort(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed list</option>
          </select>
          <button onClick={clearItems}>CLEAR LISTS</button>
        </div>
      </div>
    );
  }