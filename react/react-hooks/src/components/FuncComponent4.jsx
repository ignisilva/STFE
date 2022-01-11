import { useCallback, useMemo, useState } from "react";

function sum(persons) {
  console.log("sum");
  return persons.map((person) => person.age).reduce((l, r) => l + r, 0);
}

export default function FuncComponent4() {
  const [value, setValue] = useState("");
  const [persons] = useState([
    { name: "mark", age: 39 },
    { name: "hanna", age: 28 },
  ]);

  // useMemo는 값을 저장하고 있음(변경 전까지)
  // sum은 persons가 변하지 않으면 다시 render 할 필요가 없음
  // persons에 의존적인 로직을 계산하기 위해 사용
  const count = useMemo(() => {
    return sum(persons);
  }, [persons]);

  // useCallback은 함수를 저장하고 있음(변경 전까지)
  const click = useCallback(() => {
    console.log(value);
  }, []);

  return (
    <div>
      <input value={value} onChange={change} />
      <p>{count}</p>
      <button onClick={click}>btn</button>
    </div>
  );

  function change(e) {
    setValue(e.target.value);
  }
}
