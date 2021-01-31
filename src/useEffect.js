import React from "react";
import "./styles.css";

export default function UseEffect() {
  return (
    <div className="App">
      <HookMouse />
    </div>
  );
}

function HookCounter() {
  //useEffect runs after every render
  const initialCount = 0;
  const [val, setVal] = React.useState(initialCount);
  React.useEffect(() => {
    document.title = `You clicked ${val} times`;
  });
  return (
    <div className="App">
      <button onClick={() => setVal(val + 1)}>Click {val} times</button>
    </div>
  );
}

function HookCounterTwo() {
  //useEffect runs after every render
  //second parameter of useEffect is used to specify the array of values for conditionally running side-effects
  const initialCount = 0;
  const [val, setVal] = React.useState(initialCount);
  const [name, setName] = React.useState("");
  React.useEffect(() => {
    console.log("updating doc title");
    document.title = `You clicked ${val} times`;
  }, [val]);
  return (
    <div className="App">
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={() => setVal(val + 1)}>Click {val} times</button>
    </div>
  );
}

function HookMouse() {
  //add [] so useeffect is not called in Subsequent renders
  //funtion while unmounting of a component can be specified in  return statement of useEffect
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);
  const logMousePosition = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };
  React.useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      console.log("Component unmounting");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div className="App">
      <div className="val">
        X = {x}, Y = {y}
      </div>
    </div>
  );
}

function MouseContainer() {
  //cleanup with useEffect
  const [display, setDisplay] = React.useState(true);
  return (
    <div className="App">
      <button onClick={() => setDisplay(!display)}>TOGGLE</button>
      {display && <HookMouse></HookMouse>}
    </div>
  );
}
