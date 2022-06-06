import React from "react";
import Person from "./Person";
// function NameList() {
//   const names = ["Ironman", "Spiderman", "Thor"];
//   const nameList = names.map((name) => <h1>{name}</h1>);
//   return (
//     <div>
//       <div>{nameList}</div>
//     </div>
//   );
// }

function NameList() {
  const person = [
    {
      name: "Ironman",
      age: 30,
      Skill: "React",
    },
    {
      name: "Spiderman",
      age: 35,
      Skill: "Angular",
    },
    {
      name: "Thor",
      age: 40,
      Skill: "Vue",
    },
  ];
  // Person componet is added used in application
  const personList = person.map((person) => <Person persons={person} />);
  return (
    <div>
      <div>{personList}</div>
    </div>
  );
}

export default NameList;
