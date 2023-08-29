import React from "react";
import _ from "lodash";

const arrOne = [
  {
    id: 20,
    name: "Jean",
  },
  {
    id: 30,
    name: "Doe",
  },
];

const arrTwo = [
  {
    id: 40,
    name: "Hello",
  },
  {
    id: 30,
    name: "World",
  },
];

const str = ["u", "ec"];

const arr = [
  {
    storageVal: "u",
    table: ["E", "F"],
  },
  {
    storageVal: "data",
    table: ["E", "F"],
  },
  {
    storageVal: "ec",
    table: ["E"],
  },
];

const symmetricDifferenceArr = _.xorWith(arrOne, arrTwo, _.isEqual);

const matchingTablesArr = _.flatMap(arr, "table").filter((table) =>
  str.includes(table)
);

const nestedArray = [["E"], ["F"]];
const flattenedArray = _.flatten(nestedArray);

const t = ["E", "F"];
const additionalNestedArray = [["F"], ["G"]];
const combinedFlattenedArray = _.union(t, _.flatten(additionalNestedArray));

function App() {
  return (
    <div>
      <h2>Symmetric Difference:</h2>
      <pre>{JSON.stringify(symmetricDifferenceArr, null, 2)}</pre>

      <h2>Matching Tables:</h2>
      <pre>{JSON.stringify(matchingTablesArr, null, 2)}</pre>

      <h2>Flattened Array:</h2>
      <pre>{JSON.stringify(flattenedArray, null, 2)}</pre>

      <h2>Combined Flattened Array:</h2>
      <pre>{JSON.stringify(combinedFlattenedArray, null, 2)}</pre>
    </div>
  );
}

export default App;
