import React, { useState } from "react";
import _ from "lodash";

const data = [
  {
    id: 1,
    name: "Cecil",
  },
  {
    id: 2,
    name: "Carlos",
  },
  {
    id: 3,
    name: "Khoshekh",
  },
  {
    id: 4,
    name: "Erika",
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
      />

      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
