import { useContext } from "react";

export default function UseContext() {
  const persons = useContext();
  return (
    <ul>
      {persons.map((person) => (
        <li>{person.name}</li>
      ))}
    </ul>
  );
}
