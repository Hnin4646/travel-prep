export default function Items({ item, deleteItem, toggleItems }) {
    return (
      <div>
        <li>
          {/* <input type="checkbox" ></input>
          <label>{item.quantity} {item.description}</label> */}
          <input
            type="checkbox"
            value={item.packed}
            onChange={() => toggleItems(item.id)}
          />
          <span style={item.packed ? { textDecoration: "line-through" } : {}}>
            {item.quantity} {item.description}
          </span>
          <button onClick={() => deleteItem(item.id)}>❌</button>
        </li>
      </div>
    );
  }