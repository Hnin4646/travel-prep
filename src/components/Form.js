import {useState} from "react";

export default function Form({ addItems }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
  
    function handleSubmit(e) {
      e.preventDefault();
      console.log(e);
      console.log(e.target.value);
  
      if (!description) return;
      const newItem = { id: Date.now(), quantity, description, packed: false };
      addItems(newItem);
  
      setDescription("");
      setQuantity(1);
    }
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <span>What do you need for your trip 😍?</span>
        <select
          value={quantity}
          onChange={(e) => {
            console.log(e.target.value);
            setQuantity(Number(e.target.value));
          }}
        >
          {Array.from({ length: 15 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="item...."
          value={description}
          onChange={(e) => {
            console.log(e.target.value);
            setDescription(e.target.value);
          }}
        ></input>
        <button>ADD</button>
      </form>
    );
  }