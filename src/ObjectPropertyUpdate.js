import React, { useState } from "react";

function App() {
  const [myObject, setMyObject] = useState({
    property1: "Cake",
    property2: "Ice Cream",
  });

  const updateObjectProperties = () => {
    setMyObject((prevObject) => ({
      ...prevObject,
      property1: "Updated Cake",
      property2: "Updated Ice Cream",
    }));
  };

  return (
    <div>
      <button onClick={updateObjectProperties}>Update Object Properties</button>
      <p>Property 1: {myObject.property1}</p>
      <p>Property 2: {myObject.property2}</p>
    </div>
  );
}

export default App;
