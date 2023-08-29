import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Hello, React!");
  const [isTrue, setIsTrue] = useState(true); 
  const [complexObject, setComplexObject] = useState({ key: "value" });
  const [colors, setColors] = useState(["red", "green", "blue"]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <p>Text: {text}</p>
      <button onClick={() => setText("Updated Text")}>Update Text</button>

      <p>Is True: {isTrue ? "Yes" : "No"}</p>
      <button onClick={() => setIsTrue(!isTrue)}>Toggle Is True</button>

      <p>Complex Object: {JSON.stringify(complexObject)}</p>
      <button onClick={() => setComplexObject({ key: "new value" })}>
        Update Complex Object
      </button>

      <p>Colors: {colors.join(", ")}</p>
      <button onClick={() => setColors(["yellow", "purple"])}>
        Update Colors
      </button>
    </div>
  );
}

export default App;
