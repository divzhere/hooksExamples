import React from "react";
import "./styles.css";

export default function UseState() {
  return (
    <div className="App">
      <HookCounterThree />
    </div>
  );
}

function HookCounter() {
  //useState with Prevous State
  const initialCount = 0;
  const [val, setVal] = React.useState(initialCount);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setVal((prevVal) => prevVal + 1);
    }
  };
  return (
    <div className="App">
      <p className="val">{val}</p>
      <button onClick={() => setVal(initialCount)}>RESET</button>
      <button onClick={() => setVal(val + 1)}>+1</button>
      <button onClick={() => setVal(val - 1)}>-1</button>
      <button onClick={incrementFive}>+5</button>
    </div>
  );
}

function HookCounterTwo() {
  //useState with onChange for Input text
  const [name, setName] = React.useState({ firstName: "", lastName: "" });

  return (
    <div className="App">
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <h2 className="val">Your first name is {name.firstName} </h2>
        <h2 className="val">Your last name is {name.lastName} </h2>
      </form>
    </div>
  );
}

function HookCounterThree() {
  //useState with an array, needs to use the ... spread operator
  const [items, setItems] = React.useState([]);
  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1
      }
    ]);
  };

  return (
    <div>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}
