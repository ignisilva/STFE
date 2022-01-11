import { useState } from "react";

export default function A() {
  const [value, setValue] = useState("아직 안바뀜");

  return (
    <div>
      <B value={value} />
      <button onClick={click}>E의 값 바꾸기</button>
    </div>
  );

  function click() {
    setValue("E의 값을 변경");
  }
}
function B({ value }) {
  return (
    <div>
      <p>여긴 B</p>
      <C value={value} />
    </div>
  );
}
function C({ value }) {
  return (
    <div>
      <p>여긴 C</p>
      <D value={value} />
    </div>
  );
}

function D({ value }) {
  return (
    <div>
      <p>여긴 D</p>
      <E value={value} />
    </div>
  );
}

function E({ value }) {
  return (
    <div>
      <p>여긴 E</p>
      <h3>{value}</h3>
    </div>
  );
}
