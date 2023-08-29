import React, { useState } from "react";

function App() {
  const [objectArray, setObjectArray] = useState([
    { id: 1, name: "Acai" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Peanut Butter" },
  ]);

  const updateSecondObject = () => {
    setObjectArray((prevArray) => [
      ...prevArray.slice(0, 1),
      { ...prevArray[1], name: "Updated Banana" },
      ...prevArray.slice(2),
    ]);
  };

  return (
    <div>
      <button onClick={updateSecondObject}>Update Second Object</button>
      <ul>
        {objectArray.map((obj) => (
          <li key={obj.id}>{obj.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
