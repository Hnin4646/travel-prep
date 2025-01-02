export default function State({item}) {
    if(!item.length){
      return(
        <p className="stats">
          <em>Start adding some items to your packing list.🚀</em>
        </p>
      )
    }
    const numItems = item.length;
    const numPacked = item.filter(item => item.packed).length;
    const percentPacked = Math.round(numPacked * 100 /numItems);
    console.log(numPacked);
    console.log(item.length);
    return (
      <footer className="stats">
        {/* <select>
          <option>SORT BY INPUT ORDER</option>
          <option></option>
          <option></option>
        </select>
        <button>CLEAR LIST</button> */}
        {percentPacked === 100 ? "You got everything!✈️" : 
        `You have ${numItems} items on your list, you already packed ${numPacked} (${percentPacked} %)`
        }
      </footer>
    );
  }